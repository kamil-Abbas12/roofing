"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { usePathname } from "next/navigation";

const scrollSections = ["Services", "Contact"];

const serviceLinks = [
  { label: "Roof Repair", href: "/services/roof-repair", desc: "Leaks, shingles & flashing" },
  { label: "Roof Replacement", href: "/services/roof-replacement", desc: "Full roof replacement" },
  { label: "Storm Damage & Insurance", href: "/services/storm-damage", desc: "Hail, wind & water damage" },
  { label: "Commercial Roofing", href: "/services/commercial-roofing", desc: "TPO, EPDM & metal systems" },
  { label: "Roof Inspection", href: "/services/roof-inspection", desc: "24-hour response" },
  { label: "New Construction", href: "/services/new-construction", desc: "Built from the ground up" },
];

const blogLinks = [
  { label: "Blog Grid", href: "/blog" },
  { label: "Blog Sidebar", href: "/blog/sidebar" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/blog");
  const isServicePage = pathname.startsWith("/services");
  const isDarkNav = scrolled || isBlogPage || isServicePage;

  const servicesWrapRef = useRef<HTMLDivElement | null>(null);
  const blogWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setServicesOpen(false);
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
    scrollSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (servicesWrapRef.current && !servicesWrapRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (blogWrapRef.current && !blogWrapRef.current.contains(e.target as Node)) setBlogOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  const navBase = "w-full fixed top-0 z-50 transition-all duration-300";
  const navStyle = isDarkNav
    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
    : "bg-transparent";
  const textStyle = isDarkNav ? "text-slate-900" : "text-blue-900";
  const linkStyle = isDarkNav
    ? "text-slate-700 hover:text-blue-700"
    : "text-blue-900 hover:text-blue-600";
  const primaryBtn = "bg-blue-900 text-white hover:bg-blue-950";
  const outlineBtn = isDarkNav
    ? "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
    : "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white";
  const iconStyle = isDarkNav ? "text-slate-900" : "text-blue-900";

  return (
    <nav className={`${navBase} ${navStyle}`} aria-label="Main navigation">
      <div className="relative w-full mx-auto px-4 md:px-6 lg:px-10 xl:px-16 flex items-center justify-between h-20">

        {/* LOGO */}
        <div className="flex items-center">
          <Link href="/" aria-label="TopDog Roofing — Go to homepage">
            <Image
              src="/logo2.png"
              width={120}
              height={25}
              alt="Top Dog Roofing"
              className="cursor-pointer object-contain"
              priority
            />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className={`hidden lg:flex font-medium items-center space-x-7 ${textStyle}`}>

          {/* SERVICES MEGA DROPDOWN */}
          <div className="relative" ref={servicesWrapRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`flex items-center gap-1.5 transition cursor-pointer py-2 ${linkStyle}`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-label="Services — open submenu"
            >
              Services
              <ChevronDown
                size={16}
                aria-hidden="true"
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div
                className="absolute left-0 mt-1 w-72 rounded-2xl bg-white shadow-xl ring-1 ring-black/8 overflow-hidden"
                role="menu"
                aria-label="Roofing services submenu"
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="px-3 pt-3 pb-1">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 px-2 pb-2">
                    Our Services
                  </p>
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-blue-50 transition group cursor-pointer"
                      onClick={() => setServicesOpen(false)}
                      role="menuitem"
                    >
                      <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">
                        {s.label}
                      </span>
                      <span className="text-xs text-slate-400 group-hover:text-blue-500 mt-0.5">
                        {s.desc}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="bg-blue-50 px-5 py-3 mt-1">
                  <Link
                    href="/services"
                    className="text-xs font-semibold text-blue-700 hover:text-blue-900 cursor-pointer"
                    onClick={() => setServicesOpen(false)}
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* SCROLL SECTIONS ( Contact) */}
          {[ "Contact"].map((sec) => (
            <button
              key={sec}
              onClick={() => {
                const el = document.getElementById(sec);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={`relative transition cursor-pointer ${linkStyle}`}
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
              className={`flex items-center gap-1.5 transition cursor-pointer ${linkStyle}`}
              aria-expanded={blogOpen}
              aria-haspopup="true"
              aria-label="Blog — open submenu"
            >
              Blog
              <ChevronDown
                size={16}
                aria-hidden="true"
                className={`transition-transform duration-200 ${blogOpen ? "rotate-180" : ""}`}
              />
            </button>

            {blogOpen && (
              <div
                className="absolute left-0 mt-3 w-48 rounded-xl bg-white shadow-lg ring-1 ring-black/5 overflow-hidden"
                role="menu"
              >
                {blogLinks.map((b) => (
                  <Link
                    key={b.href}
                    href={b.href}
                    className="block px-4 py-3 text-sm text-slate-800 hover:bg-slate-50 cursor-pointer"
                    onClick={() => setBlogOpen(false)}
                    role="menuitem"
                  >
                    {b.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="hidden lg:flex gap-3">
          <a
            href="tel:+18669644568"
            className={`px-5 py-2 rounded-lg flex items-center transition border font-medium text-sm cursor-pointer ${outlineBtn}`}
            aria-label="Call TopDog Roofing at 1-866-964-4568"
          >
            <Phone size={16} className="mr-2" aria-hidden="true" />
            Call Now
          </a>
    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@topdoglead.com"
  target="_blank"
  rel="noopener noreferrer"
  className={`px-5 py-2 rounded-lg flex items-center cursor-pointer transition font-medium text-sm ${primaryBtn}`}
>
  <FaEnvelope size={15} className="mr-2" />
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
            className="cursor-pointer"
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
        <div className="flex flex-col space-y-1 px-6">

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-blue-900 font-medium cursor-pointer"
              aria-expanded={mobileServicesOpen}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-3 pb-2 space-y-1">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block py-2 text-sm text-slate-600 hover:text-blue-700 border-l-2 border-blue-100 pl-3 cursor-pointer"
                    onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {["Contact"].map((sec) => (
            <button
              key={sec}
              onClick={() => {
                const el = document.getElementById(sec);
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
              className="py-3 text-gray-700 hover:text-blue-900 text-left font-medium cursor-pointer"
              aria-label={`Go to ${sec} section`}
            >
              {sec}
            </button>
          ))}

          <Link
            href="/blog"
            className="py-3 text-gray-700 hover:text-blue-900 font-medium cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href="mailto:info@topdoglead.com"
              className="px-5 py-2.5 rounded-lg flex items-center justify-center bg-blue-900 text-white font-medium cursor-pointer"
              aria-label="Send us an email"
            >
              <FaEnvelope className="mr-2" aria-hidden="true" />
              Contact Us
            </a>
            <a
              href="tel:+18669644568"
              className="border border-blue-900 text-blue-900 px-5 py-2.5 rounded-lg flex items-center justify-center hover:bg-blue-900 hover:text-white font-medium cursor-pointer"
              aria-label="Call us at 1-866-964-4568"
            >
              <Phone className="mr-2" size={16} aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;