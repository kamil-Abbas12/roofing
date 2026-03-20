"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

type HeroProps = {
  label?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  customersCount?: string;
  customersLabel?: string;
  avatarUrls?: string[];
  years?: string;
  yearsLabel?: string;
  rightImageSrc?: string;
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero({
  title = "Shield your home with professional roofing specialists",
  description = `Your Strongest Shield Starts Here.\nComprehensive protection, simplified for you.`,
  ctaText = "Get Started Now",
  ctaHref = "#Contact",
  customersCount = "23k",
  customersLabel = "Happy customers",
  years = "Certified",
  yearsLabel = "Professionals",
  rightImageSrc = "/roof2.webp",
}: HeroProps) {
  const titleLines = title.split("\n");

  return (
    <section
      aria-label="Hero — Professional Roofing Services"
      className="relative isolate overflow-hidden py-20 bg-gradient-to-br from-[#F7FAFF] via-[#EFF7FF] to-[#EAFBFF]"
    >
      {/* Background blobs */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-cyan-300/25 blur-3xl animate-blob" />
        <div className="absolute top-10 -right-28 h-[520px] w-[520px] rounded-full bg-blue-400/20 blur-3xl animate-blob [animation-delay:600ms]" />
        <div className="absolute -bottom-40 left-1/3 h-[520px] w-[520px] rounded-full bg-sky-300/25 blur-3xl animate-blob [animation-delay:1200ms]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 xl:gap-20">

        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-blue-900 text-center xl:text-left"
        >
          {/* ✅ h1 is correct here — only one h1 per page */}
          <motion.h1
            variants={fadeUp}
            className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl"
          >
            {titleLines.map((line, idx) => (
              <span key={idx}>
                {line}
                {idx !== titleLines.length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href={ctaHref}
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-xl bg-[#3f72d7] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3566c9]"
              aria-label="Get started with Top Dog Roofing"
            >
              {ctaText}
            </a>

            {/* ✅ Consistent tel: format — fixes "Identical links have same purpose" warning */}
            <a
              href="tel:+18669644568"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-xl border border-[#3f72d7] px-6 text-sm font-semibold text-[#3f72d7] transition hover:bg-[#3f72d7] hover:text-white"
              aria-label="Call Top Dog Roofing at 1-866-964-4568"
            >
              Call Now
            </a>

            {/* Customers */}
            <div className="flex items-center gap-4" aria-label={`${customersCount} ${customersLabel}`}>
              <div className="flex -space-x-2" aria-hidden="true">
                {["/pic1.webp", "/pic2.webp", "/pic3.webp"].map((src, i) => (
                  <div key={i} className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white/90">
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">{customersCount}</div>
                <div className="text-xs text-blue-900/80">{customersLabel}</div>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-10 max-w-xl whitespace-pre-line text-sm md:text-base leading-relaxed text-blue-900/75"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <motion.div
            className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10"
            animate={{ x: ["0%", "5%", "-5%", "0%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative aspect-[4/3] w-full transition transform duration-100 hover:scale-110">
              {/* ✅ priority + fetchpriority for LCP — fixes Lighthouse LCP request discovery */}
              <Image
                src={rightImageSrc}
                alt="Professional roofing specialist working on a residential roof"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-black/5" aria-hidden="true" />
            </div>

            {/* ✅ Contrast fix: text-white/90 → text-white on bg-[#4a79d6] fails WCAG AA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="absolute bottom-6 right-6 w-[140px] rounded-2xl bg-blue-800 px-5 py-6 text-center text-white shadow-lg"
              aria-label={`${years} ${yearsLabel}`}
            >
              <div className="text-sm font-semibold text-white">{years}</div>
              <div className="mt-2 text-sm font-semibold text-white">{yearsLabel}</div>
            </motion.div>
          </motion.div>

          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
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
      `}</style>
    </section>
  );
}