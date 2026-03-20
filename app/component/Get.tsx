"use client";
import { ArrowUpRight, BarChart3, Handshake, HandHeart } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Get = () => {
  const cards = [
    {
      icon: <Handshake className="h-8 w-8" aria-hidden="true" />,
      title: "Why Consult Our Experts?",
      text: "We bridge the gap between just another contractor and the undisputed local authority. By leveraging a nationwide network of 15,000 specialists, we provide the strategic data and elite craftsmanship your property deserves. You aren't just getting a roof; you're gaining access to industry-leading standards that competitors simply cannot match.",
    },
    {
      icon: <HandHeart className="h-8 w-8" aria-hidden="true" />,
      title: "How We Serve You",
      text: "We replace the storm chaser chaos with a seamless, professional, and personalized experience. Our process is built on transparency and speed because we know insurance claims move fast. From the first face-to-face meeting to the final inspection, we treat your home with a white-glove approach, ensuring a warm, welcoming environment throughout the entire restoration process.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" aria-hidden="true" />,
      title: "The Results You Can Expect",
      text: "Experience total peace of mind with a sturdier, safer, and more valuable investment. Our proven frameworks don't just patch holes; they provide long-term protection and curb appeal that stands the test of time. Whether it's maintenance or a full storm recovery, you walk away with a top-rated roof and the confidence that your most important asset is fully secured.",
    },
  ];

  return (
    <section
      id="Services"
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden py-12 md:py-16 lg:py-20 xl:py-24 px-6 md:px-10 lg:px-20 xl:px-40 bg-gradient-to-br from-[#F7FAFF] via-[#EFF7FF] to-[#EAFBFF]"
    >
      {/* Background blobs */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-cyan-300/25 blur-3xl animate-blob" />
        <div className="absolute top-10 -right-28 h-[520px] w-[520px] rounded-full bg-blue-400/20 blur-3xl animate-blob [animation-delay:600ms]" />
        <div className="absolute -bottom-40 left-1/3 h-[520px] w-[520px] rounded-full bg-sky-300/25 blur-3xl animate-blob [animation-delay:1200ms]" />
      </div>

      <div className="container mx-auto text-center">
        {/* ✅ h1 → h2 (only Hero has h1). Merged the split h1+h2 into one h2. */}
        <h2
          id="services-heading"
          className="text-4xl md:text-5xl font-bold text-blue-900"
        >
          Schedule Your Master Consultation Today!
        </h2>

        <p className="text-lg md:text-xl lg:text-2xl text-slate-700 max-w-5xl mx-auto mt-4 mb-12">
          Elite property protection with expert repairs, replacements, and fast storm restoration.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {cards.map((card, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group relative flex flex-col p-6 lg:p-8 bg-white/80 backdrop-blur-sm rounded-2xl ring-1 ring-slate-200/70 shadow-md hover:-translate-y-2 hover:shadow-xl transition-transform duration-300 card-shine min-h-[250px] sm:min-h-[260px] md:min-h-[270px]"
              aria-label={card.title}
            >
              {/* Icon */}
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-50 to-sky-50 ring-1 ring-cyan-100 flex items-center justify-center transition-all duration-300 group-hover:from-cyan-500 group-hover:to-sky-500 group-hover:ring-white/20 group-hover:shadow-lg">
                <div className="text-blue-800 group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
              </div>

              {/* ✅ h3 inside cards — correct child of section h2 */}
              <h3 className="mt-6 text-lg lg:text-xl font-semibold text-slate-900 transition-transform duration-300 group-hover:scale-[1.03]">
                {card.title}
              </h3>

              <p className="mt-3 text-sm lg:text-base text-slate-600">{card.text}</p>

              <div className="mt-auto pt-6 flex justify-end">
                <div className="relative" aria-hidden="true">
                  <span className="absolute inset-0 rounded-full bg-cyan-400/30 blur-[1px] animate-pingSlow" />
                  <div className="relative h-11 w-11 rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.article>
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