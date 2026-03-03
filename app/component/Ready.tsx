
"use client";
import { useState } from "react";
import { Clock, MapPin, PhoneCall } from 'lucide-react';
import React from 'react'
import { FaEnvelope } from 'react-icons/fa';
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

const Ready = () => {
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
<section id='Contact' className='bg-white py-6 md:py-10 lg:py-16 xl:py-20 md:px-10 xl:px-40 w-full h-full'>
      <div className="text-center max-w-6xl mx-auto">
          <span className="text-xl md:text-3xl lg:text-5xl font-bold text-blue-900 leading-tight">
Prepared to Scale Your  <span className='text-xl md:text-3xl mx-2 lg:text-5xl font-bold text-blue-900 leading-tight'>

American Roofing</span>
<span>
Company?
</span>
          </span>

          <p className="mt-6 text-gray-600 text-md md:text-xl lg:max-w-4xl text-center mx-auto">
Initiate the path towards being the top roofing provider in your market. Claim your complimentary marketing analysis and bespoke lead acquisition plan now.

          </p>
        </div>
        <div className='w-full justify-between items-center gap-5 flex flex-col lg:flex-row mt-10 lg:mt-20'>
          <div className='left w-[90%] lg:w-1/2 border border-gray-200 shadow-lg rounded-xl mx-2 md:mx-0 h-full lg:h-[720px] p-6'>
          <span className=" text-lg lg:text-xl font-bold text-blue-900 mb-4">Fill out this simple contact form or call us at
             </span>
           <span className=" text-lg md:text-xl ml-2 font-bold text-blue-900 mb-4">
             +1 (336) 515-7898</span>   
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
          <div className="right w-full lg:w-1/2  h-full lg:h-[720px] p-6">
            <div className="flex flex-col items-center w-full  h-full space-y-4">
       <a
  href="#services"
  className="w-full bg-[#213150] text-white flex items-center justify-center gap-2 xl:gap-3
  py-2 px-6  rounded-lg font-semibold text-sm sm:text-base lg:text-lg
  hover:bg-blue-900 transition"
>
  <PhoneCall size={20} className="lg:shrink-0" />

  <span className=" min-w-0 lg:whitespace-nowrap  text-center">
Consult an Elite Roofing Marketing Specialist Now
  </span>
</a>
    <a
  href="#services"
  className="w-full text-blue-900 bg-white flex items-center border border-blue-900 justify-center gap-2 xl:gap-3
  py-2 px-6  rounded-lg font-semibold text-sm sm:text-base lg:text-lg
  hover:bg-[#213150] hover:text-white transition"
>
            <FaEnvelope size={20} className='lg:shrink-0' />

  <span className=" min-w-0 lg:whitespace-nowrap  text-center">
Consult an Elite Roofing Marketing Specialist Now
  </span>
</a>
<div className='w-full my-4 h-[250px] border border-gray-300 rounded-md shadow-md'>
<div className='flex flex-col justify-start p-6 '>
<h1 className='text-lg md:text-xl font-semibold'>Get In Touch
</h1>
<div className='justify-start gap-3 mt-4 cursor-pointer items-center flex '>
  <PhoneCall size={22} className='text-blue-900 ' />
<span className='text-gray-600 text-base md:text-lg'>+1 (336) 515-7898</span>
</div>
<div className='justify-start gap-3 cursor-pointer mt-4 items-center flex '>
  <FaEnvelope size={22} className='text-blue-900 ' />
<span className='text-gray-600 text-base md:text-lg'>sales@cibirix.com</span>
</div>
<div className='justify-start gap-3 cursor-pointer mt-4 items-center flex '>
  <MapPin size={22} className='text-blue-900 ' />
<span className='text-gray-600 text-base md:text-lg'>Serving all of USA
</span>
</div>
<div className='justify-start gap-3 cursor-pointer mt-4 items-center flex '>
  <Clock size={22} className='text-blue-900 ' />
<span className='text-gray-600 text-base md:text-lg'>Mon-Fri: 9AM–6PM IST
</span>
</div>
</div>
</div>
{/* <div className='w-full my-4 h-full md:h-[150px]  border border-orange-200 bg-orange-50 rounded-lg shadow-md'>
<div className='flex flex-col justify-center items-center p-6 '>
<h1 className='text-md md:text-xl text-center text-blue-900  font-semibold'> "Act Now – Your Peers Won't"

</h1>
<p className='text-sm md:text-base text-center text-gray-600 mt-3'>
  Each day lacking a digital marketing plan is a day your competition is 
  securing roofing contracts that belong to you. Begin your expansion now.



</p>


</div>
</div> */}

            </div>
          </div>
        </div>
    </section>
)
}

export default Ready