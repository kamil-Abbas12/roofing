"use client";
import { PhoneCall } from "lucide-react";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-blue-100 py-20 sm:py-24 md:py-28 lg:pt-60 pb-20 xl:pt-55 pb-20">
      <div className="container flex flex-col mx-auto px-4 lg:px-10 sm:px-6 text-center">

        {/* Heading Lines */}
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-7xl text-gray-900 font-bold mb-3 leading-tight">
Every Shingle Holds A Promise Build         </h1>

        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-7xl font-bold mb-3 leading-tight">
          <span className="text-gray-900"> A Legacy  </span>
          <span className="ml-2 text-orange-600 block sm:inline">
             Homeowners Rely 
          </span>
        </h1>

        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-7xl text-gray-900 font-bold mb-3 leading-tight">
          <span className="text-orange-600 block sm:inline">On When </span>
          <span className="ml-0 sm:ml-4 text-gray-900 block sm:inline">
           They Seek Total Protection From A Quality Roofer.
          </span>
        

        </h1>

        

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 mb-10 leading-relaxed max-w-5xl mx-auto px-2">
          Scale your storm restoration sales, insurance payouts, and seasonal roofing contracts with Cibirix—America’s premier digital growth partner for professional roofers seeking market dominance. 

 
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          <a
            href="#services"
            className="bg-orange-600 font-semibold text-white flex items-center gap-2 px-6 py-3 rounded-xl hover:bg-orange-700 transition transform hover:scale-105 w-full sm:w-auto justify-center"
          >
            <PhoneCall size={18} />
            <span className="text-base sm:text-lg lg:text-xl">
              Talk to a Roofing Marketing Expert Today
            </span>
          </a>

          <a
            href="#services"
            className="border-2 border-orange-600 font-semibold bg-white text-orange-600 flex items-center gap-2 px-6 py-3 rounded-xl hover:bg-orange-600 hover:text-white transition w-full sm:w-auto justify-center"
          >
            <FaEnvelope size={18} />
            <span className="text-base sm:text-lg lg:text-xl">
              Get a Free Quote
            </span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;