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
    <footer className="bg-[#0B2350] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* LEFT SIDE */}
          <div className="max-w-md">
            <Image
              src="/logo1.png"
              width={70}
              height={60}
              alt="Top Dog Roofing"
              className="mb-4"
            />

            <p className="text-sm text-slate-200/80 leading-6">
              Top Dog Roofing helps local roofers grow faster with exclusive 
              pay-per-call leads. We connect you with homeowners actively 
              searching for roofing services in your area.
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <a
                href="mailto:support@topdoglead.com"
                className="block text-blue-300 hover:text-white"
              >
                support@topdoglead.com
              </a>

              <a
                href="tel:+16784628013"
                className="flex items-center gap-2 hover:text-blue-300"
              >
                <Phone size={16} />
                +1 678 462 8013
              </a>
            </div>
          </div>

          {/* RIGHT SIDE NAVIGATION */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-3 text-sm">
              {sections.map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className="text-slate-200/80 hover:text-white text-left"
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-pink-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Linkedin size={20} />
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