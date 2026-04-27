// app/services/page.tsx — Services index page
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";
import { SITE_URL, PHONE, PHONE_DISPLAY } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Roofing Services | Repair, Replacement & More | TopDog Roofing",
  description:
    "Professional roofing services for homeowners and businesses. Roof repair, replacement, storm damage, commercial roofing, inspections & new construction. Licensed & insured. Call now!",
  keywords: [
    "roofing services",
    "roof repair",
    "roof replacement",
    "storm damage roofing",
    "commercial roofing",
    "roof inspection",
    "new construction roofing",
    "roofing contractor",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Roofing Services | TopDog Roofing",
    description: "Complete roofing services — repair, replacement, storm damage, inspections & more.",
    url: `${SITE_URL}/services`,
    siteName: "TopDog Roofing",
    type: "website",
  },
};

const services = [
  {
    slug: "roof-repair",
    label: "Roof Repair",
    desc: "Leaks, damaged shingles, flashing failures, and structural repairs. Same-day emergency response available.",
    icon: "🔧",
    keywords: ["Leak Repair", "Shingle Repair", "Emergency Service"],
  },
  {
    slug: "roof-replacement",
    label: "Roof Replacement",
    desc: "Full roof replacement with asphalt, metal, tile, and flat roofing systems. 25-year warranties included.",
    icon: "🏠",
    keywords: ["Asphalt", "Metal", "Tile", "Flat Roof"],
  },
  {
    slug: "storm-damage",
    label: "Storm Damage & Insurance",
    desc: "Hail and wind damage specialists. We handle the entire insurance claims process for maximum payout.",
    icon: "🌪️",
    keywords: ["Hail Damage", "Insurance Claims", "Wind Damage"],
  },
  {
    slug: "commercial-roofing",
    label: "Commercial Roofing",
    desc: "TPO, EPDM, metal, and modified bitumen systems for offices, warehouses, and retail centers.",
    icon: "🏢",
    keywords: ["TPO", "EPDM", "Flat Roof", "Warehouse"],
  },
  {
    slug: "roof-inspection",
    label: "Roof Inspection",
    desc: "Certified 50-point inspections with drone technology. Written reports included. 24-hour response.",
    icon: "🔍",
    keywords: ["Drone Inspection", "Pre-Purchase", "Post-Storm"],
  },
  {
    slug: "new-construction",
    label: "New Construction Roofing",
    desc: "Builder-friendly scheduling for residential and commercial new builds. Code-compliant, on-time delivery.",
    icon: "🏗️",
    keywords: ["New Build", "Custom Home", "Builder Partnerships"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "TopDog Roofing Services",
            url: `${SITE_URL}/services`,
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.label,
              url: `${SITE_URL}/services/${s.slug}`,
            })),
          }),
        }}
      />

      <main className="pt-28 pb-20" id="main-content">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 lg:px-16 text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full mb-5">
            OUR SERVICES
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-950 mb-5 leading-tight">
            Complete Roofing Services<br className="hidden lg:block" /> for Every Need
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
            From emergency leak repair to full commercial roofing systems - TopDog Roofing connects you
            with certified specialists for every roofing need, anywhere in the USA.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-blue-900 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-950 transition shadow-lg shadow-blue-900/20"
              aria-label={`Call TopDog Roofing at ${PHONE_DISPLAY}`}
            >
              <Phone size={18} aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
            <Link
              href="/#Contact"
              className="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-900 hover:text-white transition"
            >
              Free Estimate <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 overflow-hidden"
              >
                <div className="p-7">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition">
                    {s.label}
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {s.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-medium"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-blue-700 font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="max-w-7xl mx-auto px-6 lg:px-16 mt-16">
          <div className="bg-blue-900 rounded-2xl p-8 lg:p-10 text-white grid md:grid-cols-4 gap-6 text-center">
            {[
              { value: "1,000+", label: "Roofs Completed" },
              { value: "4.8★", label: "Customer Rating" },
              { value: "24hr", label: "Inspection Response" },
              { value: "USA", label: "Nationwide Coverage" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold mb-1">{s.value}</div>
                <div className="text-sm text-blue-200">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}