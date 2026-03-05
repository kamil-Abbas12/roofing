"use client";
import { Globe, MessageCircleCheck, PenSquare, Search, ArrowUpRight } from "lucide-react";
import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { PiArrowElbowLeftUp } from "react-icons/pi";
import { motion, Variants } from "framer-motion";

const Get = () => {
  const cards = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Strategies for Roofers",
      text: "Dominate local searches when homeowners look for “roof repair near me,” “storm damage roofing,” and “emergency roof leak help” in your area."
    },
    {
      icon: <PiArrowElbowLeftUp className="h-8 w-8" />,
      title: "Digital Ads for Roofing Leads",
      text: "Reach homeowners searching for roof repairs, replacements, and storm damage solutions with precise, high-converting ad campaigns."
    },
    {
      icon: <GrMapLocation className="h-8 w-8" />,
      title: "Premium Roofing Leads: Google Guaranteed",
      text: "Secure the prestigious Google Guaranteed checkmark and dominate the top of local roofing results, paying only for the phone calls and messages you receive."
    },
    // {
    //   icon: <Globe className="h-8 w-8" />,
    //   title: "Local SEO & Map Rankings for Roofers",
    //   text: "Maximize your visibility in Google Maps whenever residents look for expert roofing services nearby."
    // },
    // {
    //   icon: <PenSquare className="h-8 w-8" />,
    //   title: "Elite Roofer Web Design",
    //   text: "High-speed digital platforms that transform organic traffic into exclusive roofing leads."
    // },
    // {
    //   icon: <MessageCircleCheck className="h-8 w-8" />,
    //   title: "Roofer Content & Socials",
    //   text: "Project transformation showcases, weather recovery guides, and timely updates that establish authority."
    // }
  ];

  return (
    <section
      id="Services"
      className="relative isolate overflow-hidden py-12 md:py-16 lg:py-20 xl:py-24 px-6 md:px-10 lg:px-20 xl:px-40 bg-gradient-to-br from-[#F7FAFF] via-[#EFF7FF] to-[#EAFBFF]"
    >
      {/* Background blobs */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-cyan-300/25 blur-3xl animate-blob" />
        <div className="absolute top-10 -right-28 h-[520px] w-[520px] rounded-full bg-blue-400/20 blur-3xl animate-blob [animation-delay:600ms]" />
        <div className="absolute -bottom-40 left-1/3 h-[520px] w-[520px] rounded-full bg-sky-300/25 blur-3xl animate-blob [animation-delay:1200ms]" />
      </div>

      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900">
          With Top Dog, Roofing Contractors Get
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 mt-2 mb-6">
          Noticed, Chosen, and Trusted
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-slate-700 max-w-5xl mx-auto mb-12">
          Our powerful digital marketing strategies help roofing businesses become the preferred choice for repairs, replacements, and storm damage services across the USA.
        </p>

        {/* GRID */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
  {cards.map((card, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
      className="group relative flex flex-col p-6 lg:p-8 bg-white/80 backdrop-blur-sm rounded-2xl ring-1 ring-slate-200/70 shadow-md hover:-translate-y-2 hover:shadow-xl transition-transform duration-300 card-shine min-h-[250px] sm:min-h-[260px] md:min-h-[270px]"
    >
      {/* Icon */}
      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-50 to-sky-50 ring-1 ring-cyan-100 flex items-center justify-center transition-all duration-300 group-hover:from-cyan-500 group-hover:to-sky-500 group-hover:ring-white/20 group-hover:shadow-lg">
        <div className="text-blue-800 group-hover:text-white transition-colors duration-300">
          {card.icon}
        </div>
      </div>

      <h3 className="mt-6 text-lg lg:text-xl font-semibold text-slate-900 group-hover:text-slate-900 transition-transform duration-300 group-hover:scale-[1.03]">
        {card.title}
      </h3>

      <p className="mt-3 text-sm lg:text-base text-slate-600">{card.text}</p>

      <div className="mt-auto pt-4 relative">
        <div className="absolute bottom-5 right-5">
          <span className="absolute inset-0 rounded-full bg-cyan-400/30 blur-[1px] animate-pingSlow" />
          <div className="relative h-11 w-11 rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0,0) scale(1); }
          33% { transform: translate(18px,-22px) scale(1.05); }
          66% { transform: translate(-16px,14px) scale(0.98); }
          100% { transform: translate(0,0) scale(1); }
        }
        .animate-blob { animation: blob 9s ease-in-out infinite; }

        .card-shine::after {
          content:"";
          position:absolute;
          inset:-40%;
          background: linear-gradient(120deg, transparent 35%, rgba(255,255,255,.65) 50%, transparent 65%);
          transform: translateX(-60%) rotate(6deg);
          opacity: 0;
        }
        .card-shine:hover::after {
          opacity: .95;
          animation: shine 1.05s ease-in-out;
        }
        @keyframes shine {
          0% { transform: translateX(-60%) rotate(6deg); }
          100% { transform: translateX(60%) rotate(6deg); }
        }

        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 0.65; }
          80%,100% { transform: scale(1.8); opacity: 0; }
        }
        .animate-pingSlow { animation: pingSlow 1.7s cubic-bezier(0,0,0.2,1) infinite; }
      `}</style>
    </section>
  );
};

export default Get;