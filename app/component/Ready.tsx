"use client";

import { Clock, MapPin, PhoneCall } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";
import CampaignCallCapture from "./CampaignCallCapture";

const Ready = () => {
  return (
    <section
      id="Contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden py-12 md:py-16 lg:py-20 xl:py-24 px-6 md:px-10 lg:px-20 xl:px-40 bg-gradient-to-br from-[#F7FAFF] via-[#EFF7FF] to-[#EAFBFF]"
    >
      {/* Background blobs */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-cyan-300/25 blur-3xl animate-blob" />
        <div className="absolute top-10 -right-28 h-[520px] w-[520px] rounded-full bg-blue-400/20 blur-3xl animate-blob [animation-delay:600ms]" />
        <div className="absolute -bottom-40 left-1/3 h-[520px] w-[520px] rounded-full bg-sky-300/25 blur-3xl animate-blob [animation-delay:1200ms]" />
      </div>

      {/* Heading */}
      <div className="text-center max-w-6xl mx-auto animate-fadeIn">
        <h2 id="contact-heading" className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight">
          Why Roof Integrity is the{" "}
          <span className="text-blue-800">Ultimate Asset Protection</span> in 2026?
        </h2>
        <p className="mt-6 text-gray-700 md:text-lg lg:text-xl max-w-3xl mx-auto">
          In 2026, you don't just "fix" a roof. You fortify your future. Total roof integrity
          ensures that your most valuable asset remains safe, efficient, and fully insurable for
          decades to come.
        </p>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-8 mt-10 lg:mt-20">

        {/* CAMPAIGN FLOW CARD — replaces the old static inquiry form */}
        <div className="w-full lg:w-1/2 animate-slideUp">
          <div className="mb-6 bg-white shadow-xl rounded-2xl p-6 md:p-8">
            <span className="text-xl md:text-2xl font-bold text-blue-900">Pick your campaign,</span>
            <span className="text-xl md:text-2xl font-bold text-blue-800 ml-2">then call us or get an instant callback number.</span>
          </div>
          <CampaignCallCapture />
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <a
            href="tel:+18669644568"
            className="w-full flex items-center text-lg justify-center gap-2 py-3 px-6 rounded-lg bg-blue-900 text-white border border-blue-900 font-semibold hover:bg-white hover:text-blue-900 transition lg:hover:scale-105"
            aria-label="Call our elite roofing marketing specialist at 1-866-964-4568"
          >
            <PhoneCall size={20} aria-hidden="true" />
            Consult Elite Roofing Marketing Specialist Now
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@topdoglead.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center text-lg justify-center gap-2 py-3 px-6 rounded-lg bg-blue-900 text-white border border-blue-900 font-semibold hover:bg-white hover:text-blue-900 transition lg:hover:scale-105"
            aria-label="Submit your project inquiry via email to info@topdoglead.com"
          >
            <FaEnvelope size={20} aria-hidden="true" />
            Submit Your Expert Project Inquiry Now
          </a>

          {/* Contact Card */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition lg:hover:scale-105">
            <h3 className="font-semibold text-2xl text-blue-900 mb-8">
              Get In Touch
            </h3>

            <address className="not-italic flex flex-col gap-8 text-gray-700">

              {/* Phone */}
              <a
                href="tel:+18669644568"
                className="flex items-center gap-5 min-h-[40px]"
              >
                <PhoneCall size={24} className="text-blue-900 shrink-0" />
                <span className="text-[18px]">+1 866 964 4568</span>
              </a>

              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@topdoglead.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 min-h-[40px]"
              >
                <FaEnvelope size={24} className="text-blue-900 shrink-0" />
                <span className="text-[18px]">info@topdoglead.com</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-5 min-h-[40px]">
                <MapPin size={24} className="text-blue-900 shrink-0" />
                <span className="text-[18px]">Serving all of USA</span>
              </div>

              {/* Time */}
              <div className="flex items-center gap-5 min-h-[40px]">
                <Clock size={24} className="text-blue-900 shrink-0" />
                <span className="text-[18px]">Mon–Fri: 9AM–6PM US</span>
              </div>

            </address>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ready;