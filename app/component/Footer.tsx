"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const data = [
  {
    title:
      "Professional Roofing Contractor Marketing Throughout North Carolina",
    content:
      "Cibirix Digital Marketing specializes in helping roofing contractors across North Carolina generate more roof replacement, roof repair, storm damage, insurance claim, and commercial roofing leads through strategic digital marketing. Our proven systems work for residential and commercial roofers in major NC markets including the Triangle (Raleigh–Durham–Chapel Hill), Charlotte Metro, Triad (Greensboro–Winston-Salem–High Point), Western NC (Asheville region), and Eastern NC (Wilmington & coastal areas).",
    tags: [
      "Roofing SEO NC",
      "Charlotte Roofer Marketing",
      "Raleigh Roofing Leads",
      "Triangle Roofing Advertising",
      "NC Roofing Marketing",
      "Roofing Google Ads",
      "Local Roofer SEO",
      "Roofing Web Design NC",
    ],
  },
  {
    title:
      "Professional Roofing Contractor Marketing Throughout South Carolina",
    content:
      "We provide strategic digital marketing solutions for roofers in South Carolina, focusing on lead generation, PPC, and local SEO to boost your roofing business online.",
    tags: [
      "South Carolina Roofer SEO",
      "Charleston Roofing Leads",
      "Columbia Roof Marketing",
      "SC Google Ads",
      "Roof Repair Leads SC",
      "Local SEO Roofing SC",
      "SC Roofing PPC",
      "Commercial Roofing Marketing",
    ],
  },
  {
    title:
      "Professional Roofing Contractor Marketing Throughout Virginia",
    content:
      "Cibirix helps Virginia-based roofers attract high-quality leads with tailored marketing strategies, including SEO, paid ads, and social media campaigns.",
    tags: [
      "Virginia Roofing SEO",
      "Richmond Roofer Marketing",
      "Norfolk Roofing Leads",
      "VA Roofing PPC",
      "Local VA SEO",
      "VA Roof Repair Leads",
      "Virginia Google Ads",
      "VA Commercial Roofing",
    ],
  },
  {
    title:
      "Professional Roofing Contractor Marketing Throughout Georgia",
    content:
      "Our Georgia roofing marketing services focus on increasing visibility, generating leads, and improving conversion rates through multi-channel digital marketing.",
    tags: [
      "Georgia Roofing SEO",
      "Atlanta Roofing Leads",
      "Savannah Roofer Marketing",
      "GA Roofing Ads",
      "Local SEO GA",
      "Roof Repair Marketing GA",
      "GA Google Ads",
      "Commercial Roofing GA",
    ],
  },
  {
    title:
      "Professional Roofing Contractor Marketing Throughout Florida",
    content:
      "We assist Florida roofers in reaching homeowners and businesses with customized digital marketing campaigns, including SEO, social media, and Google Ads.",
    tags: [
      "Florida Roofing SEO",
      "Miami Roofing Leads",
      "Orlando Roof Marketing",
      "FL Roofing PPC",
      "Local SEO FL",
      "Roof Repair Leads FL",
      "Google Ads FL",
      "Commercial Roofing FL",
    ],
  },
  {
    title:
      "Professional Roofing Contractor Marketing Throughout Tennessee",
    content:
      "Cibirix provides lead generation and online marketing solutions for Tennessee roofers to maximize ROI and grow their business.",
    tags: [
      "Tennessee Roofing SEO",
      "Nashville Roofer Marketing",
      "Memphis Roofing Leads",
      "TN Roofing PPC",
      "Local SEO TN",
      "Roof Repair Marketing TN",
      "TN Google Ads",
      "Commercial Roofing TN",
    ],
  },
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#071A36] py-16 px-4">
      <div className="max-w-7xl mx-auto  ">

      <div className="w-full p-6 mx-auto rounded-md bg-[#151f33] ">

        {data.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="border-b border-blue-900/50">
              {/* Header */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center text-left py-6"
              >
                <h3 className="text-white font-semibold text-lg md:text-xl">
                  {item.title}
                </h3>

                {isOpen ? (
                  <Minus className="text-gray-300" />
                ) : (
                  <Plus className="text-gray-300" />
                )}
              </button>

              {/* Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-[600px] pb-6" : "max-h-0"
                }`}
              >
                {item.content && (
                  <>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {item.content}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 border bg-[#102B4D] text-gray-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

        {/* Footer */}
        <div className="mt-16 w-full border-t border-blue-900/40 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2024 Cibirix Digital Marketing. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a className="hover:text-white">Terms of Service</a>
            <a className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
              </div>

    </section>
  );
}