// app/services/roof-inspection/page.tsx
import { Metadata } from "next";
import { SERVICE_SEO } from "@/lib/seo";
import ServicePageLayout from "@/app/component/ServicePageLayout";

const seo = SERVICE_SEO["roof-inspection"];

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

export default function RoofInspectionPage() {
  return (
    <ServicePageLayout 
      badge="ROOF INSPECTION"
      h1={seo.h1}
      intro="Most roof problems are invisible until they become expensive. Our certified inspectors — backed by drone technology and years of field experience — identify every issue before it becomes a crisis. 24-hour response, detailed written report included."
      heroStats={[
        { value: "24hr", label: "Inspection Response" },
        { value: "50+", label: "Inspection Points" },
        { value: "4.8★", label: "Avg. Rating" },
        { value: "100%", label: "Written Report" },
      ]}
      benefits={[
        { icon: "🚁", title: "Drone Inspection Technology", desc: "We use drone cameras to safely inspect every inch of your roof — including areas that are impossible to reach on foot." },
        { icon: "📋", title: "50-Point Inspection Checklist", desc: "Every inspection covers shingles, flashing, gutters, ventilation, decking, ridgeline, and more." },
        { icon: "📄", title: "Detailed Written Report", desc: "You receive a full written report with photos, findings, and repair priority recommendations." },
        { icon: "🏠", title: "Pre-Purchase Inspections", desc: "Buying a home? Our pre-purchase roof inspection protects you from expensive surprises after closing." },
        { icon: "🌪️", title: "Post-Storm Inspections", desc: "After hail, wind, or heavy rain events, we assess damage quickly to support your insurance claim." },
        { icon: "📅", title: "Annual Maintenance Inspections", desc: "Scheduled annual inspections catch small issues before they become costly repairs or replacements." },
      ]}
      steps={[
        { num: "1", title: "Schedule Online or by Phone", desc: "Book your inspection with a quick call or form submission. Response within hours." },
        { num: "2", title: "Certified Inspector Arrives", desc: "A licensed inspector arrives at your property and conducts a thorough 50-point assessment." },
        { num: "3", title: "Drone & Visual Inspection", desc: "Combined drone footage and hands-on inspection captures every detail of your roof's condition." },
        { num: "4", title: "Report & Recommendations", desc: "You receive a detailed written report with photos and clear repair priority recommendations." },
      ]}
      faqs={[
        { q: "How much does a roof inspection cost?", a: "Many roof inspections are free — especially if you're considering repair or replacement services with us. Standalone third-party inspections typically cost $100–$300. Contact us to confirm pricing for your situation." },
        { q: "How long does a roof inspection take?", a: "Most residential roof inspections take 45 minutes to 2 hours depending on home size, roof complexity, and damage extent. You'll receive your written report the same day." },
        { q: "Do I need a roof inspection before selling my home?", a: "It's highly recommended. A pre-listing roof inspection lets you address issues proactively, prevents surprises during the buyer's inspection, and can be used as a selling point." },
        { q: "How often should I get a roof inspection?", a: "Annual inspections are ideal, especially after storm season. You should also inspect after any significant weather event. If your roof is over 15 years old, bi-annual inspections are recommended." },
        { q: "Can a roof inspection be used for an insurance claim?", a: "Yes — our inspection reports include detailed damage documentation with photos that insurance companies require for claim processing. We provide inspection reports specifically formatted for insurance submissions." },
      ]}
      related={[
        { label: "Roof Repair", href: "/services/roof-repair", desc: "Fix leaks, shingles & flashing" },
        { label: "Roof Replacement", href: "/services/roof-replacement", desc: "Full replacement with premium materials" },
        { label: "Storm Damage & Insurance", href: "/services/storm-damage", desc: "Hail, wind & water damage experts" },
        { label: "Commercial Roofing", href: "/services/commercial-roofing", desc: "TPO, EPDM & metal systems" },
        { label: "New Construction", href: "/services/new-construction", desc: "Built from the ground up" },
      ]}
      slug={seo.slug}
      schema={seo.schema}
      keywords={seo.keywords}
      ctaHeading="Book Your Roof Inspection Today"
      ctaSubtext="Same-day response. Certified inspector. Detailed written report with photos. Know the true condition of your roof before small problems become big ones."
    />
  );
}