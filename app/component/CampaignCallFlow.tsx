"use client";

import { useState } from "react";
import { Phone, Loader2, Lock, ChevronLeft } from "lucide-react";
import { ROOFING_CAMPAIGNS, CampaignId } from "@/lib/roofingCampaigns";
import { useRoofingRtb } from "@/lib/hooks/useRoofingRtb";

type Step = "choice" | "capture" | "connecting" | "result";
type LeadSource = "popup" | "consult_button";

function formatPhoneDisplay(digits: string) {
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

interface Props {
  source: LeadSource;
  onDone?: () => void;
}

export default function CampaignCallFlow({ source, onDone }: Props) {
  const [step, setStep] = useState<Step>("choice");
  const [campaign, setCampaign] = useState<CampaignId | null>(null);
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [callInfo, setCallInfo] = useState<{ display: string; tel: string } | null>(null);

  const { getQuote, loading } = useRoofingRtb();

  const canContinue = zip.length === 5 && phone.length === 10;

  const handleChooseCampaign = (id: CampaignId) => {
    setCampaign(id);
    setStep("capture");
  };

  const handleConnect = async () => {
    if (!campaign) return;
    setStep("connecting");

    const info = ROOFING_CAMPAIGNS[campaign];
    let result = { display: info.fallbackDisplay, tel: info.fallbackTel };
    let rtb = {
      pinged: false,
      accepted: null as boolean | null,
      bid: null as number | null,
      trackingNumber: null as string | null,
    };

    try {
      const res = await getQuote(campaign, `+1${phone}`, zip);
      rtb = {
        pinged: true,
        accepted: res.accepted ?? null,
        bid: res.bid ?? null,
        trackingNumber: res.trackingNumber ?? null,
      };
      if (res.success && res.accepted && res.trackingNumber) {
        const digits = res.trackingNumber.replace(/\D/g, "").slice(-10);
        result = { display: formatPhoneDisplay(digits), tel: `tel:+1${digits}` };
      }
    } catch {
      // keep fallback
    }

    try {
      await fetch("/api/roofing-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ campaign, source, phone, zip, tcpaConsent: true, rtb }),
      });
    } catch (err) {
      console.error("Failed to save roofing lead", err);
      // Don't block the user from calling over a storage failure
    }

    setCallInfo(result);
    setStep("result");
  };

  return (
    <div>
      {step === "choice" && (
        <div>
          <p className="mb-4 text-sm text-gray-600">Which best describes what you need?</p>
          <div className="grid gap-3">
            {Object.values(ROOFING_CAMPAIGNS).map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => handleChooseCampaign(c.id)}
                className="text-left rounded-xl border border-gray-200 p-4 hover:border-blue-400 hover:bg-blue-50 transition-all"
              >
                <div className="font-semibold text-blue-900">{c.label}</div>
                <div className="text-xs text-gray-500 mt-1">{c.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === "capture" && campaign && (
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setStep("choice")}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 mb-1"
          >
            <ChevronLeft size={14} /> Back
          </button>
          <p className="text-sm text-gray-600 mb-2">
            Enter your info so we can connect you with a {ROOFING_CAMPAIGNS[campaign].label.toLowerCase()} specialist.
          </p>
          <input
            type="text"
            inputMode="numeric"
            maxLength={5}
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
            placeholder="ZIP Code"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
          />
          <input
            type="tel"
            inputMode="numeric"
            value={formatPhoneDisplay(phone)}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
            placeholder="(555) 000-0000"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
          />
          <button
            type="button"
            onClick={handleConnect}
            disabled={!canContinue}
            className="w-full rounded-lg bg-blue-900 hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed py-3 text-sm font-semibold text-white transition-all"
          >
            Continue →
          </button>
        </div>
      )}

      {step === "connecting" && (
        <div className="flex flex-col items-center py-8 gap-3 text-blue-900">
          <Loader2 className="animate-spin" size={28} />
          <p className="text-sm">Finding your best offer...</p>
        </div>
      )}

      {step === "result" && callInfo && (
        <div className="text-center">
          <a href={callInfo.tel} onClick={onDone} className="block">
            <button className="w-full rounded-lg bg-blue-900 hover:bg-blue-800 py-4 text-white font-semibold flex flex-col items-center gap-1 transition-all shadow-lg shadow-blue-900/20">
              <span className="text-xs font-medium text-blue-100">Call now — speak with a specialist</span>
              <span className="flex items-center gap-2 text-xl font-bold">
                <Phone size={18} strokeWidth={2.5} />
                {callInfo.display}
              </span>
            </button>
          </a>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-400">
            <Lock size={11} />
            Your call is completely free and confidential
          </div>
        </div>
      )}
    </div>
  );
}