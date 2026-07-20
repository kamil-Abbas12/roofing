import { NextRequest, NextResponse } from "next/server";

type CampaignId = "contractors" | "general";

interface CampaignServerConfig {
  endpointEnv: string;
  secretEnv: string;
  defaultEndpoint: string;
}

// Secrets are read from env vars below — never hardcode them here.
const CAMPAIGN_CONFIG: Record<CampaignId, CampaignServerConfig> = {
  contractors: {
    endpointEnv: "CALLSCALER_ROOFING_CONTRACTORS_ENDPOINT",
    secretEnv: "CALLSCALER_ROOFING_CONTRACTORS_SECRET",
    defaultEndpoint: "https://v3.callscaler.com/api/v1/rtb/ping/b7731885-0143-4806-b128-608387e58c21",
  },
  general: {
    endpointEnv: "CALLSCALER_ROOFING_GENERAL_ENDPOINT",
    secretEnv: "CALLSCALER_ROOFING_GENERAL_SECRET",
    defaultEndpoint: "https://v3.callscaler.com/api/v1/rtb/ping/1de21e07-b98f-4002-9edc-c6726bb3b188",
  },
};

interface RtbRequestBody {
  campaign?: CampaignId;
  caller: string; // E.164, e.g. "+15551234567"
  zip: string;
  ref_id?: string;
}

function isValidPhone(phone: string) {
  return /^\+1\d{10}$/.test(phone);
}

function isValidZip(zip: string) {
  return /^\d{5}$/.test(zip);
}

export async function POST(req: NextRequest) {
  let body: RtbRequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const { campaign, caller, zip, ref_id } = body;

  if (!campaign || !CAMPAIGN_CONFIG[campaign]) {
    return NextResponse.json(
      { success: false, error: "campaign must be 'contractors' or 'general'" },
      { status: 400 }
    );
  }

  if (!caller || !isValidPhone(caller)) {
    return NextResponse.json(
      { success: false, error: "caller must be E.164 format, e.g. +15551234567" },
      { status: 400 }
    );
  }

  if (!zip || !isValidZip(zip)) {
    return NextResponse.json(
      { success: false, error: "zip must be a 5-digit ZIP code" },
      { status: 400 }
    );
  }

  const config = CAMPAIGN_CONFIG[campaign];
  const endpoint = process.env[config.endpointEnv] || config.defaultEndpoint;
  const secret = process.env[config.secretEnv];

  if (!secret) {
    console.error(`${config.secretEnv} is not set`);
    return NextResponse.json({ success: false, error: "Server misconfiguration" }, { status: 500 });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const rtbRes = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RTB-Secret": secret,
      },
      body: JSON.stringify({
        caller,
        zip,
        ref_id: ref_id || crypto.randomUUID(),
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!rtbRes.ok) {
      const text = await rtbRes.text().catch(() => "");
      console.error("Roofing RTB ping failed", campaign, rtbRes.status, text);
      return NextResponse.json({ success: false, error: "No bid available" }, { status: 200 });
    }

    const data = await rtbRes.json();

    return NextResponse.json({
      success: true,
      accepted: Boolean(data.accept ?? data.accepted ?? true),
      bid: data.bid ?? null,
      trackingNumber: data.tracking_number ?? data.trackingNumber ?? null,
    });
  } catch (err) {
    console.error("Roofing RTB request error", campaign, err);
    return NextResponse.json({ success: false, error: "Unable to reach bidding service" }, { status: 502 });
  }
}