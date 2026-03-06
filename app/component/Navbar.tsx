"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

const sections = ["Services", "Results", "Contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // NEW: Blog dropdown states
  const [blogOpen, setBlogOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const blogWrapRef = useRef<HTMLDivElement | null>(null);

  // Handle scroll background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      // Optional: close dropdown on scroll to avoid floating menu
      setBlogOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight active section
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

  // NEW: click outside to close blog dropdown (desktop)
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!blogWrapRef.current) return;
      if (!blogWrapRef.current.contains(e.target as Node)) setBlogOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  const navBase = "w-full fixed top-0 z-50 transition-all duration-300";
  const navStyle = scrolled
    ? "bg-white/95 backdrop-blur shadow border-b border-slate-200"
    : "bg-transparent";

  const textStyle = scrolled ? "text-slate-900" : "text-white";

  const linkStyle = scrolled
    ? "text-slate-700 hover:text-blue-700"
    : "text-blue-900 hover:text-blue-700";

  const iconStyle = scrolled ? "text-slate-900" : "text-white";
  const primaryBtn = scrolled
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "bg-white text-blue-900 hover:bg-gray-100";
  const outlineBtn = scrolled
    ? "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
    : "border-blue-900 text-blue-900 bg-white/90 hover:bg-blue-900 hover:text-white";

  return (
    <nav className={`${navBase} ${navStyle} h-20`}>
      {/* NAVBAR CONTAINER */}
      <div className="relative w-full mx-auto px-4 md:px-6 lg:px-10 xl:px-40 flex items-center justify-between h-20">
        {/* LOGO */}
        <div className="flex items-center">
          <Image
            src="/logo1.png"
            width={80}
            height={20}
            alt="logo"
            className="cursor-pointer object-contain"
          />
        </div>

        {/* TABLET CENTER BUTTONS */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex lg:hidden items-center gap-3">
          <a
            href="tel:2762548576"
            className={`flex items-center gap-1 text-sm px-3 py-1.5 rounded-md transition border ${outlineBtn}`}
          >
            <Phone size={16} />
            Call
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@topdoglead.com&su=New%20Lead%20Inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 text-sm px-3 py-1.5 rounded-md transition ${primaryBtn}`}
          >
            <FaEnvelope size={14} />
            Contact
          </a>
        </div>

        {/* DESKTOP MENU */}
        <div
          className={`hidden lg:flex font-medium space-x-6 xl:space-x-10 ${textStyle}`}
        >
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => {
                const el = document.getElementById(sec);
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
                setBlogOpen(false);
              }}
              className={`block text-base sm:text-lg font-medium transition ${linkStyle} ${
                activeSection === sec
                  ? scrolled
                    ? "text-blue-700 font-semibold"
                    : "text-blue-900 font-semibold"
                  : ""
              }`}
            >
              {sec}
            </button>
          ))}

          {/* NEW: BLOG DROPDOWN (Desktop) */}
          <div className="relative" ref={blogWrapRef}>
            <button
              type="button"
              onClick={() => setBlogOpen((v) => !v)}
              className={`inline-flex items-center gap-2 text-base sm:text-lg font-medium transition ${linkStyle}`}
            >
              Blog
             <ChevronDown
  size={18}
  className={`${textStyle} transition-transform duration-200 ${
    blogOpen ? "rotate-180" : ""
  }`}
/>
            </button>

            {blogOpen && (
              <div className="absolute left-0 mt-3 w-56 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5">
                <Link
                  href="/blog"
                  onClick={() => setBlogOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Blog Grid
                </Link>
                <Link
                  href="/blog/sidebar"
                  onClick={() => setBlogOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Blog Sidebar
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* DESKTOP RIGHT BUTTONS */}
        <div className="hidden lg:flex gap-5">
          <a
            href="tel:2762548576"
            className={`px-5 py-2 rounded-md font-medium flex items-center transition border ${outlineBtn}`}
          >
            <Phone size={18} className="mr-2" />
            Call Now
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@topdoglead.com&su=New%20Lead%20Inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 rounded-md font-medium flex items-center transition ${primaryBtn}`}
          >
            <FaEnvelope size={18} className="mr-2" />
            Contact Us
          </a>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              // optional: keep blog open state in sync
              if (menuOpen) setMobileBlogOpen(false);
            }}
          >
            {menuOpen ? (
              <X size={28} className={iconStyle} />
            ) : (
              <Menu size={28} className={iconStyle} />
            )}
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
            <button
              key={sec}
              onClick={() => {
                const el = document.getElementById(sec);
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
                setMobileBlogOpen(false);
              }}
              className="w-full text-center text-base sm:text-lg font-medium text-gray-700 hover:text-blue-950 transition"
            >
              {sec}
            </button>
          ))}

          {/* NEW: BLOG DROPDOWN (Mobile) */}
          <div className="w-full">
            <button
              type="button"
              onClick={() => setMobileBlogOpen((v) => !v)}
              className="w-full flex items-center justify-center gap-2 
              text-base sm:text-lg font-medium text-gray-900 hover:text-blue-950 transition"
            >
              Blog
             <ChevronDown
  size={18}
  className={`text-gray-700 transition-transform duration-200 ${
    mobileBlogOpen ? "rotate-180" : ""
  }`}
/>
            </button>

            <div
              className={`grid transition-all duration-300 ${
                mobileBlogOpen
                  ? "grid-rows-[1fr] opacity-100 mt-3"
                  : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
            >
              <div className="overflow-hidden flex flex-col gap-2">
                <Link
                  href="/blog"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileBlogOpen(false);
                  }}
                  className="w-full text-center text-sm font-semibold text-slate-700 hover:text-blue-950 transition py-2 rounded-md hover:bg-slate-50"
                >
                  Blog Grid
                </Link>

                <Link
                  href="/blog/sidebar"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileBlogOpen(false);
                  }}
                  className="w-full text-center text-sm font-semibold text-slate-700 hover:text-blue-950 transition py-2 rounded-md hover:bg-slate-50"
                >
                  Blog Sidebar
                </Link>
              </div>
            </div>
          </div>

          {/* CONTACT BUTTON MOBILE */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@topdoglead.com&su=New%20Lead%20Inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full text-center px-5 py-2 rounded-md font-medium flex items-center justify-center transition ${primaryBtn}`}
          >
            <FaEnvelope size={18} className="mr-2" />
            Contact Us
          </a>

          {/* CALL BUTTON MOBILE */}
          <a
            href="tel:2762548576"
            className="w-full text-center text-blue-950 border border-blue-950 px-5 py-2 rounded-md font-medium flex items-center justify-center hover:bg-[#213150] hover:text-white transition"
          >
            <Phone size={16} className="mr-2" />
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
