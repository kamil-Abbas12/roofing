"use client";

import { useState } from "react";
import { Clock, MapPin, PhoneCall } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";
import React from "react";

const marketing = [
  { value: "Residential Roofing", label: "Residential Roofing" },
  { value: "Commercial Roofing", label: "Commercial Roofing" },
  { value: "Storm Damage Repair & Insurance", label: "Storm Damage Repair & Insurance" },
  { value: "Roof Repair & Maintenance", label: "Roof Repair & Maintenance" },
  { value: "New Construction Roofing", label: "New Construction Roofing" },
  { value: "Full Service Roofing Company", label: "Full Service Roofing Company" },
];



const Ready = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
    tcpaConsent: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    setForm({
      ...form,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formEl = e.currentTarget as HTMLFormElement;
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }
    if (!form.tcpaConsent) {
      alert("Please agree to the TCPA consent before submitting.");
      return;
    }
    setLoading(true);
    // Submit logic here...
  };

  return (
    <section
      id="Contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden py-12 md:py-16 lg:py-20 xl:py-24 px-6 md:px-10 lg:px-20 xl:px-40 bg-gradient-to-br from-[#F7FAFF] via-[#EFF7FF] to-[#EAFBFF]"
    >
      {/* Background blobs */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-cyan-300/25 blur-3xl animate-blob" />
        <div className="absolute top-10 -right-28 h-[520px] w-[520px] rounded-full bg-blue-400/20 blur-3xl animate-blob [animation-delay:600ms]" />
        <div className="absolute -bottom-40 left-1/3 h-[520px] w-[520px] rounded-full bg-sky-300/25 blur-3xl animate-blob [animation-delay:1200ms]" />
      </div>

      {/* Heading */}
      <div className="text-center max-w-6xl mx-auto animate-fadeIn">
        {/* ✅ id linked to aria-labelledby on <section> */}
        <h2 id="contact-heading" className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight">
          Why Roof Integrity is the{" "}
          <span className="text-blue-800">Ultimate Asset Protection</span> in 2026?
        </h2>
        <p className="mt-6 text-gray-700 md:text-lg lg:text-xl max-w-3xl mx-auto">
          In 2026, you don't just "fix" a roof. You fortify your future. Total roof integrity
          ensures that your most valuable asset remains safe, efficient, and fully insurable for
          decades to come.
        </p>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-8 mt-10 lg:mt-20">

        {/* FORM CARD */}
        <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 animate-slideUp">
          <div className="mb-6">
            <span className="text-xl md:text-2xl font-bold text-blue-900">Fill out this simple</span>
            <span className="text-xl md:text-2xl font-bold text-blue-800 ml-2">contact form or call us at</span>
            <span className="text-xl md:text-2xl font-bold text-blue-900 ml-2">+1 866 964 4568</span>
          </div>

          <form onSubmit={handleSubmit} noValidate aria-label="Contact inquiry form" className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Name */}
            <div className="flex flex-col">
              {/* ✅ htmlFor links label to input — fixes "Select elements do not have associated label" */}
              <label htmlFor="name" className="text-gray-700 font-semibold mb-2">Full Name *</label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition text-gray-900 placeholder:text-gray-400"
                required
                autoComplete="name"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-semibold mb-2">Email *</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition text-gray-900 placeholder:text-gray-400"
                required
                autoComplete="email"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-700 font-semibold mb-2">Phone Number *</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 866 964 4568"
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition text-gray-900 placeholder:text-gray-400"
                required
                autoComplete="tel"
              />
            </div>

           

            {/* Business Type */}
            <div className="flex flex-col">
              <label htmlFor="businessType" className="text-gray-700 font-semibold mb-2">Business Type *</label>
              <select
                id="businessType"
                name="businessType"
                value={form.businessType}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition text-gray-900"
                required
              >
                <option value="">Select Your Business Type</option>
                {marketing.map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2 flex flex-col">
              <label htmlFor="message" className="text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Type here..."
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* TCPA */}
            <div className="md:col-span-2 mt-2">
              {/* ✅ Changed h4 → h3 to maintain sequential heading order (h2 → h3) */}
              <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">TCPA Consent</h3>

              <label className="flex items-start gap-3 text-gray-700 text-xs md:text-sm leading-relaxed cursor-pointer">
                <input
                  type="checkbox"
                  name="tcpaConsent"
                  checked={form.tcpaConsent}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 accent-blue-600 cursor-pointer"
                  aria-describedby="tcpa-description"
                />
                <span id="tcpa-description">
                  By clicking "Make An Inquiry", (1) You consent and request to be contacted by
                  topinstantquotes.com,{" "}
                  <span className="text-blue-600 font-medium">Third Parties/Affiliates</span>{" "}
                  working on our behalf, and law firm(s) by phone, email, and text/SMS to the home
                  or mobile number(s) you provided even if your provided number is on a national or
                  state do not call list. In some cases, pre-recorded messages and automated
                  technology may be used to contact you for marketing purposes. Please read our{" "}
                  <a href="/privacy-policy" className="text-blue-600 hover:underline font-medium">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="text-blue-600 hover:underline font-medium">
                    Terms Of Service
                  </a>
                  . There is no requirement that you provide consent as a condition of any purchase.
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition transform lg:hover:scale-105 disabled:opacity-60"
              >
                {loading ? "Sending…" : "Make An Inquiry"}
              </button>
              <p className="text-center text-gray-600 mt-3">No spam. Just real strategies that work.</p>
            </div>
          </form>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <a
            href="tel:+18669644568"
            className="w-full flex items-center text-lg justify-center gap-2 py-3 px-6 rounded-lg bg-blue-900 text-white border border-blue-900 font-semibold hover:bg-white hover:text-blue-900 transition lg:hover:scale-105"
            aria-label="Call our elite roofing marketing specialist at 1-866-964-4568"
          >
            <PhoneCall size={20} aria-hidden="true" />
            Consult Elite Roofing Marketing Specialist Now
          </a>

          <a
            href="mailto:info@topdoglead.com"
            className="w-full flex items-center text-lg justify-center gap-2 py-3 px-6 rounded-lg bg-blue-900 text-white border border-blue-900 font-semibold hover:bg-white hover:text-blue-900 transition lg:hover:scale-105"
            aria-label="Submit your project inquiry via email to info@topdoglead.com"
          >
            <FaEnvelope size={20} aria-hidden="true" />
            Submit Your Expert Project Inquiry Now
          </a>

          {/* Contact Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 space-y-4 hover:shadow-2xl transition lg:hover:scale-105">
            {/* ✅ h4 → h3 for sequential heading order */}
            <h3 className="font-semibold text-lg text-blue-900">Get In Touch</h3>

            <address className="not-italic flex flex-col items-start gap-6">
              <a
                href="tel:+18669644568"
                className="flex items-center gap-2"
                aria-label="Call us at 1-866-964-4568"
              >
                <PhoneCall size={20} className="text-blue-900" aria-hidden="true" />
                <span className="text-gray-700">+1 866 964 4568</span>
              </a>

              <a
                href="mailto:info@topdoglead.com"
                className="flex items-center gap-2"
                aria-label="Email us at info@topdoglead.com"
              >
                <FaEnvelope size={20} className="text-blue-900" aria-hidden="true" />
                <span className="text-gray-700">info@topdoglead.com</span>
              </a>
            </address>

            <div className="flex items-center gap-2">
              <MapPin className="text-blue-900" aria-hidden="true" />
              <span className="text-gray-700">Serving all of USA</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-blue-900" aria-hidden="true" />
              <span className="text-gray-700">Mon–Fri: 9AM–6PM USA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;