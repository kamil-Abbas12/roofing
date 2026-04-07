// app/services/commercial-roofing/page.tsx
import { Metadata } from "next";
import { SERVICE_SEO } from "@/lib/seo";
import ServicePageLayout from "@/app/component/ServicePageLayout";

const seo = SERVICE_SEO["commercial-roofing"];

export const metadata: Metadata = {
  title: seo.metaTitle,
  description: seo.metaDescription,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: {
    title: seo.metaTitle,
    description: seo.metaDescription,
    url: seo.canonical,
    siteName: "TopDog Roofing",
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.metaTitle,
    description: seo.metaDescription,
    images: [seo.ogImage],
  },
};

export default function CommercialRoofingPage() {
  return (
    <ServicePageLayout
      badge="COMMERCIAL ROOFING"
      h1={seo.h1}
      intro="Your business can't afford downtime from a failing roof. We deliver commercial roofing solutions for offices, warehouses, retail centers, and industrial facilities — with TPO, EPDM, metal, and modified bitumen systems installed by certified contractors."
      heroStats={[
        { value: "200+", label: "Commercial Projects" },
        { value: "20yr", label: "System Warranties" },
        { value: "4.8★", label: "Business Rating" },
        { value: "0", label: "Days Unplanned Downtime" },
      ]}
      benefits={[
        { icon: "🏢", title: "All Commercial Systems", desc: "TPO, EPDM, modified bitumen, PVC, metal — we install and repair every major commercial roofing system." },
        { icon: "📅", title: "Minimal Business Disruption", desc: "We schedule work to minimize impact on your operations. Weekend and after-hours installation available." },
        { icon: "🔬", title: "Preventive Maintenance Programs", desc: "Scheduled inspections and maintenance contracts keep your commercial roof performing for decades." },
        { icon: "📋", title: "Code-Compliant Installation", desc: "All work is fully compliant with local building codes and manufacturer specifications." },
        { icon: "⚡", title: "Emergency Commercial Repairs", desc: "Roof failure can close your business. We provide rapid-response commercial emergency repairs." },
        { icon: "📊", title: "Detailed Project Reporting", desc: "Full documentation of all work performed — ideal for property managers, landlords, and facility managers." },
      ]}
      steps={[
        { num: "1", title: "Site Assessment", desc: "We assess your commercial property, document existing conditions, and identify priorities." },
        { num: "2", title: "System Recommendation", desc: "We recommend the right roofing system based on your building type, climate, and budget." },
        { num: "3", title: "Scheduled Installation", desc: "Work is scheduled to minimize business disruption with clear milestones and timelines." },
        { num: "4", title: "Inspection & Handover", desc: "Full quality inspection, warranty documentation, and ongoing maintenance recommendations." },
      ]}
      faqs={[
        { q: "What is the best commercial roofing system?", a: "TPO is currently the most popular commercial flat roof system due to its energy efficiency and cost. EPDM is excellent for longevity. Metal is ideal for sloped commercial roofs. We recommend the best system based on your specific building and climate." },
        { q: "How long do commercial roofs last?", a: "TPO and EPDM systems typically last 20–30 years. Metal commercial roofs can last 40–70 years with proper maintenance. Modified bitumen typically lasts 15–25 years. Regular maintenance significantly extends all system lifespans." },
        { q: "Can commercial roofing be done without closing my business?", a: "In most cases, yes. We stage the work in sections and schedule noisy work during off-hours when needed to ensure your business continues operating normally throughout the project." },
        { q: "Do you handle commercial roof insurance claims?", a: "Yes. We document storm and hail damage for commercial properties and work with your commercial insurance carrier to maximize your claim approval." },
        { q: "What size commercial buildings do you work on?", a: "We handle commercial roofing projects of all sizes — from small retail shops and office buildings to large warehouses and industrial complexes. Our contractor network covers all 50 states." },
      ]}
      related={[
        { label: "Roof Repair", href: "/services/roof-repair", desc: "Fix leaks, shingles & flashing" },
        { label: "Roof Replacement", href: "/services/roof-replacement", desc: "Full replacement with premium materials" },
        { label: "Storm Damage & Insurance", href: "/services/storm-damage", desc: "Hail, wind & water damage experts" },
        { label: "Roof Inspection", href: "/services/roof-inspection", desc: "24-hour certified inspections" },
        { label: "New Construction", href: "/services/new-construction", desc: "Built from the ground up" },
      ]}
      slug={seo.slug}
      schema={seo.schema}
      keywords={seo.keywords}
      ctaHeading="Protect Your Business with a Commercial Roofing Expert"
      ctaSubtext="Get a free commercial roof assessment from a certified contractor in your area. Fast response, minimal downtime, maximum durability."
    />
  );
}