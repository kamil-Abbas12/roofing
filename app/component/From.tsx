import React from "react";
import { TrendingUp, FileText, Calendar, MapPin } from "lucide-react";
import { LucideIcon } from "lucide-react";
import One from "./One";

const From = () => {
  return (
    <>
    <section id="Results" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Real Results from Real Roofing Contractors
          </h1>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
            Don't just take our word for it. See the measurable impact our
            digital marketing strategies have on roofing businesses like yours.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT COLUMN */}
          <div className="flex flex-col h-full">

            {/* WHITE CARD */}
            <div className="bg-white rounded-2xl shadow-md p-10 flex-1">

              <h2 className="text-xl font-semibold text-gray-900 mb-10 ">
                In a recent engagement, a roofing contractor in USA saw:
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:mt-20 lg:space-y-10">

                <Stat icon={<TrendingUp />} value="320%" title="Storm Damage Leads" desc="More homeowners calling after weather events" />

                <Stat icon={<FileText />} value="180%" title="Insurance Claim Jobs" desc="Qualified insurance-backed roofing projects" />

                <Stat icon={<Calendar />} value="4,200+" title="Roofing Leads Generated" desc="In just 8 months of partnership" />

                <Stat icon={<MapPin />} value="5" title="New Service Areas" desc="Expanded coverage across USA" />

              </div>
            </div>

            {/* ORANGE BOX BELOW */}
            <div className="bg-orange-600 text-white rounded-xl p-6 mt-6">
              <h4 className="text-lg font-semibold mb-2">
                The Bottom Line
              </h4>
              <p className="text-sm leading-relaxed">
                This roofing contractor went from relying on referrals and
                struggling during slow seasons to becoming the go-to roofing
                company for storm damage and insurance claims, expanding to
                multiple states across USA.
              </p>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative rounded-2xl overflow-hidden shadow-md h-full min-h-[620px]">
            <img
              src="/roof.jpg"
              alt="Roof"
              className="w-full h-full object-cover"
            />

            {/* Testimonial */}
            <div className="absolute bottom-8 left-8 bg-white rounded-xl p-5 shadow-lg max-w-sm">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex-shrink-0 items-center text-center pt-4 justify-center 
                font-bold text-orange-600">
                  MR
                </div>

                <p className="text-sm text-gray-600 italic">
                  "Cibirix transformed our roofing business. We went from
                  chasing storms to having homeowners call us first."
                </p>
              </div>

              <p className="font-semibold text-gray-900">
                Mike R., Roofing Contractor
              </p>
              <p className="text-sm text-gray-500">
                Raleigh, NC
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    <One/>
    </>

  );
};

const Stat = ({ icon, value, title, desc }: { icon: React.ReactElement<LucideIcon>; value: string; title: string; desc: string }) => (
  <div className="text-center">
    <div className="w-14 h-14 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-500">
{React.cloneElement(icon, {  })}
    </div>
    <h3 className="text-3xl font-bold text-orange-600">{value}</h3>
    <p className="font-semibold text-gray-800 mt-1">{title}</p>
    <p className="text-sm text-gray-500 mt-2">{desc}</p>
  </div>
);
export default From;