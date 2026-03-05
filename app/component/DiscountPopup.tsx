"use client";

import { useEffect, useState } from "react";
import { X, Gift } from "lucide-react";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
      style={{
        backgroundColor: "#2b2a63",
        // subtle circular pattern like the reference
        backgroundImage:
          "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.06) 2px, transparent 2px), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.05) 2px, transparent 2px)",
        backgroundSize: "100px 100px",
      }}
    >
      {/* dark overlay */}
      <div
        className="absolute inset-0 bg-black/25"
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      {/* Card */}
      <div className="relative w-full max-w-md">
        <div className="relative rounded-3xl bg-white px-8 pb-8 pt-14 shadow-2xl">
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
            aria-label="Close popup"
            type="button"
          >
            <X size={20} />
          </button>

          {/* Gift + confetti (top) */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              {/* confetti pieces */}
              <span className="confetti confetti-a" />
              <span className="confetti confetti-b" />
              <span className="confetti confetti-c" />
              <span className="confetti confetti-d" />
              <span className="confetti confetti-e" />
              <span className="confetti confetti-f" />

              {/* Gift badge */}
              <div className="grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-red-500 to-orange-400 shadow-xl ring-8 ring-white">
                <Gift className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>

          {/* Content (text kept the same as your original) */}
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Call Today!
            </h2>

            <p className="mt-4 text-gray-700">
              Get{" "}
              <span className="text-5xl font-extrabold tracking-tight text-red-500">
                30%
              </span>{" "}
              <span className="text-xl font-semibold text-red-500">to</span>{" "}
              <span className="text-5xl font-extrabold tracking-tight text-red-500">
                40%
              </span>{" "}
              <span className="text-lg font-semibold text-gray-800">
                Discount.
              </span>
            </p>

            {/* CTA button (styled like reference “GET IT”) */}
            <a
              href="tel:2762548576"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-red-500 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-red-600 active:scale-[0.99]"
            >
              Call Now
            </a>

            {/* “NO, THANKS” like reference */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-5 text-xs font-bold uppercase tracking-wider text-gray-600 underline decoration-gray-300 underline-offset-4 transition hover:text-gray-900"
              type="button"
            >
              No, Thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;
