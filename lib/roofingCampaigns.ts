// Public metadata only — no secrets here. Secrets live server-side in the API route.

export type CampaignId = "contractors" | "general";

export interface CampaignPublicInfo {
  id: CampaignId;
  label: string;
  description: string;
  fallbackDisplay: string;
  fallbackTel: string;
}

// Assumption: "contractors" = Roofing Contractors Pay Per Call Listing (680-225-1266)
//             "general" = Roofing Pay Per Call Listing (680-225-1260)
// Relabel these if the actual service split is different.
export const ROOFING_CAMPAIGNS: Record<CampaignId, CampaignPublicInfo> = {
  contractors: {
    id: "contractors",
    label: "Residential Roofing",
    description: "New roofs, repairs, and replacements for homeowners.",
    fallbackDisplay: "(680) 225-1266",
    fallbackTel: "tel:+16802251266",
  },
  general: {
    id: "general",
    label: "Commercial & Storm Damage Roofing",
    description: "Commercial projects, storm damage repair, and insurance claims.",
    fallbackDisplay: "(680) 225-1260",
    fallbackTel: "tel:+16802251260",
  },
};