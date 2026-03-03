"use client";
import { PhoneCall } from "lucide-react";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-blue-100 py-35 sm:py-40 md:py-28 lg:pt-60  pb-20 xl:pt-55 pb-20">
      <div className="container flex flex-col justify-center mx-auto px-4 lg:px-10 mx-0 xl:mx-20 sm:px-6 text-center">

        {/* Heading Lines */}
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl  text-blue-900 font-bold mb-3
         leading-tight mx-0 xl:mx-20">
Every Shingle Holds A Promise Build  A Legacy   Homeowners Rely    </h1>

        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl  font-bold mb-3 leading-tight">
          <span className="text-blue-900">   </span>
          <span className="ml-2 text-blue-900 block sm:inline">
              On When They Seek  Total
          </span>
        </h1>

        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl text-blue-900 font-bold mb-3 leading-tight">
           Protection From A Quality Roofer.
          
        

        </h1>

        

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl  text-gray-700 mb-10 leading-relaxed max-w-5xl mx-auto px-2">
          Scale your storm restoration sales, insurance payouts, and seasonal roofing contracts with Cibirix America’s premier digital growth partner for professional roofers seeking market dominance. 

 
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          <a
            href="#services"
            className="bg-[rgb(33,49,80)] font-semibold text-white flex items-center
             gap-2 px-6 py-3 rounded-xl hover:bg-[#213150]  transition transform
              hover:scale-105 w-full sm:w-auto justify-center"
          >
            <PhoneCall size={18} />
            <span className="text-base sm:text-lg lg:text-xl">
Consult an Elite Roofing Marketing Specialist Now
            </span>
          </a>

          <a
            href="#services"
            className="border-2 border-[#213150] font-semibold bg-white text-[#213150]
             flex items-center gap-2 px-6 py-3 rounded-xl  hover:text-white hover:bg-[#213150]
              transition w-full sm:w-auto justify-center"
          >
            <FaEnvelope size={18} />
            <span className="text-base text-[#213150] hover:text-white sm:text-lg lg:text-xl">
              Get a Free Quote
            </span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;