"use client";

import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";

const sections = ["Services", "Results", "Contact"];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B2350] text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* LEFT SIDE */}
          <div className="max-w-md">
            <Image
              src="/logo1.webp"
              width={70}
              height={60}
              alt="Top Dog Roofing logo"
              className="mb-4"
            />

            <p className="text-sm text-slate-200/80 leading-6">
              Top Dog Roofing helps local roofers grow faster with exclusive
              pay per call leads. We connect you with homeowners actively
              searching for roofing services in your area.
            </p>

            <address className="mt-4 space-y-2 text-sm not-italic">
              <a
                href="mailto:support@topdoglead.com"
                className="block text-blue-300 hover:text-white"
                aria-label="Email support at support@topdoglead.com"
              >
                support@topdoglead.com
              </a>

              <a
                href="tel:+18669644568"
                className="flex items-center gap-2 hover:text-blue-300"
                aria-label="Call us at 1-866-964-4568"
              >
                <Phone size={16} aria-hidden="true" />
                +1 866 964 4568
              </a>
            </address>
          </div>

          {/* QUICK LINKS */}
          <nav aria-label="Footer quick links">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-3 text-sm">
              {sections.map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className="text-slate-200/80 hover:text-white text-left"
                  aria-label={`Go to ${sec} section`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </nav>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {/* ✅ aria-label on every icon-only link — fixes Lighthouse "Links do not have a discernible name" */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-slate-200/70">
          © {new Date().getFullYear()} Top Dog Roofing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}