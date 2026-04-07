// components/ServicePageLayout.tsx
// Shared layout for all 6 roofing service pages
// — Hero, Benefits, Process, FAQ (schema), CTA, Internal links

import React from "react";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, Star } from "lucide-react";
import { PHONE, PHONE_DISPLAY, SITE_URL } from "@/lib/seo";

interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface RelatedService {
  label: string;
  href: string;
  desc: string;
}

interface ServicePageLayoutProps {
  badge: string;          // e.g. "ROOF REPAIR"
  h1: string;
  intro: string;
  heroStats: { value: string; label: string }[];
  benefits: Benefit[];
  steps: Step[];
  faqs: FAQ[];
  related: RelatedService[];
  slug: string;
  schema: object;
  ctaHeading: string;
  ctaSubtext: string;
  keywords: string[];     // used in breadcrumb aria-label
}

export default function ServicePageLayout({
  badge,
  h1,
  intro,
  heroStats,
  benefits,
  steps,
  faqs,
  related,
  slug,
  schema,
  ctaHeading,
  ctaSubtext,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* ── JSON-LD structured data ────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── FAQ Schema ────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ── BreadcrumbList Schema ─────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
              { "@type": "ListItem", position: 3, name: badge, item: `${SITE_URL}/services/${slug}` },
            ],
          }),
        }}
      />

      <main className="pt-20" id="main-content">

        {/* ── BREADCRUMB ────────────────────────────────────────── */}
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-16 pt-6 pb-0"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2 text-sm text-slate-500" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="hover:text-blue-700 transition" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true"><ArrowRight size={12} /></li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/services" className="hover:text-blue-700 transition" itemProp="item">
                <span itemProp="name">Services</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <li aria-hidden="true"><ArrowRight size={12} /></li>
            <li className="text-blue-700 font-medium" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">{badge}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-20"
          aria-labelledby="service-h1"
        >
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full mb-5">
                {badge}
              </span>
              <h1
                id="service-h1"
                className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6"
              >
                {h1}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                {intro}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 bg-blue-900 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-950 transition shadow-lg shadow-blue-900/20"
                  aria-label={`Call TopDog Roofing now at ${PHONE_DISPLAY}`}
                >
                  <Phone size={18} aria-hidden="true" />
                  Call {PHONE_DISPLAY}
                </a>
                <Link
                  href="/#Contact"
                  className="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-900 hover:text-white transition"
                >
                  Free Estimate
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-5">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center"
                >
                  <div className="text-3xl font-extrabold text-blue-900 mb-1">{s.value}</div>
                  <div className="text-sm text-slate-500">{s.label}</div>
                </div>
              ))}
              {/* Review stars card */}
              <div className="col-span-2 bg-blue-900 rounded-2xl p-5 flex items-center gap-4 text-white">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" className="text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-sm">4.8 / 5 Average Rating</div>
                  <div className="text-xs text-blue-200">Based on 1,000+ homeowner reviews</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ─────────────────────────────────────────── */}
        <section
          className="bg-slate-50 py-16 lg:py-20"
          aria-labelledby="benefits-heading"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 id="benefits-heading" className="text-3xl font-bold text-slate-900 mb-3 text-center">
              Why Choose TopDog Roofing?
            </h2>
            <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
              We connect you with certified roofing specialists who deliver on time, on budget, and built to last.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition"
                >
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="font-bold text-slate-800 mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-20"
          aria-labelledby="process-heading"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 id="process-heading" className="text-3xl font-bold text-slate-900 mb-3 text-center">
              Our Simple Process
            </h2>
            <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
              From first call to final inspection — transparent, fast, and stress-free.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={step.num} className="relative">
                  <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm h-full">
                    <div className="w-12 h-12 rounded-full bg-blue-900 text-white font-extrabold text-lg flex items-center justify-center mb-4 shrink-0">
                      {step.num}
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 z-10">
                      <ArrowRight size={20} className="text-blue-200" aria-hidden="true" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section
          className="bg-slate-50 py-16 lg:py-20"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto px-6 lg:px-16">
            <h2 id="faq-heading" className="text-3xl font-bold text-slate-900 mb-3 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-center mb-12">
              Everything homeowners ask before getting started.
            </p>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-6 py-5 font-semibold text-slate-800 cursor-pointer list-none hover:text-blue-700 transition">
                    {f.q}
                    <span className="text-blue-600 group-open:rotate-45 transition-transform ml-4 shrink-0 text-xl leading-none">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ───────────────────────────────────────── */}
        <section
          className="bg-blue-900 py-16"
          aria-labelledby="cta-heading"
        >
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" className="text-yellow-400" aria-hidden="true" />
              ))}
            </div>
            <h2 id="cta-heading" className="text-3xl lg:text-4xl font-extrabold mb-4">
              {ctaHeading}
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              {ctaSubtext}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg"
                aria-label={`Call TopDog Roofing at ${PHONE_DISPLAY}`}
              >
                <Phone size={18} aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/#Contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white hover:text-blue-900 transition"
              >
                Get Free Estimate
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── INTERNAL LINKS / RELATED SERVICES ────────────────── */}
        <section
          className="py-14 lg:py-18"
          aria-labelledby="related-heading"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 id="related-heading" className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Explore More Roofing Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex items-center justify-between bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-5 hover:border-blue-200 hover:shadow-md transition"
                >
                  <div>
                    <div className="font-semibold text-slate-800 group-hover:text-blue-700 transition mb-0.5">
                      {r.label}
                    </div>
                    <div className="text-xs text-slate-400">{r.desc}</div>
                  </div>
                  <ArrowRight size={16} className="text-blue-400 group-hover:translate-x-1 transition-transform shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}