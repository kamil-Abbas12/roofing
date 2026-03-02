import { Clock, MapPin, PhoneCall } from 'lucide-react';
import React from 'react'
import { FaEnvelope } from 'react-icons/fa';
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
  { value: "", label: "Select a  Roofing Service" },
  { value: "SEO", label: "SEO Services" },
  { value: "google", label: "Google Ads" },
  { value: "web", label: "Web Design" },
  { value: "local", label: "Local SEO" },
  { value: "social", label: "Social Media Marketing" },
  { value: "content", label: "Full  Marketing Package" },
];

const budget=[
  { value: "", label: "$5K-$10K" },
  { value: "1000", label: "$5K-$10K" },
  { value: "3000", label: "$10K - $20K" },  
  { value: "5000", label: "$20K - $30K" },
  { value: "10000", label: "Above $30K" },
]

const Ready = () => {
  return (
<section id='Contact' className='bg-white py-6 md:py-10 lg:py-16 xl:py-20 md:px-10 xl:px-40 w-full h-full'>
      <div className="text-center max-w-6xl mx-auto">
          <span className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
Ready to Grow Your 
<span className='text-xl md:text-3xl mx-2 lg:text-5xl font-bold text-orange-600 leading-tight'>

Roofing Business
</span>
<span>
 in USA?

</span>
          </span>

          <p className="mt-6 text-gray-600 text-md md:text-xl lg:max-w-4xl text-center mx-auto">
           Take the first step toward becoming the #1 roofing contractor in your area. Get your free roofing marketing consultation and custom lead generation strategy today.


          </p>
        </div>
        <div className='w-full justify-between items-center gap-5 flex flex-col lg:flex-row mt-10 lg:mt-20'>
          <div className='left w-[90%] lg:w-1/2 border border-gray-200 shadow-lg rounded-xl mx-2 md:mx-0 h-full lg:h-[720px] p-6'>
          <span className=" text-lg lg:text-xl font-bold text-gray-900 mb-4">Fill out this simple contact form or call us at
             +1 (336) 515-7898</span>
           <span className=" text-lg md:text-xl ml-2 font-bold text-orange-600 mb-4">
             +1 (336) 515-7898</span>   
<form className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 lg:my-10 space-y-2 lg:space-y-5">

  <div className="flex flex-col">
  <label htmlFor="name" className="text-sm font-bold text-gray-700 mb-2">
    Full Name <span className="text-gray-900">*</span>
  </label>

  <input
    id="name"
    type="text"
    name="name"
    placeholder="Enter your full name"
    className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
    required
  />
</div>
 <div className="flex flex-col">
  <label htmlFor="email" className="text-sm font-bold text-gray-700 mb-2">
    Email Address <span className="text-gray-900">*</span>
  </label>

  <input
    id="email"
    type="text"
    name="email"
    placeholder="Enter your email address"
    className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
    required
  />
</div>
 <div className="flex flex-col ">
  <label htmlFor="name" className="text-sm font-bold text-gray-700 mb-2">
    Phone Number <span className="text-gray-900">*</span>
  </label>

  <input
    id="phone"
    type="text"
    name="Phone Number"

    placeholder="+1 (555) 123-4567"
    className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none"
    required
  />

  
</div>
 <div className="flex flex-col ">
  <label htmlFor="services" className="text-sm font-bold text-gray-700 mb-2">
    Services <span className="text-gray-900">*</span>
  </label>
<select className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none">
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
    Business Type <span className="text-gray-900">*</span>
  </label>
<select className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none">
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
    Marketing Budget <span className="text-gray-900">*</span>
  </label>
<select className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-orange-500 outline-none">
    <option value="">Select Your Monthly Marketing Budget</option>
    {budget.map((market) => (
      <option key={market.value} value={market.value}>
        {market.label}
      </option>
    ))}
  </select>
  
</div>
<textarea
          rows={3}
          name="message"
          placeholder="Type Here..."
          className="w-full rounded-lg border border-gray-300 p-3 md:col-span-2"
        ></textarea>

        {/* Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full cursor-pointer   bg-orange-500 text-white py-3 rounded-md
             hover:bg-orange-600  transition"
          >
            Make An Inquiry
          </button>
          <div className="text-center text-md md:text-lg text-gray-600 mt-5">No spam. Just real strategies that work.</div>
        </div>
</form>
          </div>
          <div className="right w-full lg:w-1/2  h-full lg:h-[720px] p-6">
            <div className="flex flex-col items-center w-full  h-full space-y-4">
       <a
  href="#services"
  className="w-full bg-orange-600 text-white flex items-center justify-center gap-2 xl:gap-3
  py-2 px-6  rounded-lg font-semibold text-sm sm:text-base lg:text-lg
  hover:bg-orange-700 transition"
>
  <PhoneCall size={20} className="lg:shrink-0" />

  <span className=" min-w-0 lg:whitespace-nowrap  text-center">
    Talk to a Roofing Marketing Expert Today
  </span>
</a>
    <a
  href="#services"
  className="w-full text-orange-600 bg-white flex items-center border border-orange-600 justify-center gap-2 xl:gap-3
  py-2 px-6  rounded-lg font-semibold text-sm sm:text-base lg:text-lg
  hover:bg-orange-600 hover:text-white transition"
>
            <FaEnvelope size={20} className='lg:shrink-0' />

  <span className=" min-w-0 lg:whitespace-nowrap  text-center">
    Talk to a Roofing Marketing Expert Today
  </span>
</a>
<div className='w-full my-4 h-[250px] border border-gray-300 rounded-md shadow-md'>
<div className='flex flex-col justify-start p-6 '>
<h1 className='text-lg md:text-xl font-semibold'>Get In Touch
</h1>
<div className='justify-start gap-3 mt-4 cursor-pointer items-center flex '>
  <PhoneCall size={22} className='text-orange-600 ' />
<span className='text-gray-600 text-base md:text-lg'>+1 (336) 515-7898</span>
</div>
<div className='justify-start gap-3 cursor-pointer mt-4 items-center flex '>
  <FaEnvelope size={22} className='text-orange-600 ' />
<span className='text-gray-600 text-base md:text-lg'>sales@cibirix.com</span>
</div>
<div className='justify-start gap-3 cursor-pointer mt-4 items-center flex '>
  <MapPin size={22} className='text-orange-600 ' />
<span className='text-gray-600 text-base md:text-lg'>Serving all of USA
</span>
</div>
<div className='justify-start gap-3 cursor-pointer mt-4 items-center flex '>
  <Clock size={22} className='text-orange-600 ' />
<span className='text-gray-600 text-base md:text-lg'>Mon-Fri: 9AM–6PM IST
</span>
</div>
</div>
</div>
<div className='w-full my-4 h-full md:h-[150px]  border border-orange-200 bg-orange-50 rounded-lg shadow-md'>
<div className='flex flex-col justify-center items-center p-6 '>
<h1 className='text-md md:text-xl text-center  font-semibold'>Don't Wait - Your Competitors Aren't

</h1>
<p className='text-sm md:text-base text-center text-gray-600 mt-3'>Every day without a digital marketing strategy is a day your competitors are capturing project leads that should be yours. Start your growth today.


</p>


</div>
</div>

            </div>
          </div>
        </div>
    </section>
)
}

export default Ready