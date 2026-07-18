import { NextRequest, NextResponse } from "next/server";

/**
 * Server-side only. Endpoint + X-RTB-Secret for each campaign come from
 * Virtual Sales Builder's campaign dashboard (calls.virtualsalesbuilder.com)
 * and must be set as environment variables — never hardcode secrets here
 * or expose them to the client.
 *
 * .env.local:
 *   RTB_ENDPOINT_ROOFING_PPC=https://v3.callscaler.com/api/v1/rtb/ping/...
 *   RTB_SECRET_ROOFING_PPC=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 *   RTB_ENDPOINT_ROOFING_CONTRACTORS=https://v3.callscaler.com/api/v1/rtb/ping/...
 *   RTB_SECRET_ROOFING_CONTRACTORS=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 */
const RTB_CONFIG: Record<
  string,
  { endpoint: string; secret: string; directNumber: string }
> = {
  "roofing-pay-per-call": {
    endpoint: process.env.RTB_ENDPOINT_ROOFING_PPC || "",
    secret: process.env.RTB_SECRET_ROOFING_PPC || "",
    directNumber: "+16802251260",
  },
  "roofing-contractors-pay-per-call": {
    endpoint: process.env.RTB_ENDPOINT_ROOFING_CONTRACTORS || "",
    secret: process.env.RTB_SECRET_ROOFING_CONTRACTORS || "",
    directNumber: "+16802251266",
  },
};

const ZIP_REGEX = /^\d{5}(-\d{4})?$/;
const PHONE_REGEX = /^\+?[0-9]{10,15}$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { campaignId, name, phone, zip } = body as {
      campaignId?: string;
      name?: string;
      phone?: string;
      zip?: string;
    };

    if (!campaignId || !RTB_CONFIG[campaignId]) {
      return NextResponse.json(
        { message: "Invalid campaign selected." },
        { status: 400 }
      );
    }

    if (!phone || !PHONE_REGEX.test(phone)) {
      return NextResponse.json(
        { message: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    if (!zip || !ZIP_REGEX.test(zip)) {
      return NextResponse.json(
        { message: "Please enter a valid US ZIP code." },
        { status: 400 }
      );
    }

    const config = RTB_CONFIG[campaignId];

    if (!config.endpoint || !config.secret) {
      console.error(`Missing RTB credentials for campaign: ${campaignId}`);
      return NextResponse.json(
        { message: "This campaign isn't configured yet. Please call us directly." },
        { status: 500 }
      );
    }

    const refId = `${campaignId}-${Date.now()}`;

    const rtbResponse = await fetch(config.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RTB-Secret": config.secret,
      },
      body: JSON.stringify({
        caller: phone,
        zip,
        ref_id: refId,
        name: name || undefined,
      }),
    });

    const rtbData = await rtbResponse.json().catch(() => null);

    if (!rtbResponse.ok || rtbData?.accept === false) {
      return NextResponse.json({
        accepted: false,
        message:
          rtbData?.message ||
          "No matching offer for this ZIP code right now. You can still call us directly.",
      });
    }

    // Bid accepted: caller can now dial the tracking number directly,
    // skipping the ZIP IVR prompt as noted in the campaign setup.
    return NextResponse.json({
      accepted: true,
      trackingNumber: config.directNumber,
      bid: rtbData?.bid ?? null,
      refId,
    });
  } catch (err) {
    console.error("RTB ping error:", err);
    return NextResponse.json(
      { message: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}