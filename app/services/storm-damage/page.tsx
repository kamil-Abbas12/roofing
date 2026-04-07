// app/services/storm-damage/page.tsx
import { Metadata } from "next";
import { SERVICE_SEO } from "@/lib/seo";
import ServicePageLayout from "@/app/component/ServicePageLayout";

const seo = SERVICE_SEO["storm-damage"];

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

export default function StormDamagePage() {
  return (
    <ServicePageLayout
      badge="STORM DAMAGE & INSURANCE"
      h1={seo.h1}
      intro="After a storm, every hour counts. We dispatch certified inspectors fast, document all damage thoroughly, and guide you through the insurance claims process from start to finish — so you get the maximum payout you're entitled to."
      heroStats={[
        { value: "24hr", label: "Emergency Response" },
        { value: "98%", label: "Claim Approval Rate" },
        { value: "4.8★", label: "Avg. Customer Rating" },
        { value: "$0", label: "Out-of-Pocket Target" },
      ]}
      benefits={[
        { icon: "🌪️", title: "Hail & Wind Damage Experts", desc: "We specialize in storm damage assessment — identifying hail hits, wind-lifted shingles, and structural stress that untrained eyes miss." },
        { icon: "📸", title: "Detailed Damage Documentation", desc: "Full photo and drone documentation of all damage to support a strong insurance claim." },
        { icon: "🤝", title: "We Handle the Insurance Company", desc: "Our team works directly with your insurer to fight for maximum claim approval. We speak their language." },
        { icon: "⚡", title: "Emergency Tarping Service", desc: "Immediate temporary protection applied to your roof to prevent further water intrusion while the claim is processed." },
        { icon: "🔧", title: "Full Repair or Replacement", desc: "Once the claim is approved, we complete the full repair or replacement — on time and within your approved budget." },
        { icon: "📋", title: "Supplement Claims Support", desc: "If your initial claim is underpaid, we identify missing items and file a supplement claim on your behalf." },
      ]}
      steps={[
        { num: "1", title: "Emergency Call", desc: "Call us immediately after storm damage. We respond within 24 hours for an inspection." },
        { num: "2", title: "Damage Inspection & Docs", desc: "Certified inspector documents all damage with photos, drone footage, and a written report." },
        { num: "3", title: "Insurance Claim Filed", desc: "We submit a comprehensive claim package to your insurer and advocate on your behalf." },
        { num: "4", title: "Repair & Restoration", desc: "After approval, we complete the full roof repair or replacement with premium materials." },
      ]}
      faqs={[
        { q: "Does homeowner's insurance cover storm damage?", a: "Yes — most standard homeowner's insurance policies cover storm damage caused by hail, wind, lightning, and falling debris. The key is documenting damage properly and filing quickly. We help with both." },
        { q: "How soon after a storm should I call?", a: "As soon as possible. Most insurance policies have a filing deadline (often 1 year), and delays allow insurers to attribute damage to wear-and-tear instead of storm events. Call us within 48 hours of a storm." },
        { q: "Will filing a storm damage claim raise my insurance premium?", a: "A single weather-related claim typically doesn't raise premiums as it's classified as an 'Act of God.' However, multiple claims can. We'll advise you on whether filing makes financial sense in your situation." },
        { q: "What if my insurance company denies my claim?", a: "Don't give up. Claim denials are often based on inadequate documentation. We can re-inspect, provide additional evidence, and file a supplement or appeal claim. Our approval rate is extremely high." },
        { q: "How long does the insurance claims process take?", a: "Most claims are processed within 2–6 weeks. Emergency repairs to prevent further damage can begin immediately after inspection. We keep you informed at every step." },
      ]}
      related={[
        { label: "Roof Repair", href: "/services/roof-repair", desc: "Fix leaks, shingles & flashing" },
        { label: "Roof Replacement", href: "/services/roof-replacement", desc: "Full replacement with premium materials" },
        { label: "Roof Inspection", href: "/services/roof-inspection", desc: "24-hour certified inspections" },
        { label: "Commercial Roofing", href: "/services/commercial-roofing", desc: "TPO, EPDM & metal systems" },
        { label: "New Construction", href: "/services/new-construction", desc: "Built from the ground up" },
      ]}
      slug={seo.slug}
      schema={seo.schema}
      keywords={seo.keywords}
      ctaHeading="Storm Damage? Don't Wait — Call Now."
      ctaSubtext="Every day you wait, the damage gets worse and your claim gets harder. Our team responds fast, documents everything, and fights for your full insurance payout."
    />
  );
}