"use client";
import React, { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

const sections = ["Services", "Results", "Contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-full bg-white shadow z-50 fixed top-0 py-3 lg:py-4">
      <div className="relative w-full mx-auto px-4 md:px-6 lg:px-10 xl:px-40 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            width={150}
            height={90}
            alt="logo"
            className="cursor-pointer object-contain"
          />
        </div>

        {/* ⭐ TABLET CENTER BUTTONS ONLY */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex lg:hidden items-center gap-3">
          <Link
            href="/appointment"
            className="flex items-center gap-1 text-sm border border-orange-600 text-orange-600 px-3 py-1.5 rounded-md hover:bg-orange-600 hover:text-white transition"
          >
            <Phone size={16} />
            Call
          </Link>

          <Link
            href="/appointment"
            className="flex items-center gap-1 text-sm bg-orange-600 text-white px-3 py-1.5 rounded-md hover:bg-orange-700 transition"
          >
            <FaEnvelope size={14} />
            Contact
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex text-slate-900 font-medium text-base lg:text-lg xl:text-xl space-x-6 xl:space-x-10">
          {sections.map((sec) => (
            <Link key={sec} href={`#${sec}`} className="cursor-pointer">
              {sec}
            </Link>
          ))}
        </div>

        {/* DESKTOP RIGHT BUTTONS */}
        <div className="hidden lg:block">
          <div className="flex gap-5">
            <Link
              href="/appointment"
              className="text-orange-600 border border-orange-600 px-5 py-2 rounded-md font-medium flex items-center hover:bg-orange-600 hover:text-white transition"
            >
              <Phone size={18} className="mr-2" />
              Call Now
            </Link>

            <Link
              href="/appointment"
              className="text-white bg-orange-600 px-5 py-2 rounded-md font-medium flex items-center hover:bg-orange-700 transition"
            >
              <FaEnvelope size={18} className="mr-2" />
              Contact Us
            </Link>
          </div>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`lg:hidden bg-white shadow-md transition-all duration-300 ${
          menuOpen
            ? "max-h-screen py-4 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {sections.map((sec) => (
            <Link
              key={sec}
              href={`#${sec}`}
              onClick={() => setMenuOpen(false)}
              className="block text-base sm:text-lg font-medium text-gray-700 hover:text-orange-600"
            >
              {sec}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;