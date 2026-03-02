import { Focus,  Group, Handshake } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BsPeople } from "react-icons/bs";
import { MdCyclone } from "react-icons/md";

const One = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Your All-in-One Digital Marketing Agency for{" "}
            <span className="text-orange-600">Roofing Contractors</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg md:text-xl">
            More than just a service provider, we're your growth partner committed
            to building lasting success for your roofing business through storm
            seasons and beyond.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="flex flex-col lg:flex-row gap-10 mt-12 items-center">

          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[420px] md:h-[500px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/full.jpg"
                alt="Roofing marketing"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-1/2">

            {/* CARD */}
            <div className="rounded-xl border border-gray-200 shadow-md p-6 min-h-[230px] flex flex-col hover:scale-105 cursor-pointer">
              
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-orange-100">
                <Handshake size={22} className="text-orange-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-5">
                A Partner
              </h3>

              <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
                We're collaborative, not just an agency. Your success is our
                success.
              </p>

            </div>

            {/* Duplicate cards easily */}
            <div className="rounded-xl border border-gray-200 shadow-md p-6 min-h-[230px] flex flex-col hover:scale-105 cursor-pointer">
              
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-orange-100">
                <MdCyclone size={22} className="text-orange-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-5">
Genuine Results
              </h3>

              <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
                No hype, just measurable performance that impacts your bottom line.


              </p>

            </div>
 <div className="rounded-xl border border-gray-200 shadow-md p-6 min-h-[230px] flex flex-col hover:scale-105 cursor-pointer">
              
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-orange-100">
                <BsPeople size={22} className="text-orange-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-5">
Experienced Experts

              </h3>

              <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
Proven roofing marketing track record with contractors specializing in storm damage and insurance claims.



              </p>

            </div>
             <div className="rounded-xl border border-gray-200 shadow-md p-6 min-h-[230px] flex flex-col hover:scale-105 cursor-pointer">
              
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-orange-100">
                <Focus size={22} className="text-orange-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-5">
            Undivided Focus
              </h3>

              <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
Dedicated project manager who understands your business inside and out.
              </p>

            </div>
          </div>
         
        </div>
         <div className="flex flex-col md:flex-row mt-10 lg:mt-15 xl:mt-20 gap-5">
            <div className=" h-[150px] w-full md:w-90 xl:w-100  border-amber-400 border-2 rounded-xl p-6 flex flex-col justify-center">
<h3 className="text-xl md:text-2xl font-bold text-orange-600 text-center">500+</h3>
<h4 className="text-md text-center md:text-lg font-bold text-gray-900">Contractors Served
</h4>
<p className="text-sm lg:text-md gray-700 text-center mt-2">Across multiple states and industries

</p>
            </div>
              <div className=" h-[150px] w-full  md:w-90 xl:w-100  border-amber-400 border-2 rounded-xl p-6 flex flex-col justify-center">
<h3 className="text-xl md:text-2xl font-bold text-orange-600 text-center">95%</h3>
<h4 className="text-md text-center md:text-lg font-bold text-gray-900">Client Satisfaction


</h4>
<p className="text-sm lg:text-md gray-700 text-center mt-2">Based on client feedback surveys



</p>
            </div>
              <div className=" h-[150px] w-full md:w-90 xl:w-100  border-amber-400 border-2 rounded-xl p-6 flex flex-col justify-center">
<h3 className="text-xl md:text-2xl font-bold text-orange-600 text-center">24/7
</h3>
<h4 className="text-md text-center md:text-lg font-bold text-gray-900">Support Available
</h4>
<p className="text-sm lg:text-md gray-700 text-center mt-2">Always ready to assist your roofing business needs

</p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default One;