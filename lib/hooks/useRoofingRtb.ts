"use client";

import { useState } from "react";
import { CampaignId } from "@/lib/roofingCampaigns";

interface RtbResult {
  success: boolean;
  accepted?: boolean;
  bid?: number | null;
  trackingNumber?: string | null;
  error?: string;
}

export function useRoofingRtb() {
  const [loading, setLoading] = useState(false);

  const getQuote = async (campaign: CampaignId, phoneE164: string, zip: string): Promise<RtbResult> => {
    setLoading(true);
    try {
      const res = await fetch("/api/roofing-rtb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ campaign, caller: phoneE164, zip }),
      });
      const data: RtbResult = await res.json();
      return data;
    } catch {
      return { success: false, error: "Network error" };
    } finally {
      setLoading(false);
    }
  };

  return { getQuote, loading };
}