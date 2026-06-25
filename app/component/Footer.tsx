"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";

const scrollSections = [ "Contact"];

const serviceLinks = [
  { label: "Roof Repair", href: "/services/roof-repair" },
  { label: "Roof Replacement", href: "/services/roof-replacement" },
  { label: "Storm Damage & Insurance", href: "/services/storm-damage" },
  { label: "Commercial Roofing", href: "/services/commercial-roofing" },
  { label: "Roof Inspection", href: "/services/roof-inspection" },
  { label: "New Construction Roofing", href: "/services/new-construction" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B2350] text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="lg:col-span-1">
            <Image
              src="/logo1.webp"
              width={70}
              height={60}
              alt="Top Dog Roofing logo"
              className="mb-4"
            />
            <p className="text-sm text-slate-200/75 leading-6 max-w-xs">
              TopDog Roofing connects homeowners with certified roofing professionals
              for repairs, replacements, and storm restoration across the USA.
            </p>
            <address className="mt-5 space-y-2 text-sm not-italic">
              <a
                href="mailto:support@topdoglead.com"
                className="block text-blue-300 hover:text-white transition"
                aria-label="Email support at support@topdoglead.com"
              >
                support@topdoglead.com
              </a>
              <a
                href="tel:+18669644568"
                className="flex items-center gap-2 hover:text-blue-300 transition"
                aria-label="Call TopDog Roofing at 1-866-964-4568"
              >
                <Phone size={15} aria-hidden="true" />
                +1 866 964 4568
              </a>
            </address>
          </div>

          {/* SERVICES — SEO internal links */}
          <nav aria-label="Footer roofing services links">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-widest text-slate-300">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-slate-200/75 hover:text-white transition"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* COMPANY */}
          <nav aria-label="Footer company links">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-widest text-slate-300">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-200/75 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              {scrollSections.map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => scrollToSection(sec)}
                    className="text-sm text-slate-200/75 hover:text-white transition text-left"
                    aria-label={`Go to ${sec} section`}
                  >
                    {sec}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* SOCIAL + TRUST SIGNALS */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-widest text-slate-300">
              Follow Us
            </h3>
            <div className="flex gap-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" aria-label="Follow TopDog Roofing on Facebook">
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition" aria-label="Follow TopDog Roofing on Instagram">
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition" aria-label="Follow TopDog Roofing on LinkedIn">
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-white/8 rounded-lg px-3 py-2 text-xs text-slate-200/80">
                <span className="text-green-400">✓</span> Licensed & Insured
              </div>
              <div className="inline-flex items-center gap-2 bg-white/8 rounded-lg px-3 py-2 text-xs text-slate-200/80 ml-2">
                <span className="text-yellow-400">★</span> 4.8 Rated
              </div>
              <div className="block mt-2">
                <div className="inline-flex items-center gap-2 bg-white/8 rounded-lg px-3 py-2 text-xs text-slate-200/80">
                  <span className="text-blue-400">⚡</span> 24-Hr Inspection
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SCHEMA — Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              name: "TopDog Roofing",
              url: "https://roofing.topdoglead.com",
              logo: "https://roofing.topdoglead.com/logo1.webp",
              telephone: "+18669644568",
              email: "info@topdoglead.com",
              areaServed: { "@type": "Country", name: "United States" },
              sameAs: [
                "https://facebook.com",
                "https://instagram.com",
                "https://linkedin.com",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Roofing Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Repair", url: "https://roofing.topdoglead.com/services/roof-repair" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Replacement", url: "https://roofing.topdoglead.com/services/roof-replacement" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Storm Damage Repair", url: "https://roofing.topdoglead.com/services/storm-damage" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Roofing", url: "https://roofing.topdoglead.com/services/commercial-roofing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Inspection", url: "https://roofing.topdoglead.com/services/roof-inspection" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Construction Roofing", url: "https://roofing.topdoglead.com/services/new-construction" } },
                ],
              },
            }),
          }}
        />

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-200/50">
          <span>© {new Date().getFullYear()} Top Dog Roofing. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}