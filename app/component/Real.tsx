import { ChartAreaIcon, TrendingDown } from 'lucide-react';
import React from 'react'
import { BsPeople } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';

const Real = () => {
  return (
<section className='bg-gray-900 py-6 md:py-10 lg:py-16 xl:py-20'>
  <div className="container mx-auto px-4 sm:px-6 lg:px-10 text-center">

    <h1 className="text-xl sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl text-white font-bold mb-3 leading-tight">
      The Pressure Is Mounting
    </h1>

    <p className='text-lg md:text-xl xl:text-2xl text-white mt-4'>
      Obstacles Roofing Contractors Face Without Powerful Digital Marketing
    </p>

    {/* GRID */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 my-8 lg:my-14 xl:my-20'>

      {/* CARD */}
      <div className='bg-gray-800 border border-gray-50 rounded-md w-full max-w-sm mx-auto'>
        <div className='flex flex-col justify-center items-center py-8 px-4'>
          <div className="flex items-center justify-center h-20 w-20 bg-orange-600 rounded-full shadow-lg cursor-pointer hover:bg-orange-700 transition-colors">
            <FaEye className="text-white h-8 w-8" />
          </div>
          <h2 className='text-lg md:text-xl lg:text-2xl text-white mt-6'>Weak Digital Presence</h2>
          <p className='text-sm md:text-lg text-gray-300 mt-6'>
            Without a powerful online footprint, roofing contractors struggle to capture quality leads and stand out in the competitive digital marketplace.
          </p>
        </div>
      </div>

      {/* CARD */}
      <div className='bg-gray-800 border border-gray-50 rounded-md w-full max-w-sm mx-auto'>
        <div className='flex flex-col justify-center items-center py-8 px-4'>
          <div className="flex items-center justify-center h-20 w-20 bg-orange-600 rounded-full shadow-lg cursor-pointer hover:bg-orange-700 transition-colors">
            <TrendingDown className="text-white h-8 w-8" />
          </div>
          <h2 className='text-lg md:text-xl lg:text-2xl text-white mt-6'>Unpredictable Income Cycles</h2>
          <p className='text-sm md:text-lg text-gray-300 mt-6'>
            Depending solely on referrals leads to boom-or-bust seasons instead of steady, year-round roofing contracts.
          </p>
        </div>
      </div>

      {/* CARD */}
      <div className='bg-gray-800 border border-gray-50 rounded-md w-full max-w-sm mx-auto'>
        <div className='flex flex-col justify-center items-center py-8 px-4'>
          <div className="flex items-center justify-center h-20 w-20 bg-orange-600 rounded-full shadow-lg cursor-pointer hover:bg-orange-700 transition-colors">
            <BsPeople className="text-white h-8 w-8" />
          </div>
          <h2 className='text-lg md:text-xl lg:text-2xl text-white mt-6'>Lost Insurance Claim Leads</h2>
          <p className='text-sm md:text-lg text-gray-300 mt-6'>
            Without strong online exposure, you miss homeowners actively searching for roofing contractors for insurance repairs.
          </p>
        </div>
      </div>

      {/* CARD */}
      <div className='bg-gray-800 border border-gray-50 rounded-md w-full max-w-sm mx-auto'>
        <div className='flex flex-col justify-center items-center py-8 px-4'>
          <div className="flex items-center justify-center h-20 w-20 bg-orange-600 rounded-full shadow-lg cursor-pointer hover:bg-orange-700 transition-colors">
            <ChartAreaIcon className="text-white h-8 w-8" />
          </div>
          <h2 className='text-lg md:text-xl lg:text-2xl text-white mt-6'>No Clear Performance Insights</h2>
          <p className='text-sm md:text-lg text-gray-300 mt-6'>
            Without proper tracking systems, roofing contractors struggle to measure campaign results and compete effectively in the digital marketplace.
          </p>
        </div>
      </div>

    </div>

    <h2 className='text-lg md:text-xl lg:text-2xl text-white mt-6'>
      Sound familiar? You're not alone, and there's a smarter solution.
    </h2>

    <div className="flex justify-center mt-6">
      <div className="w-32 h-2 bg-orange-500"></div>
    </div>

  </div>
</section>
)
}

export default Real