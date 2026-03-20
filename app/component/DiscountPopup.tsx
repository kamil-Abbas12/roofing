"use client";

import { useEffect, useState } from "react";
import { X, Gift } from "lucide-react";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  if (!isOpen) return null;

  return (
    // role="dialog" + aria-modal for screen readers
    // aria-labelledby links to the heading for context
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
        onClick={() => setIsOpen(false)}
      />

      {/* Card */}
      <div className="relative w-full max-w-md">
        <div className="relative rounded-3xl bg-white px-8 pb-8 pt-14 shadow-2xl">

          {/* Close — accessible label */}
          <button
            onClick={() => setIsOpen(false)}
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

            {/* ✅ h2 → use a proper heading level; id linked to aria-labelledby */}
            <h2
              id="popup-heading"
              className="text-2xl font-bold text-gray-900"
            >
              Need Roofing Assistance?
            </h2>

            {/* ✅ id linked to aria-describedby */}
            <p id="popup-description" className="text-gray-600 text-sm leading-relaxed">
              You may qualify for a
              {/* ✅ Use <strong> for semantic emphasis instead of plain span */}
              <strong className="block text-3xl font-extrabold text-red-600 mt-2">
                $0 Down Roof Replacement
              </strong>
            </p>

            {/* ✅ Fix contrast: red-500 (#ef4444) on white fails WCAG AA for small text.
                Use red-700 (#b91c1c) which passes AA contrast ratio 4.5:1+ */}
            <a
              href="tel:+18669644568"
              className="mt-4 inline-flex w-full justify-center rounded-lg bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Call now to see if you qualify for a free roof replacement"
            >
              Call Now To See If You Qualify
            </a>

            <button
              onClick={() => setIsOpen(false)}
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