"use client";
import { ChartAreaIcon, TrendingDown } from "lucide-react";
import { BsPeople } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import React from "react";

const Real = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-700 py-10 md:py-16 xl:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 text-center">

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white font-bold mb-4 leading-tight animate-fadeInUp">
          Precision Meets Performance
        </h1>

        <p className="text-lg md:text-xl xl:text-2xl text-gray-300 mt-4 animate-fadeInUp delay-100">
          Your reputation is built on sharpness; our leads are built on perfection.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 my-8 lg:my-14 xl:my-20">

          {/* CARD 1 */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl max-w-sm mx-auto hover:shadow-2xl transition transform hover:scale-105 animate-fadeInUp delay-200">
            <div className="flex flex-col items-center py-8 px-6">
              <div className="flex items-center justify-center h-16 w-16 bg-blue-500 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-colors">
                <FaEye className="text-white h-8 w-8" />
              </div>
              <h2 className="text-lg xl:text-xl text-white mt-6 font-semibold text-center">
                The High Cost of Being a Secret
              </h2>
              <div className="w-full mt-4">
                <p className="text-sm md:text-lg text-gray-300 text-left">
                  A weak digital footprint is an open invitation for competitors to steal your market share. Without a dominant online presence, you’re missing out on high-ticket storm restoration and premium contracts every single day.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl max-w-sm mx-auto hover:shadow-2xl transition transform hover:scale-105 animate-fadeInUp delay-300">
            <div className="flex flex-col items-center py-8 px-6">
              <div className="flex items-center justify-center h-16 w-16 bg-blue-500 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-colors">
                <TrendingDown className="text-white h-8 w-8" />
              </div>
              <h2 className="text-lg xl:text-xl text-white mt-6 font-semibold text-center">
                Eliminating the Off-Season Slump
              </h2>
              <div className="w-full mt-4">
                <p className="text-sm md:text-lg text-gray-300 text-left">
                  Elite roofing companies don't wait for the phone to ring-they make it ring. If your growth stops the moment the sun comes out or referrals slow down, you aren't running a market leader; you’re running a seasonal hobby.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl max-w-sm mx-auto hover:shadow-2xl transition transform hover:scale-105 animate-fadeInUp delay-400">
            <div className="flex flex-col items-center py-8 px-6">
              <div className="flex items-center justify-center h-16 w-16 bg-blue-500 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-colors">
                <BsPeople className="text-white h-8 w-8" />
              </div>
              <h2 className="text-lg xl:text-xl text-white mt-6 font-semibold text-center">
                The Invisible Storm Chaser
              </h2>
              <div className="w-full mt-4">
                <p className="text-sm md:text-lg text-gray-300 text-left xl:mt-6">
                  Insurance claims move fast. If you aren't the first face a homeowner sees after a hail storm, you’ve already lost the contract. Relying on luck means missing out on the most profitable repair cycles of the year.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl max-w-sm mx-auto hover:shadow-2xl transition transform hover:scale-105 animate-fadeInUp delay-500">
            <div className="flex flex-col items-center py-8 px-6">
              <div className="flex items-center justify-center h-16 w-16 bg-blue-500 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-colors">
                <ChartAreaIcon className="text-white h-8 w-8" />
              </div>
              <h2 className="text-lg xl:text-xl text-white mt-6 font-semibold text-center">
                The High Cost of Operating in the Dark
              </h2>
              <div className="w-full mt-4">
                <p className="text-sm md:text-lg text-gray-300 text-left ">
                  You’re out in the field, not behind a spreadsheet-but that doesn’t mean you should be blind to your ROI. If you can’t see exactly where your best contracts are coming from, you’re just handing your market share to a competitor who has a better map.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Line */}
        <h2 className="text-lg md:text-xl xl:text-2xl text-white mt-6 animate-fadeInUp delay-600">
          Ring a bell? You're in good company, and there's a smarter solution.
        </h2>
        <div className="flex justify-center mt-6 animate-fadeInUp delay-700">
          <div className="w-32 h-2 bg-blue-500 rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default Real;