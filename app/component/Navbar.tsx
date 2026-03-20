"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { usePathname } from "next/navigation";

const sections = ["Services", "Results", "Contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isBlogPage = pathname.startsWith("/blog");
  const isDarkNav = scrolled || isBlogPage;

  const [blogOpen, setBlogOpen] = useState(false);
  const blogWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setBlogOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
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

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!blogWrapRef.current) return;
      if (!blogWrapRef.current.contains(e.target as Node)) setBlogOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  const navBase = "w-full fixed top-0 z-50 transition-all duration-300";
  const navStyle = isDarkNav
    ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200"
    : "bg-transparent";
  const textStyle = isDarkNav ? "text-slate-900" : "text-blue-900";
  const linkStyle = isDarkNav
    ? "text-slate-700 hover:text-blue-700"
    : "text-blue-900 hover:text-blue-600";
  const primaryBtn = isDarkNav
    ? "bg-blue-900 text-white hover:bg-blue-950"
    : "bg-blue-900 text-white hover:bg-blue-800";
  const outlineBtn = isDarkNav
    ? "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
    : "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white";
  const iconStyle = isDarkNav ? "text-slate-900" : "text-blue-900";

  return (
    <nav className={`${navBase} ${navStyle}`} aria-label="Main navigation">
      <div className="relative w-full mx-auto px-4 md:px-6 lg:px-10 xl:px-29 flex items-center justify-between h-20">

        {/* LOGO */}
        <div className="flex items-center">
          <Link href="/" aria-label="Top Dog Roofing - Go to homepage">
            <Image
              src="/logo2.png"
              width={120}
              height={25}
              alt="Top Dog Roofing"
              className="cursor-pointer object-contain"
            />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className={`hidden lg:flex font-medium space-x-8 ${textStyle}`}>
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => {
                const el = document.getElementById(sec);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={`relative transition ${linkStyle}`}
              aria-label={`Go to ${sec} section`}
            >
              {sec}
              {activeSection === sec && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600" aria-hidden="true" />
              )}
            </button>
          ))}

          {/* BLOG DROPDOWN */}
          <div className="relative" ref={blogWrapRef}>
            <button
              onClick={() => setBlogOpen(!blogOpen)}
              className={`flex items-center gap-2 transition cursor-pointer ${linkStyle}`}
              aria-expanded={blogOpen}
              aria-haspopup="true"
              aria-label="Blog — open submenu"
            >
              Blog
              <ChevronDown size={18} aria-hidden="true" className={`transition-transform ${blogOpen ? "rotate-180" : ""}`} />
            </button>

            {blogOpen && (
              <div className="absolute left-0 mt-3 w-56 rounded-xl bg-white shadow-lg ring-1 ring-black/5 overflow-hidden" role="menu">
                <Link href="/blog" className="block px-4 py-3 text-sm text-slate-800 hover:bg-slate-50" onClick={() => setBlogOpen(false)} role="menuitem">
                  Blog Grid
                </Link>
                <Link href="/blog/sidebar" className="block px-4 py-3 text-sm text-slate-800 hover:bg-slate-50" onClick={() => setBlogOpen(false)} role="menuitem">
                  Blog Sidebar
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="hidden lg:flex gap-4">
          {/* ✅ Consistent tel: format */}
          <a
            href="tel:+18669644568"
            className={`px-5 py-2 rounded-md flex items-center transition border ${outlineBtn}`}
            aria-label="Call us at 1-866-964-4568"
          >
            <Phone size={18} className="mr-2" aria-hidden="true" />
            Call Now
          </a>

          <a
            href="mailto:info@topdoglead.com"
            className={`px-5 py-2 rounded-md flex items-center cursor-pointer transition ${primaryBtn}`}
            aria-label="Send us an email"
          >
            <FaEnvelope size={18} className="mr-2" aria-hidden="true" />
            Contact Us
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen
              ? <X size={28} className={iconStyle} aria-hidden="true" />
              : <Menu size={28} className={iconStyle} aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-white shadow-md transition-all duration-300 ${menuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"}`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col space-y-4 px-6">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => {
                const el = document.getElementById(sec);
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
              className="text-gray-700 hover:text-blue-900 text-left"
              aria-label={`Go to ${sec} section`}
            >
              {sec}
            </button>
          ))}

          <Link href="/blog" className="text-gray-700 hover:text-blue-900" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>

          <a href="mailto:info@topdoglead.com" className={`px-5 py-2 rounded-md flex items-center justify-center ${primaryBtn}`} aria-label="Send us an email">
            <FaEnvelope className="mr-2" aria-hidden="true" />
            Contact Us
          </a>

          <a href="tel:+18669644568" className="border border-blue-900 text-blue-900 px-5 py-2 rounded-md flex items-center justify-center hover:bg-blue-900 hover:text-white" aria-label="Call us at 1-866-964-4568">
            <Phone className="mr-2" aria-hidden="true" />
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;