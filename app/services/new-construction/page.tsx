// app/services/new-construction/page.tsx
import { Metadata } from "next";
import { SERVICE_SEO } from "@/lib/seo";
import ServicePageLayout from "@/app/component/ServicePageLayout";

const seo = SERVICE_SEO["new-construction"];

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

export default function NewConstructionPage() {
  return (
    <ServicePageLayout
      badge="NEW CONSTRUCTION ROOFING"
      h1={seo.h1}
      intro="Building a new home or commercial property? Start with a roof that's built to last. Our certified contractors work alongside builders and homeowners from the framing stage through final inspection — on schedule, on budget, fully code-compliant."
      heroStats={[
        { value: "150+", label: "New Builds Completed" },
        { value: "On Time", label: "Project Delivery" },
        { value: "4.8★", label: "Builder Satisfaction" },
        { value: "100%", label: "Code Compliant" },
      ]}
      benefits={[
        { icon: "🏗️", title: "Builder-Friendly Scheduling", desc: "We coordinate with your build schedule and show up when we're supposed to — no delays to your project timeline." },
        { icon: "📐", title: "All Roof Styles & Pitches", desc: "Gabled, hipped, shed, mansard, flat — we install every roof style on any pitch with precision." },
        { icon: "🛡️", title: "Code-Compliant Installation", desc: "Every installation meets or exceeds local building codes and passes final inspection the first time." },
        { icon: "🔧", title: "Underlayment & Decking", desc: "We handle the complete roofing system — decking, underlayment, insulation, and finish material." },
        { icon: "📋", title: "Full Documentation", desc: "Complete installation documentation provided for building permits, warranties, and future reference." },
        { icon: "🤝", title: "Long-Term Builder Partnerships", desc: "We work with builders on multiple projects with consistent quality, competitive pricing, and reliable scheduling." },
      ]}
      steps={[
        { num: "1", title: "Project Consultation", desc: "We review your architectural plans and discuss material choices, timeline, and budget." },
        { num: "2", title: "Material Selection", desc: "Choose from our full range of roofing materials suited to your design and climate." },
        { num: "3", title: "Scheduled Installation", desc: "We arrive on schedule at the right phase of construction and complete installation efficiently." },
        { num: "4", title: "Inspection & Handover", desc: "Final inspection confirms code compliance. Full warranty and documentation provided." },
      ]}
      faqs={[
        { q: "When in the construction process do you install the roof?", a: "We install after the roof deck (sheathing) is complete and the framing has passed inspection. We can also install the decking if needed. We coordinate directly with your general contractor to hit the right window." },
        { q: "What roofing materials are best for new construction?", a: "Architectural asphalt shingles are the most popular choice for residential new construction due to their cost-performance ratio. Metal roofing is growing rapidly for its longevity. We'll recommend the best option for your design, climate, and budget." },
        { q: "Do you work directly with homeowners or only builders?", a: "Both. We work with custom home builders, general contractors, and homeowners building their own homes. Whether it's one house or an entire subdivision, we can handle the project." },
        { q: "Can you match roofing to a specific architectural style?", a: "Absolutely. We stock and source materials for every architectural style from modern farmhouse to Spanish colonial to ultra-contemporary. Share your design plans and we'll find the perfect match." },
        { q: "What warranties come with new construction roofing?", a: "New construction installations include manufacturer material warranties (typically 25–50 years depending on material) plus our workmanship warranty. Documentation is provided at project completion." },
      ]}
      related={[
        { label: "Roof Repair", href: "/services/roof-repair", desc: "Fix leaks, shingles & flashing" },
        { label: "Roof Replacement", href: "/services/roof-replacement", desc: "Full replacement with premium materials" },
        { label: "Storm Damage & Insurance", href: "/services/storm-damage", desc: "Hail, wind & water damage experts" },
        { label: "Commercial Roofing", href: "/services/commercial-roofing", desc: "TPO, EPDM & metal systems" },
        { label: "Roof Inspection", href: "/services/roof-inspection", desc: "24-hour certified inspections" },
      ]}
      slug={seo.slug}
      schema={seo.schema}
      keywords={seo.keywords}
      ctaHeading="Building Something New? Start with the Best Roof."
      ctaSubtext="Talk to a certified new construction roofing specialist. We'll work with your timeline, your budget, and your builder to deliver a roof that lasts a lifetime."
    />
  );
}