export type Campaign = {
  id: string;
  name: string;
  description: string;
  directNumber: string; // E.164 format for tel: links
  directNumberDisplay: string;
};

// Public info only. RTB endpoints + X-RTB-Secret headers live server-side
// in app/api/rtb-ping/route.ts and are read from environment variables.
export const campaigns: Campaign[] = [
  {
    id: "roofing-pay-per-call",
    name: "Roofing Pay Per Call Listing",
    description: "General roofing leads — repairs, replacements & inspections.",
    directNumber: "+16802251260",
    directNumberDisplay: "(680) 225-1260",
  },
  {
    id: "roofing-contractors-pay-per-call",
    name: "Roofing Contractors Pay Per Call Listing",
    description: "Leads for licensed roofing contractors & commercial jobs.",
    directNumber: "+16802251266",
    directNumberDisplay: "(680) 225-1266",
  },
];