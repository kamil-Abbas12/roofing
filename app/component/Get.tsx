import { Globe, MessageCircleCheck, PenSquare, Search } from 'lucide-react';
import React from 'react'
import { GrMapLocation } from 'react-icons/gr';
import { PiArrowElbowLeftUp } from 'react-icons/pi';

const Get = () => {
  return (
<section id='Services' className='bg-white py-6 md:py-10 lg:py-16 xl:py-20 md:px-10 lg:px-20 xl:px-40 w-full h-full'>
  <div className="container mx-auto  px-4 sm:px-6 lg:px-8 text-center">

    <span className="block text-xl md:text-2xl lg:text-5xl xl:text-6xl text-gray-800 font-bold">
      With Cibirix, Roofing Contractors Get
    </span>

    <span className="block text-xl md:text-2xl lg:text-5xl xl:text-6xl text-orange-600 font-bold mb-3">
      Noticed, Chosen, and Trusted
    </span>

    <p className='text-lg md:text-xl xl:text-2xl text-gray-800 mt-4 max-w-5xl mx-auto'>
      Our powerful digital marketing strategies help roofing businesses become the preferred choice for repairs, replacements, and storm damage services across the USA.
    </p>

    {/* GRID */}
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 my-12 items-stretch'>
      {/* CARD */}
      {[
        {
          icon: <Search className="text-orange-600 h-8 w-8" />,
          title: "SEO Strategies for Roofers",
          text: "Dominate local searches when homeowners look for “roof repair near me,” “storm damage roofing,” and “emergency roof leak help” in your area."
        },
        {
          icon: <PiArrowElbowLeftUp className="text-orange-600 h-8 w-8" />,
          title: "Digital Ads for Roofing Leads",
          text: "Reach homeowners searching for roof repairs, replacements, and storm damage solutions with precise, high-converting ad campaigns."
        },
        {
          icon: <GrMapLocation className="text-orange-600 h-8 w-8" />,
          title: "Premium Roofing Leads: Google Guaranteed",
          text: "Secure the prestigious Google Guaranteed checkmark and dominate the top of local roofing results, paying only for the phone calls and messages you receive."
        },
        {
          icon: <Globe className="text-orange-600 h-8 w-8" />,
          title: "Local SEO & Map Rankings for Roofers",
          text: "Maximize your visibility in Google Maps whenever residents look for expert roofing services nearby."
        },
        {
          icon: <PenSquare className="text-orange-600 h-8 w-8" />,
          title: "Elite Roofer Web Design",
          text: "High-speed digital platforms that transform organic traffic into exclusive roofing leads."
        },
        {
          icon: <MessageCircleCheck className="text-orange-600 h-8 w-8" />,
          title: "Roofer Content & Socials",
          text: "Project transformation showcases, weather recovery guides, and timely updates that establish authority."
        }
      ].map((card, i) => (
<div
   key={i}
 className='bg-white border-2 border-gray-300 hover:border-amber-300 rounded-xl flex w-full h-full
            min-h-[220px] md:min-h-[240px] lg:min-h-[260px] xl:min-h-[280px]' >          
          {/* FULL HEIGHT FLEX CARD */}
          <div className='flex flex-col p-6  lg:p-10 w-full'>

            <div className="flex items-center justify-center h-14 w-14 bg-orange-200 rounded-md shadow-lg hover:bg-orange-400 transition-colors">
              {card.icon}
            </div>

            {/* FIXED TITLE HEIGHT */}
            <h2 className='text-md md:text-lg lg:text-xl text-gray-900 font-semibold mt-6 min-h-[80px]  text-start'>
              {card.title}
            </h2>

            {/* TEXT AUTO FILLS SPACE */}
            <p className='text-sm  text-gray-600 lg:text-md text-start flex-grow'>
              {card.text}
            </p>

          </div>

        </div>
      ))}

    </div>

    {/* CTA */}
    <div className="flex justify-center mt-12 px-4">
      <div className="w-full max-w-5xl bg-orange-100 rounded-2xl p-8">
        <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-gray-800">
          Ready to Scale Your Roofing Business?
        </h1>
        <p className="text-sm md:text-lg text-gray-600 mt-4 lg:text-xl">
          Our expert methods have enabled hundreds of
           roofing businesses across USA to secure high-value storm leads, insurance payouts, and consistent year-round installs.
        </p>
      </div>
    </div>

  </div>
</section>
  )
}

export default Get