import { NextRequest, NextResponse } from "next/server";

type CampaignId = "contractors" | "general";
type LeadSource = "popup" | "consult_button" | "contact_form";

const VALID_CAMPAIGNS: CampaignId[] = ["contractors", "general"];
const VALID_SOURCES: LeadSource[] = ["popup", "consult_button", "contact_form"];

interface RtbInfo {
  pinged: boolean;
  accepted: boolean | null;
  bid: number | null;
  trackingNumber: string | null;
}

interface RoofingLeadPayload {
  campaign: CampaignId;
  source: LeadSource;
  phone: string; // digits only, 10 digits
  zip: string; // 5 digits
  name?: string;
  email?: string;
  businessType?: string;
  message?: string;
  tcpaConsent: boolean;
  rtb?: RtbInfo;
}

function isValidPhone(phone: string) {
  return /^\d{10}$/.test(phone);
}

function isValidZip(zip: string) {
  return /^\d{5}$/.test(zip);
}

export async function POST(req: NextRequest) {
  let body: RoofingLeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const { campaign, source, phone, zip, tcpaConsent } = body;

  if (!campaign || !VALID_CAMPAIGNS.includes(campaign)) {
    return NextResponse.json({ success: false, error: "Invalid or missing campaign" }, { status: 400 });
  }

  if (!source || !VALID_SOURCES.includes(source)) {
    return NextResponse.json({ success: false, error: "Invalid or missing source" }, { status: 400 });
  }

  if (!phone || !isValidPhone(phone)) {
    return NextResponse.json({ success: false, error: "phone must be 10 digits" }, { status: 400 });
  }

  if (!zip || !isValidZip(zip)) {
    return NextResponse.json({ success: false, error: "zip must be 5 digits" }, { status: 400 });
  }

  if (typeof tcpaConsent !== "boolean") {
    return NextResponse.json({ success: false, error: "tcpaConsent must be boolean" }, { status: 400 });
  }

  try {
    const db = await getDb();

    const doc = {
      campaign,
      source,
      phone,
      zip,
      name: body.name?.trim() || null,
      email: body.email?.trim() || null,
      businessType: body.businessType || null,
      message: body.message || null,
      tcpaConsent,
      rtb: body.rtb || { pinged: false, accepted: null, bid: null, trackingNumber: null },
      userAgent: req.headers.get("user-agent") || null,
      ip: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || null,
      createdAt: new Date(),
    };

    const result = await db.collection("roofing_leads").insertOne(doc);

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (err) {
    console.error("Failed to store roofing lead", err);
    return NextResponse.json({ success: false, error: "Failed to store lead" }, { status: 500 });
  }
}