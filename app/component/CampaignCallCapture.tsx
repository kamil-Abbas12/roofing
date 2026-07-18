"use client";

import { useState } from "react";
import { PhoneCall, MapPin, Loader2, CheckCircle2, ArrowLeft } from "lucide-react";
import { campaigns } from "./campaigns";

type Step = "select-campaign" | "select-method" | "form" | "result";

type RtbResult = {
  accepted: boolean;
  trackingNumber?: string;
  message?: string;
};

const CampaignCallCapture = () => {
  const [step, setStep] = useState<Step>("select-campaign");
  const [campaignId, setCampaignId] = useState<string>("");
  const [form, setForm] = useState({ name: "", phone: "", zip: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RtbResult | null>(null);

  const selectedCampaign = campaigns.find((c) => c.id === campaignId);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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

  const reset = () => {
    setStep("select-campaign");
    setCampaignId("");
    setForm({ name: "", phone: "", zip: "" });
    setResult(null);
  };

  return (
    <section
      aria-labelledby="campaign-capture-heading"
      className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8"
    >
      <h2 id="campaign-capture-heading" className="sr-only">
        Choose a roofing campaign and connect with us
      </h2>

      {/* Step 1: Choose campaign */}
      {step === "select-campaign" && (
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-blue-900">Choose Your Campaign</h3>
          <div className="grid gap-4">
            {campaigns.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setCampaignId(c.id);
                  setStep("select-method");
                }}
                className="text-left p-4 rounded-xl border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <p className="font-semibold text-blue-900">{c.name}</p>
                <p className="text-sm text-gray-600 mt-1">{c.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Call now or fill form */}
      {step === "select-method" && selectedCampaign && (
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => setStep("select-campaign")}
            className="flex items-center gap-1 text-sm text-blue-700 hover:underline"
          >
            <ArrowLeft size={14} /> Change campaign
          </button>
          <h3 className="text-xl md:text-2xl font-bold text-blue-900">{selectedCampaign.name}</h3>
          <p className="text-gray-600">How would you like to connect?</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={`tel:${selectedCampaign.directNumber}`}
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-blue-900 text-white hover:bg-blue-800 transition"
            >
              <PhoneCall size={28} aria-hidden="true" />
              <span className="font-semibold">Call Now</span>
              <span className="text-sm opacity-90">{selectedCampaign.directNumberDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => setStep("form")}
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl border-2 border-blue-900 text-blue-900 hover:bg-blue-50 transition"
            >
              <MapPin size={28} aria-hidden="true" />
              <span className="font-semibold">Request a Callback</span>
              <span className="text-sm opacity-80">Enter your ZIP code</span>
            </button>
          </div>

          <p className="text-xs text-gray-500 pt-2">
            Testing with a VoIP number (Google Voice, softphone)? Those are blocked as spam.
            Register your test number on the{" "}
            <a
              href="https://calls.virtualsalesbuilder.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Virtual Sales Builder dashboard
            </a>{" "}
            first.
          </p>
        </div>
      )}

      {/* Step 3: Form with ZIP */}
      {step === "form" && selectedCampaign && (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <button
            type="button"
            onClick={() => setStep("select-method")}
            className="flex items-center gap-1 text-sm text-blue-700 hover:underline"
          >
            <ArrowLeft size={14} /> Back
          </button>
          <h3 className="text-xl md:text-2xl font-bold text-blue-900">{selectedCampaign.name}</h3>

          <div className="flex flex-col">
            <label htmlFor="cc-name" className="text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input
              id="cc-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none text-gray-900 placeholder:text-gray-400"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cc-phone" className="text-gray-700 font-semibold mb-2">
              Phone Number
            </label>
            <input
              id="cc-phone"
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
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none text-gray-900 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cc-zip" className="text-gray-700 font-semibold mb-2">
              ZIP Code
            </label>
            <input
              id="cc-zip"
              name="zip"
              type="text"
              inputMode="numeric"
              pattern="^\d{5}(-\d{4})?$"
              maxLength={10}
              value={form.zip}
              onChange={handleChange}
              required
              autoComplete="postal-code"
              placeholder="e.g. 30301"
              title="Enter a valid US ZIP code"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none text-gray-900 placeholder:text-gray-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="animate-spin" size={18} aria-hidden="true" />}
            {loading ? "Checking availability…" : "Check My ZIP & Get Callback Number"}
          </button>
        </form>
      )}

      {/* Step 4: Result */}
      {step === "result" && result && (
        <div className="text-center space-y-4">
          {result.accepted ? (
            <>
              <CheckCircle2 className="mx-auto text-green-600" size={48} aria-hidden="true" />
              <h3 className="text-xl font-bold text-blue-900">You&apos;re all set!</h3>
              <p className="text-gray-700">
                Call the number below now — we&apos;ll connect you right away, no ZIP prompt needed.
              </p>
              <a
                href={`tel:${result.trackingNumber}`}
                className="inline-flex items-center gap-2 justify-center w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
              >
                <PhoneCall size={20} aria-hidden="true" />
                Call {result.trackingNumber}
              </a>
            </>
          ) : (
            <>
              <h3 className="text-xl font-bold text-blue-900">No match right now</h3>
              <p className="text-gray-700">
                {result.message || "We couldn't find an available slot for this ZIP code."}
              </p>
              {selectedCampaign && (
                <a
                  href={`tel:${selectedCampaign.directNumber}`}
                  className="inline-flex items-center gap-2 justify-center w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
                >
                  <PhoneCall size={20} aria-hidden="true" />
                  Call {selectedCampaign.directNumberDisplay} Anyway
                </a>
              )}
            </>
          )}
          <button
            type="button"
            onClick={reset}
            className="text-sm text-blue-700 hover:underline focus:outline-none focus:underline"
          >
            Start Over
          </button>
        </div>
      )}
    </section>
  );
};

export default CampaignCallCapture;