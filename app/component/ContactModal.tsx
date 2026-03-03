"use client";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const marketing = [
  // { value: "", label: "Select Your Business Type" },
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

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  if (!open) return null;
 const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  service: "",
  businessType: "",
  budget: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (data.success) {
    alert("Inquiry Sent Successfully!");
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      businessType: "",
      budget: "",
      message: "",
    });
  } else {
    alert("Something went wrong");
  }

  setLoading(false);
};
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

        <span className="text-2xl text-blue-900 font-bold mb-6">
          Fill out this simple contact form or call us at
        </span>
        <span className="text-blue-900 ml-2 text-2xl font-bold mb-6">+1 (336) 515-7898</span>

        <form 
onSubmit={handleSubmit}
className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 lg:my-10 space-y-2 lg:space-y-5">

  <div className="flex flex-col">
  <label htmlFor="name" className="text-sm font-bold text-gray-700 mb-2">
    Full Name <span className="text-blue-900">*</span>
  </label>

  <input
    id="name"
    type="text"
    name="name"
    value={form.name}
  onChange={handleChange}
    placeholder="Enter your full name"
className="input-style"
   required
  />
</div>
 <div className="flex flex-col">
  <label htmlFor="email" className="text-sm font-bold text-gray-700 mb-2">
    Email Address <span className="text-blue-900">*</span>
  </label>

  <input
    id="email"
    type="text"
    value={form.email}
  onChange={handleChange}
    name="email"
    placeholder="Enter your email address"
className='input-style' 
 required
  />
</div>
 <div className="flex flex-col ">
  <label htmlFor="name" className="text-sm font-bold text-gray-700 mb-2">
    Phone Number <span className="text-blue-900">*</span>
  </label>

  <input
    id="phone"
    type="text"
    value={form.phone}
  onChange={handleChange}
    name="phone"
    placeholder="+1 (555) 123-4567"
className='input-style' 

  required
  />

  
</div>
 <div className="flex flex-col ">
  <label htmlFor="services" className="text-sm font-bold text-gray-700 mb-2">
    Services <span className="text-blue-900">*</span>
  </label>
<select
  name="service"
  value={form.service}
  onChange={handleChange}
  required
  className="w-full rounded-lg border border-gray-300 p-3"
>
  <option value="">Select a Service</option>
  {services.map((service) => (
    <option key={service.value} value={service.value}>
      {service.label}
    </option>
  ))}
</select>
  </div>
<div className='flex flex-col'>
  <label htmlFor="services" className="text-sm font-bold text-gray-700 mb-2">
    Business Type <span className="text-blue-900">*</span>
  </label>
<select 
name="businessType"
 value={form.businessType}
  onChange={handleChange}
  required
className="w-full rounded-lg border border-gray-300 p-3
bg-white text-gray-900
dark:bg-gray-800 dark:text-white dark:border-gray-600
focus:ring-2 focus:ring-blue-500 outline-none">
    <option value="">Select Your Business Type</option>
    {marketing.map((market) => (
      <option key={market.value} value={market.value}>
        {market.label}
      </option>
    ))}
  </select>
</div>
<div className='flex flex-col'>
  <label htmlFor="services" className="text-sm font-bold text-gray-700 mb-2">
    Marketing Budget <span className="text-blue-900">*</span>
  </label>
<select
  name="budget"
  value={form.budget}
  onChange={handleChange}
  required
  className="w-full rounded-lg border border-gray-300 p-3"
>
  <option value="">Select Your Monthly Marketing Budget</option>
  {budget.map((b) => (
    <option key={b.value} value={b.value}>
      {b.label}
    </option>
  ))}
</select>
  
</div>
<textarea
          rows={3}
          name="message"
            value={form.message}
  onChange={handleChange}
          placeholder="Type Here..."
   className="w-full rounded-lg border border-gray-300 p-3 md:col-span-2
bg-white text-gray-900 placeholder-gray-500  
dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-blue-600"
        ></textarea>

        {/* Button */}
        <div className="md:col-span-2">
          <button
          type="submit"
  disabled={loading}
            className="w-full cursor-pointer   bg-[#213150] text-white py-3 rounded-md
             hover:bg-blue-900  transition"
          >
              {loading ? "Sending..." : "Make An Inquiry"}

          </button>
          <div className="text-center text-md md:text-lg text-gray-600 mt-5">No spam. Just real strategies that work.</div>
        </div>
</form>
      </div>
    </div>
  );
};

export default ContactModal;