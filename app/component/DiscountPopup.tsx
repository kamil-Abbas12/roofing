"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { X, Gift, ChevronLeft } from "lucide-react";
import dynamic from "next/dynamic";

const CampaignCallFlow = dynamic(() => import("./CampaignCallFlow"), {
  loading: () => <p className="text-center text-sm text-gray-500">Loading…</p>,
});

// How far down a non-homepage the visitor must scroll before we consider
// showing the popup (as a fraction of total scrollable height).
const SCROLL_TRIGGER_THRESHOLD = 0.5;

// On non-homepage routes, don't allow exit-intent or scroll triggers to fire
// in the first few seconds — someone bouncing immediately isn't "exit intent",
// they just haven't started reading yet.
const MIN_DWELL_MS = 4000;

const DiscountPopup = () => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [showFlow, setShowFlow] = useState(false);
  const hasShownRef = useRef(false);

  const openOnce = () => {
    if (hasShownRef.current) return;
    hasShownRef.current = true;
    setIsOpen(true);
  };

  // --- Homepage: original simple timer trigger ---
  useEffect(() => {
    if (!isHomepage) return;
    const timer = setTimeout(openOnce, 1500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHomepage]);

  // --- Other pages: scroll-depth OR exit-intent, whichever comes first ---
  useEffect(() => {
    if (isHomepage) return;

    let dwellTimer: ReturnType<typeof setTimeout>;
    let dwellElapsed = false;

    dwellTimer = setTimeout(() => {
      dwellElapsed = true;
    }, MIN_DWELL_MS);

    const handleScroll = () => {
      if (!dwellElapsed) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const scrollFraction = scrollTop / docHeight;
      if (scrollFraction >= SCROLL_TRIGGER_THRESHOLD) {
        openOnce();
      }
    };

    // Exit intent: cursor moves up toward the browser chrome (tab/back/close).
    // Desktop-only signal — mobile has no mouse, which is fine since scroll
    // depth covers that case.
    const handleMouseLeave = (e: MouseEvent) => {
      if (!dwellElapsed) return;
      if (e.clientY <= 0) {
        openOnce();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(dwellTimer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHomepage]);

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

  const handleClose = () => {
    setIsOpen(false);
    setShowFlow(false);
  };

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
        onClick={handleClose}
      />

      {/* Card */}
      <div className="relative w-full max-w-md">
        <div className="relative rounded-3xl bg-white px-8 pb-8 pt-14 shadow-2xl">

          {/* Close — accessible label */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close offer popup"
            type="button"
          >
            <X size={20} aria-hidden="true" />
          </button>

          {!showFlow && (
            <>
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
                <h2
                  id="popup-heading"
                  className="text-2xl font-bold text-gray-900"
                >
                  Need Roofing Assistance?
                </h2>

                <p id="popup-description" className="text-gray-600 text-sm leading-relaxed">
                  You may qualify for a
                  <strong className="block text-3xl font-extrabold text-red-600 mt-2">
                    $0 Down Roof Replacement
                  </strong>
                </p>

                <button
                  onClick={() => setShowFlow(true)}
                  type="button"
                  className="mt-4 inline-flex w-full justify-center rounded-lg bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Call now to see if you qualify for a free roof replacement"
                >
                  Call Now To See If You Qualify
                </button>

                <button
                  onClick={handleClose}
                  className="block w-full text-xs text-gray-600 hover:text-gray-900 focus:outline-none focus:underline"
                  type="button"
                >
                  No Thanks
                </button>
              </div>
            </>
          )}

          {showFlow && (
            <div className="mt-6">
              <button
                onClick={() => setShowFlow(false)}
                type="button"
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 mb-3"
              >
                <ChevronLeft size={14} /> Back
              </button>
              <CampaignCallFlow source="popup" onDone={handleClose} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;