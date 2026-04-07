// app/services/roof-replacement/page.tsx
import { Metadata } from "next";
import { SERVICE_SEO } from "@/lib/seo";
import ServicePageLayout from "@/app/component/ServicePageLayout";

const seo = SERVICE_SEO["roof-replacement"];

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

export default function RoofReplacementPage() {
  return (
    <ServicePageLayout
      badge="ROOF REPLACEMENT"
      h1={seo.h1}
      intro="When repairs aren't enough, a full roof replacement is the smartest investment you can make in your home. We install premium asphalt, metal, tile, and flat roofing systems — with warranties that last decades."
      heroStats={[
        { value: "500+", label: "Roofs Replaced" },
        { value: "25yr", label: "Material Warranties" },
        { value: "4.8★", label: "Avg. Customer Rating" },
        { value: "3 Days", label: "Avg. Install Time" },
      ]}
      benefits={[
        { icon: "🏠", title: "All Roofing Materials", desc: "Asphalt shingles, metal, tile, flat/TPO — we work with every material and style." },
        { icon: "📅", title: "On-Time Installation", desc: "We commit to a project timeline and stick to it. Minimal disruption to your home life." },
        { icon: "📜", title: "25-Year Warranties", desc: "Industry-leading material warranties plus our own workmanship guarantee." },
        { icon: "💡", title: "Free Material Consultation", desc: "Not sure which material is best for your home, climate, and budget? We'll guide you." },
        { icon: "🏦", title: "Financing Available", desc: "Flexible payment options available so you don't have to delay a critical roof replacement." },
        { icon: "♻️", title: "Full Old Roof Removal", desc: "We remove and dispose of your old roofing materials responsibly before installation." },
      ]}
      steps={[
        { num: "1", title: "Free Inspection & Quote", desc: "We assess your existing roof and provide a detailed, no-obligation replacement quote." },
        { num: "2", title: "Choose Your Material", desc: "Select from our range of premium roofing materials with expert guidance." },
        { num: "3", title: "Scheduled Installation", desc: "We remove the old roof, install the new system, and keep your property protected." },
        { num: "4", title: "Final Inspection & Warranty", desc: "A thorough final walkthrough and your warranty documentation handed over." },
      ]}
      faqs={[
        { q: "How much does a full roof replacement cost?", a: "Roof replacement costs depend on home size, roofing material, and local labor rates. Typical residential replacements range from $5,000 to $20,000+. We provide a free, detailed quote before any commitment." },
        { q: "How long does roof replacement take?", a: "Most residential roof replacements are completed in 1–3 days. Larger or more complex projects may take up to a week. We'll provide an accurate timeline during your inspection." },
        { q: "What roofing materials do you offer?", a: "We offer asphalt shingles (3-tab and architectural), metal roofing (standing seam and corrugated), clay and concrete tile, and flat roofing systems including TPO and EPDM." },
        { q: "Should I repair or replace my roof?", a: "If your roof is over 20 years old, has widespread damage, or repair costs exceed 50% of replacement costs, replacement is typically the smarter investment. We give you an honest assessment." },
        { q: "Will a new roof increase my home value?", a: "Yes — a new roof is one of the highest ROI home improvements. It can increase resale value by $10,000–$20,000 and significantly improves curb appeal and energy efficiency." },
      ]}
      related={[
        { label: "Roof Repair", href: "/services/roof-repair", desc: "Fix leaks, shingles & flashing" },
        { label: "Storm Damage & Insurance", href: "/services/storm-damage", desc: "Hail, wind & water damage experts" },
        { label: "Roof Inspection", href: "/services/roof-inspection", desc: "24-hour certified inspections" },
        { label: "Commercial Roofing", href: "/services/commercial-roofing", desc: "TPO, EPDM & metal systems" },
        { label: "New Construction", href: "/services/new-construction", desc: "Built from the ground up" },
      ]}
      slug={seo.slug}
      schema={seo.schema}
      keywords={seo.keywords}
      ctaHeading="Get Your Free Roof Replacement Estimate Today"
      ctaSubtext="No pressure, no obligation. A certified specialist will inspect your roof and walk you through every option — with full transparency on pricing."
    />
  );
}