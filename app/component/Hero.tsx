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
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero({
  label = "Roofing",
  title = "Brighten Your Smile\nwith Expert Dental\nSolutions",
  description = `Experience personalized, comprehensive roofing for all ages in a warm,
welcoming environment. Your healthiest, brightest smile starts here.`,
  ctaText = "Get Started Now",
  ctaHref = "#",
  customersCount = "23k",
  customersLabel = "happy customers",
  avatarUrls = [],
  years = "15",
  yearsLabel = "Years of Experience",
  rightImageSrc = "/roof2.jpg",
}: HeroProps) {
  const titleLines = title.split("\n");

  return (
    <section className="w-full bg-[#061a62] pt-20">
      <div className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#061b6b] via-[#051655] to-[#031449]" />
          <div className="absolute inset-0 bg-[#0e3aa1]/35" style={{ clipPath: "polygon(0 0, 62% 0, 40% 55%, 0 70%)" }} />
          <div className="absolute inset-0 bg-[#1b57c7]/25" style={{ clipPath: "polygon(0 30%, 42% 10%, 62% 55%, 0 92%)" }} />
          <div className="absolute inset-0 bg-[#0a2b86]/45" style={{ clipPath: "polygon(20% 0, 70% 0, 55% 38%, 28% 30%)" }} />
          <div className="absolute inset-0 bg-[#0b2f93]/35" style={{ clipPath: "polygon(0 68%, 44% 46%, 66% 100%, 0 100%)" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20" />
        </div>

        {/* Content */}
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2 xl:gap-20">
          {/* LEFT SIDE */}
          <motion.div variants={container} initial="hidden" animate="show" className="text-white text-center xl:text-left">
            <motion.p variants={fadeUp} className="text-sm font-medium text-white/90">{label}</motion.p>
            <motion.h1 variants={fadeUp} className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              {titleLines.map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx !== titleLines.length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a href={ctaHref} className="inline-flex h-11 w-fit items-center justify-center rounded-xl bg-[#3f72d7] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3566c9]">{ctaText}</a>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["/pic1.jpg", "/pic2.jpg", "/pic3.jpg"].map((src, i) => (
                    <div key={i} className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white/90">
                      <Image src={src} alt={`Customer ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold">{customersCount}</div>
                  <div className="text-xs text-white/80">{customersLabel}</div>
                </div>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-10 max-w-xl whitespace-pre-line text-sm leading-relaxed text-white/75">
              {description}
            </motion.p>
          </motion.div>

          {/* RIGHT SIDE WITH FLOATING IMAGE */}
          <div className="relative">
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-white/10 shadow-2xl ring-1 ring-white/10"
              animate={{ x: ["0%", "5%", "-5%", "0%"] }} // horizontal left-right motion
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative aspect-[4/3] w-full transition transform duration-100 hover:scale-110">
                <Image src={rightImageSrc} alt="Hero image" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-black/5" />
              </div>

              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }} className="absolute bottom-6 right-6 w-[140px] rounded-2xl bg-[#4a79d6] px-5 py-6 text-center text-white shadow-lg">
                <div className="text-5xl font-extrabold leading-none">{years}</div>
                <div className="mt-2 text-xs font-medium text-white/90">{yearsLabel}</div>
              </motion.div>
            </motion.div>

            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}