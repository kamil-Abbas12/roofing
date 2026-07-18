"use client";

import { useEffect, useState } from "react";
import { X, Gift, PhoneCall, MapPin, Loader2, CheckCircle2, ArrowLeft } from "lucide-react";
import { campaigns } from "./campaigns";

type Step = "select-campaign" | "select-method" | "form" | "result";

type RtbResult = {
  accepted: boolean;
  trackingNumber?: string;
  message?: string;
};

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [step, setStep] = useState<Step>("select-campaign");
  const [campaignId, setCampaignId] = useState<string>("");
  const [form, setForm] = useState({ phone: "", zip: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RtbResult | null>(null);

  const selectedCampaign = campaigns.find((c) => c.id === campaignId);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Trap focus & close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    // Prevent background scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeAndReset = () => {
    setIsOpen(false);
    // Reset after the close animation would run, so it's fresh if reopened
    setStep("select-campaign");
    setCampaignId("");
    setForm({ phone: "", zip: "" });
    setResult(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/rtb-ping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ campaignId, ...form }),
      });
      const data: RtbResult = await res.json();
      setResult(data);
      setStep("result");
    } catch (err) {
      console.error(err);
      setResult({
        accepted: false,
        message: "Something went wrong. Please try again or call us directly.",
      });
      setStep("result");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-heading"
      aria-describedby="popup-description"
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
      style={{
        backgroundColor: "#2b2a63",
        backgroundImage:
          "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.06) 2px, transparent 2px), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.05) 2px, transparent 2px)",
        backgroundSize: "100px 100px",
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/25"
        aria-hidden="true"
        onClick={closeAndReset}
      />

      {/* Card */}
      <div className="relative w-full max-w-md">
        <div className="relative rounded-3xl bg-white px-8 pb-8 pt-14 shadow-2xl max-h-[90vh] overflow-y-auto">

          {/* Close */}
          <button
            onClick={closeAndReset}
            className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close offer popup"
            type="button"
          >
            <X size={20} aria-hidden="true" />
          </button>

          {/* Gift icon badge */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
            <div className="relative">
              <span className="confetti confetti-a" />
              <span className="confetti confetti-b" />
              <span className="confetti confetti-c" />
              <span className="confetti confetti-d" />
              <span className="confetti confetti-e" />
              <span className="confetti confetti-f" />
              <div className="grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-red-500 to-orange-400 shadow-xl ring-8 ring-white">
                <Gift className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-6 text-center space-y-4">

            <h2 id="popup-heading" className="text-2xl font-bold text-gray-900">
              Need Roofing Assistance?
            </h2>

            <p id="popup-description" className="text-gray-600 text-sm leading-relaxed">
              You may qualify for a
              <strong className="block text-3xl font-extrabold text-red-600 mt-2">
                $0 Down Roof Replacement
              </strong>
            </p>

            {/* Step 1: choose campaign */}
            {step === "select-campaign" && (
              <div className="space-y-3 text-left">
                {campaigns.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setCampaignId(c.id);
                      setStep("select-method");
                    }}
                    className="w-full text-left p-3 rounded-lg border border-gray-300 hover:border-red-500 hover:bg-red-50 transition focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: call now or fill form */}
            {step === "select-method" && selectedCampaign && (
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setStep("select-campaign")}
                  className="flex items-center gap-1 text-xs text-gray-500 hover:underline"
                >
                  <ArrowLeft size={12} /> Change campaign
                </button>

                <a
                  href={`tel:${selectedCampaign.directNumber}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label={`Call now on ${selectedCampaign.directNumberDisplay}`}
                >
                  <PhoneCall size={18} aria-hidden="true" />
                  Call {selectedCampaign.directNumberDisplay}
                </a>

                <button
                  type="button"
                  onClick={() => setStep("form")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-red-700 px-6 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <MapPin size={18} aria-hidden="true" />
                  Enter ZIP for a Callback Number
                </button>
              </div>
            )}

            {/* Step 3: quick form (phone + zip) */}
            {step === "form" && selectedCampaign && (
              <form onSubmit={handleSubmit} noValidate className="space-y-3 text-left">
                <button
                  type="button"
                  onClick={() => setStep("select-method")}
                  className="flex items-center gap-1 text-xs text-gray-500 hover:underline"
                >
                  <ArrowLeft size={12} /> Back
                </button>

                <div className="flex flex-col">
                  <label htmlFor="popup-phone" className="text-gray-700 font-semibold mb-1 text-sm">
                    Phone Number
                  </label>
                  <input
                    id="popup-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => {
                      let value = e.target.value.replace(/[^\d+]/g, "");
                      if (value.includes("+")) {
                        value = "+" + value.replace(/\+/g, "").replace(/^\+/, "");
                      }
                      if (value.length > 15) value = value.slice(0, 15);
                      setForm({ ...form, phone: value });
                    }}
                    required
                    autoComplete="tel"
                    inputMode="numeric"
                    maxLength={15}
                    pattern="^\+?[0-9]{10,15}$"
                    title="Enter a valid phone number"
                    placeholder="+18669644568"
                    className="p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none text-gray-900 text-sm placeholder:text-gray-400"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="popup-zip" className="text-gray-700 font-semibold mb-1 text-sm">
                    ZIP Code
                  </label>
                  <input
                    id="popup-zip"
                    name="zip"
                    type="text"
                    inputMode="numeric"
                    pattern="^\d{5}(-\d{4})?$"
                    maxLength={10}
                    value={form.zip}
                    onChange={(e) => setForm({ ...form, zip: e.target.value })}
                    required
                    autoComplete="postal-code"
                    placeholder="e.g. 30301"
                    title="Enter a valid US ZIP code"
                    className="p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none text-gray-900 text-sm placeholder:text-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-800 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {loading && <Loader2 className="animate-spin" size={16} aria-hidden="true" />}
                  {loading ? "Checking…" : "Check My ZIP"}
                </button>
              </form>
            )}

            {/* Step 4: result */}
            {step === "result" && result && (
              <div className="space-y-3">
                {result.accepted ? (
                  <>
                    <CheckCircle2 className="mx-auto text-green-600" size={36} aria-hidden="true" />
                    <p className="text-sm text-gray-700">
                      You&apos;re good to go — call now, no ZIP prompt needed.
                    </p>
                    <a
                      href={`tel:${result.trackingNumber}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-800"
                    >
                      <PhoneCall size={18} aria-hidden="true" />
                      Call {result.trackingNumber}
                    </a>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-gray-700">
                      {result.message || "No match for this ZIP right now."}
                    </p>
                    {selectedCampaign && (
                      <a
                        href={`tel:${selectedCampaign.directNumber}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-800"
                      >
                        <PhoneCall size={18} aria-hidden="true" />
                        Call {selectedCampaign.directNumberDisplay} Anyway
                      </a>
                    )}
                  </>
                )}
              </div>
            )}

            <button
              onClick={closeAndReset}
              className="block w-full text-xs text-gray-600 hover:text-gray-900 focus:outline-none focus:underline"
              type="button"
            >
              No Thanks
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;