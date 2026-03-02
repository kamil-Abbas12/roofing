"use client";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

const marketing = [
  { value: "", label: "Select Your Business Type" },
  { value: "resd", label: "Residential Roofing" },
  { value: "comm", label: "Commercial Roofing" },
  { value: "storm", label: "Storm Damage Repair & Insurance" },
  { value: "roof", label: "Roof Repair & Maintenance" },
  { value: "new", label: "New Construction Roofing" },
  { value: "full", label: "Full Service Roofing Company" },
];

const services = [
  { value: "", label: "Select a Roofing Service" },
  { value: "SEO", label: "SEO Services" },
  { value: "google", label: "Google Ads" },
  { value: "web", label: "Web Design" },
  { value: "local", label: "Local SEO" },
  { value: "social", label: "Social Media Marketing" },
  { value: "content", label: "Full Marketing Package" },
];

const budget = [
  { value: "", label: "Select Your Monthly Marketing Budget" },
  { value: "5000", label: "$5K-$10K" },
  { value: "10000", label: "$10K-$20K" },
  { value: "20000", label: "$20K-$30K" },
  { value: "30000", label: "Above $30K" },
];

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose} // close when clicking outside
    >
      <div
        className="bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl h-full lg:h-[720px] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-2">
          Fill out this simple contact form or call us at
        </h2>
        <p className="text-orange-600 font-bold mb-6">+1 (336) 515-7898</p>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          onSubmit={(e) => e.preventDefault()} // handle submit later
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-bold text-gray-700 mb-2">
              Full Name <span className="text-gray-900">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-bold text-gray-700 mb-2">
              Email Address <span className="text-gray-900">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-bold text-gray-700 mb-2">
              Phone Number <span className="text-gray-900">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
          </div>

          {/* Service */}
          <div className="flex flex-col">
            <label htmlFor="services" className="text-sm font-bold text-gray-700 mb-2">
              Services <span className="text-gray-900">*</span>
            </label>
            <select
              id="services"
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            >
              {services.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>

          {/* Business Type */}
          <div className="flex flex-col">
            <label htmlFor="business" className="text-sm font-bold text-gray-700 mb-2">
              Business Type <span className="text-gray-900">*</span>
            </label>
            <select
              id="business"
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            >
              {marketing.map((market) => (
                <option key={market.value} value={market.value}>
                  {market.label}
                </option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div className="flex flex-col">
            <label htmlFor="budget" className="text-sm font-bold text-gray-700 mb-2">
              Marketing Budget <span className="text-gray-900">*</span>
            </label>
            <select
              id="budget"
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            >
              {budget.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label htmlFor="message" className="text-sm font-bold text-gray-700 mb-2">
              Message <span className="text-gray-900">*</span>
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="Type Here..."
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition"
            >
              Make An Inquiry
            </button>
            <div className="text-center text-gray-600 mt-5">
              No spam. Just real strategies that work.
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;