import { ChartAreaIcon, TrendingDown } from 'lucide-react';
import React from 'react'
import { BsPeople } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';

const From = () => {
  return (
<section className='bg-gray-50  w-full h-full py-6 md:py-10 lg:py-16 xl:py-20'>
 <div className='flex flex-col text-center '>
    <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-gray-900 font-bold mb-3 leading-tight">
        Real Results from Real Roofing Contractors
        </h1>
        <h3 className="text-md md:text-xl lg:text-xl text-gray-600 mt-4 text-center max-w-3xl mx-auto">
          Don't just take our word for it. See the measurable impact our digital marketing strategies have on roofing businesses like yours.

</h3>
<div className='flex flex-col lg:flex-row mx-5 lg:mx-30 xl:mx-40 justify-between items-center gap-5'>

<div className='bg-white border-2 border-gray-300 hover:border-amber-300 rounded-xl flex flex-col 
 p-6 w-full w-full h-full  lg:w-140 lg:h-110  mt-5 lg:mt-10'>   
    <h2 className='text-md md:text-lg lg:text-xl font-semibold text-gray-900 mt-2 text-start'>In a recent engagement, a roofing contractor in USA saw:
</h2>
   <div className='grid grid-cols-1 md:grid-cols-2 '>
<div className='flex items-center justify-center p-4'>
    <div className='bg-orange-200 h-16 w-16 flex items-center justify-center rounded-full'>
<ChartAreaIcon className="h-5 w-5 rounded-full text-orange-500" />
    </div>
    <p className='text-sm md:text-lg text-gray-600 ml-2'>300% Increase in Roofing Leads</p>

</div>
<div className='flex items-center justify-center p-4'>
  <TrendingDown className="h-12 w-12 text-green-500" />
  <p className='text-sm md:text-lg text-gray-600 ml-2'>45% Reduction in Customer Acquisition Cost</p>
</div>
   </div>
</div>
</div>
 </div>
</section>
)
}

export default From