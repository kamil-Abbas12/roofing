"use client";

import { useEffect, useState } from "react";
import { X, Phone } from "lucide-react";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 1.5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      {/* Popup Box */}
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-red-500 transition"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-700 text-white p-4 rounded-full">
              <Phone size={28} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Call Today!
          </h2>

          <p className="text-lg font-semibold text-blue-800 mb-6">
            Get 30% to 40% Discount.
          </p>

          <a
            href="tel:+1234567890"
            className="inline-block bg-blue-900 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;