// app/services/roof-repair/page.tsx
import { Metadata } from "next";
import { SERVICE_SEO } from "@/lib/seo";
import ServicePageLayout from "@/app/component/ServicePageLayout";

const seo = SERVICE_SEO["roof-repair"];

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

export default function RoofRepairPage() {
  return (
    <ServicePageLayout
      badge="ROOF REPAIR"
      h1={seo.h1}
      intro="A small leak today is a major structural problem tomorrow. Our certified roofing specialists diagnose and fix leaks, damaged shingles, flashing failures, and structural issues fast — with same-day emergency response available when you need it most."
      heroStats={[
        { value: "Same-Day", label: "Emergency Response" },
        { value: "1,000+", label: "Repairs Completed" },
        { value: "4.8★", label: "Customer Rating" },
        { value: "Free", label: "Repair Estimates" },
      ]}
      benefits={[
        { icon: "💧", title: "Leak Detection & Repair", desc: "We find the true source of leaks — not just the visible symptoms — and fix it right the first time." },
        { icon: "🏚️", title: "Shingle & Flashing Repair", desc: "Damaged, missing, or curling shingles and failed flashing around chimneys, vents, and valleys, repaired to spec." },
        { icon: "🚨", title: "Same-Day Emergency Service", desc: "Storm damage or an active leak can't wait. We offer same-day emergency repair response in most areas." },
        { icon: "🔨", title: "Structural Repairs", desc: "From sagging decking to damaged trusses, we handle repairs that go beyond the surface." },
        { icon: "📸", title: "Photo-Documented Work", desc: "Every repair is documented with before-and-after photos, so you know exactly what was fixed." },
        { icon: "🛡️", title: "Workmanship Warranty", desc: "All repairs are backed by a workmanship warranty for lasting peace of mind." },
      ]}
      steps={[
        { num: "1", title: "Call or Request an Estimate", desc: "Reach out by phone or online form — emergency requests are prioritized immediately." },
        { num: "2", title: "On-Site Diagnosis", desc: "A specialist inspects the damage, identifies the root cause, and explains your repair options." },
        { num: "3", title: "Repair Completed", desc: "Repairs are completed efficiently using quality materials matched to your existing roof where possible." },
        { num: "4", title: "Final Walkthrough", desc: "We walk you through the completed repair and provide documentation of the work performed." },
      ]}
      faqs={[
        { q: "How much does roof repair cost?", a: "Most minor repairs range from a few hundred dollars, while larger structural repairs cost more depending on scope. We provide a free, no-obligation estimate after inspecting the damage." },
        { q: "How quickly can you repair a roof leak?", a: "For active leaks and storm damage, we offer same-day emergency response in most service areas. Non-urgent repairs are typically scheduled within a few days." },
        { q: "Can you repair just part of my roof instead of replacing it?", a: "In most cases, yes. Repair is usually the right call for isolated damage. We'll always recommend replacement only when repair won't reliably solve the underlying problem." },
        { q: "Will my homeowner's insurance cover roof repair?", a: "If the damage was caused by a covered event like a storm, hail, or wind, it's often covered. We can help document the damage to support your insurance claim." },
        { q: "How do I know if I need a repair or a full replacement?", a: "Our inspection identifies the extent and age of the damage. Isolated issues on a roof with useful life remaining are usually repairable; widespread damage or an aging roof may call for replacement — we'll give you an honest recommendation either way." },
      ]}
      related={[
        { label: "Roof Replacement", href: "/services/roof-replacement", desc: "Full replacement with premium materials" },
        { label: "Storm Damage & Insurance", href: "/services/storm-damage", desc: "Hail, wind & water damage experts" },
        { label: "Commercial Roofing", href: "/services/commercial-roofing", desc: "TPO, EPDM & metal systems" },
        { label: "Roof Inspection", href: "/services/roof-inspection", desc: "24-hour certified inspections" },
        { label: "New Construction", href: "/services/new-construction", desc: "Built from the ground up" },
      ]}
      slug={seo.slug}
      schema={seo.schema}
      keywords={seo.keywords}
      ctaHeading="Get Your Roof Repaired by a Certified Specialist"
      ctaSubtext="Free estimate. Same-day emergency response available. Don't let a small leak become a costly problem."
    />
  );
}