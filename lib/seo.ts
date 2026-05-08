// lib/seo.ts — Centralized SEO metadata for all service pages
// Used by every page's generateMetadata() export

export const SITE_URL = "https://roofing.topdoglead.com";
export const SITE_NAME = "TopDog Roofing";
export const PHONE = "+18669644568";
export const PHONE_DISPLAY = "1-866-964-4568";
export const EMAIL = "info@topdoglead.com";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

// ─── Service page SEO data ────────────────────────────────────────────────────
export const SERVICE_SEO: Record<
  string,
  {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    h1: string;
    canonical: string;
    ogImage: string;
    schema: object;
  }
> = {
  "roof-repair": {
    slug: "roof-repair",
    title: "Roof Repair",
    metaTitle: "Roof Repair Services | Fast & Affordable | TopDog Roofing",
    metaDescription:
      "Professional roof repair services for leaks, damaged shingles, flashing, and more. Same-day inspections available. Trusted by 1,000+ homeowners. Call now!",
    keywords: [
      "roof repair",
      "roof leak repair",
      "emergency roof repair",
      "shingle repair",
      "roof repair near me",
      "residential roof repair",
      "flat roof repair",
      "roof repair cost",
    ],
    h1: "Professional Roof Repair Services — Fast, Reliable & Affordable",
    canonical: `${SITE_URL}/services/roof-repair`,
    ogImage: `${SITE_URL}/og-roof-repair.jpg`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Roof Repair",
      provider: {
        "@type": "RoofingContractor",
        name: SITE_NAME,
        url: SITE_URL,
        telephone: PHONE,
        email: EMAIL,
      },
      description:
        "Professional roof repair services including leak repair, shingle replacement, flashing repair, and emergency roof patching.",
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: "Roof Repair",
      url: `${SITE_URL}/services/roof-repair`,
    },
  },

  "roof-replacement": {
    slug: "roof-replacement",
    title: "Roof Replacement",
    metaTitle: "Full Roof Replacement | Licensed Roofers | TopDog Roofing",
    metaDescription:
      "Complete roof replacement with premium materials. Asphalt, metal, tile & more. Free estimates, fast installation, backed by warranty. Get a quote today!",
    keywords: [
      "roof replacement",
      "new roof installation",
      "full roof replacement",
      "roof replacement cost",
      "asphalt shingle replacement",
      "metal roof replacement",
      "roof replacement near me",
    ],
    h1: "Complete Roof Replacement — Premium Materials, Expert Installation",
    canonical: `${SITE_URL}/services/roof-replacement`,
    ogImage: `${SITE_URL}/og-roof-replacement.jpg`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Roof Replacement",
      provider: {
        "@type": "RoofingContractor",
        name: SITE_NAME,
        url: SITE_URL,
        telephone: PHONE,
      },
      description:
        "Full roof replacement services using premium asphalt, metal, tile, and flat roofing materials with professional installation.",
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: "Roof Replacement",
      url: `${SITE_URL}/services/roof-replacement`,
    },
  },

  "storm-damage": {
    slug: "storm-damage",
    title: "Storm Damage & Insurance Claims",
    metaTitle: "Storm Damage Roof Repair & Insurance Claims | TopDog Roofing",
    metaDescription:
      "Storm-damaged roof? We handle the entire insurance claims process for you. Hail, wind & water damage experts. Fast response, maximum claim approval. Call now!",
    keywords: [
      "storm damage roof repair",
      "hail damage roof",
      "wind damage roof",
      "roof insurance claim",
      "storm roof repair near me",
      "insurance claim roofing",
      "hail roof damage repair",
    ],
    h1: "Storm Damage Roof Repair & Insurance Claim Specialists",
    canonical: `${SITE_URL}/services/storm-damage`,
    ogImage: `${SITE_URL}/og-storm-damage.jpg`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Storm Damage Roof Repair",
      provider: {
        "@type": "RoofingContractor",
        name: SITE_NAME,
        url: SITE_URL,
        telephone: PHONE,
      },
      description:
        "Expert storm damage roof repair and insurance claims assistance for hail, wind, and water damage.",
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: "Storm Damage Repair",
      url: `${SITE_URL}/services/storm-damage`,
    },
  },

  "commercial-roofing": {
    slug: "commercial-roofing",
    title: "Commercial Roofing",
    metaTitle: "Commercial Roofing Services | Flat & Low Slope | TopDog Roofing",
    metaDescription:
      "Commercial roofing for offices, warehouses & retail. TPO, EPDM, modified bitumen & metal roofing systems. Minimal downtime, maximum durability. Free estimate!",
    keywords: [
      "commercial roofing",
      "commercial roof repair",
      "commercial roof replacement",
      "flat roof commercial",
      "TPO roofing",
      "EPDM roofing",
      "commercial roofing contractor",
      "industrial roofing",
    ],
    h1: "Commercial Roofing Services — Built for Business, Built to Last",
    canonical: `${SITE_URL}/services/commercial-roofing`,
    ogImage: `${SITE_URL}/og-commercial-roofing.jpg`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Commercial Roofing",
      provider: {
        "@type": "RoofingContractor",
        name: SITE_NAME,
        url: SITE_URL,
        telephone: PHONE,
      },
      description:
        "Full-service commercial roofing including TPO, EPDM, metal, and modified bitumen systems for businesses of all sizes.",
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: "Commercial Roofing",
      url: `${SITE_URL}/services/commercial-roofing`,
    },
  },

  "roof-inspection": {
    slug: "roof-inspection",
    title: "Roof Inspection",
    metaTitle: "Professional Roof Inspection | 24-Hour Response | TopDog Roofing",
    metaDescription:
      "Certified roof inspection services with same-day response. Detailed reports, drone inspections, pre-purchase & post-storm inspections available. Book online!",
    keywords: [
      "best roofing websites",
      "top 10 roofing websites",
      "roof inspection",
      "roof inspection near me",
      "free roof inspection",
      "drone roof inspection",
      "pre-purchase roof inspection",
      "post storm roof inspection",
      "certified roof inspector",
    ],
    h1: "Certified Roof Inspection Services — Same-Day Response Available",
    canonical: `${SITE_URL}/services/roof-inspection`,
    ogImage: `${SITE_URL}/og-roof-inspection.jpg`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Roof Inspection",
      provider: {
        "@type": "RoofingContractor",
        name: SITE_NAME,
        url: SITE_URL,
        telephone: PHONE,
      },
      description:
        "Professional roof inspection services including drone inspections, pre-purchase inspections, and post-storm assessments.",
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: "Roof Inspection",
      url: `${SITE_URL}/services/roof-inspection`,
    },
  },

  "new-construction": {
    slug: "new-construction",
    title: "New Construction Roofing",
    metaTitle: "New Construction Roofing | Custom Install | TopDog Roofing",
    metaDescription:
      "New construction roofing for builders & homeowners. All materials available. On-time installation, code compliant, warranty backed. Get your free quote today!",
    keywords: [
      "new construction roofing",
      "new build roof installation",
      "residential new construction roofing",
      "custom roofing new build",
      "new home roof installation",
      "construction roofing contractor",
    ],
    h1: "New Construction Roofing — Precision Built From the Ground Up",
    canonical: `${SITE_URL}/services/new-construction`,
    ogImage: `${SITE_URL}/og-new-construction.jpg`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "New Construction Roofing",
      provider: {
        "@type": "RoofingContractor",
        name: SITE_NAME,
        url: SITE_URL,
        telephone: PHONE,
      },
      description:
        "Expert new construction roofing services for residential and commercial builds with all materials available.",
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: "New Construction Roofing",
      url: `${SITE_URL}/services/new-construction`,
    },
  },
};