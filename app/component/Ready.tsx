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

const services = [
  { value: "SEO Services", label: "SEO Services" },
  { value: "Google Ads", label: "Google Ads" },
  { value: "Web Design", label: "Web Design" },
  { value: "Local SEO", label: "Local SEO" },
  { value: "Social Media Marketing", label: "Social Media Marketing" },
  { value: "Full Marketing Package", label: "Full Marketing Package" },
];

const budget = [
  { value: "5k-10k", label: "$5K - $10K" },
  { value: "10k-20k", label: "$10K - $20K" },
  { value: "20k-30k", label: "$20K - $30K" },
  { value: "Above 30k+", label: "Above $30K" },
];

const Ready = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    businessType: "",
    budget: "",
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
      className="bg-gradient-to-r from-blue-50 to-blue-100 py-10 md:py-16 xl:py-20 px-6 md:px-10 xl:px-40 w-full"
    >
      {/* Heading */}
      <div className="text-center max-w-6xl mx-auto animate-fadeIn">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight">
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
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 mt-10 lg:mt-20">
        {/* Form */}
        <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 animate-slideUp">
          <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
            Fill out this simple contact form or call us at
          </h3>
          <p className="text-blue-800 font-semibold mb-6">+1 (336) 515-7898</p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 space-y-4 md:space-y-0"
          >
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Full Name*</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
                required
              />
            </div>
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Email*</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
                required
              />
            </div>
            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
                required
              />
            </div>
            {/* Service */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Services*</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
                required
              >
                <option value="">Select a Service</option>
                {services.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            {/* Business Type */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Business Type*</label>
              <select
                name="businessType"
                value={form.businessType}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
                required
              >
                <option value="">Select Your Business Type</option>
                {marketing.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>
            {/* Budget */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Marketing Budget*</label>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
                required
              >
                <option value="">Select Your Monthly Budget</option>
                {budget.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>
            {/* Message */}
            <div className="md:col-span-2 flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Type Here..."
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
              ></textarea>
            </div>
            {/* TCPA */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="flex items-start gap-2 text-gray-700">
                <input
                  type="checkbox"
                  name="tcpaConsent"
                  checked={form.tcpaConsent}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300"
                />
                By clicking "Make An Inquiry", you consent to be contacted. Please read our{" "}
                <a href="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>
                .
              </label>
            </div>
            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105"
              >
                {loading ? "Sending..." : "Make An Inquiry"}
              </button>
              <p className="text-center text-gray-600 mt-3">No spam. Just real strategies that work.</p>
            </div>
          </form>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 animate-slideUp">
          <a
            href="#services"
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 transition transform hover:scale-105"
          >
            <PhoneCall size={20} /> Consult an Elite Roofing Marketing Specialist Now
          </a>
          <a
            href="#services"
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-white text-blue-900 border border-blue-900 font-semibold hover:bg-blue-900 hover:text-white transition transform hover:scale-105"
          >
            <FaEnvelope size={20} /> Consult an Elite Roofing Marketing Specialist Now
          </a>

          {/* Contact Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 space-y-4 hover:shadow-2xl transition transform hover:scale-105">
            <h4 className="font-semibold text-lg text-blue-900">Get In Touch</h4>
            <div className="flex items-center gap-3">
              <PhoneCall className="text-blue-900" /> <span className="text-gray-700">+1 (336) 515-7898</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-900" /> <span className="text-gray-700">sales@cibirix.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-900" /> <span className="text-gray-700">Serving all of USA</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-blue-900" /> <span className="text-gray-700">Mon-Fri: 9AM–6PM IST</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;