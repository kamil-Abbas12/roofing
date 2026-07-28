import type { Metadata } from "next";
import { BLOGS } from "@/data/blogs";
import BlogCard from "../component/BlogCard";

const BASE_URL = "https://roofing.topdoglead.com";

export const metadata: Metadata = {
  title: "Roofing Blog | Tips, Repairs & Expert Guides",
  description:
    "Browse expert roofing articles covering storm damage repair, roof inspections, material comparisons, maintenance tips, and cost guides from Top Dog Roofing.",
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: "Roofing Blog | Tips, Repairs & Expert Guides",
    description:
      "Expert roofing tips, storm damage guides, and repair advice from Top Dog Roofing.",
    url: `${BASE_URL}/blog`,
    siteName: "Top Dog Roofing",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/roof2.webp`,
        width: 1200,
        height: 630,
        alt: "Top Dog Roofing Blog — expert roofing tips and guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Blog | Tips, Repairs & Expert Guides",
    description:
      "Expert roofing tips, storm damage guides, and repair advice from Top Dog Roofing.",
    images: [`${BASE_URL}/roof2.webp`],
  },
};

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "TopDog Roofing Blog",
  url: `${BASE_URL}/blog`,
  description:
    "Expert roofing tips, storm damage repair guides, inspection advice, and cost breakdowns.",
  blogPost: BLOGS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    description: post.excerpt,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
  ],
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f7efe6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 xl:py-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#0b2b55]/60">
          <ol className="flex items-center gap-2">
            <li><a href="/" className="hover:text-[#0b2b55]">Home</a></li>
            <li aria-hidden="true">/</li>
            <li className="text-[#0b2b55] font-medium">Blog</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Roofing Insights
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-[#0b2b55] md:text-4xl">
            Roofing Blog
          </h1>
          <p className="mt-3 max-w-xl text-sm text-[#0b2b55]/70 leading-relaxed">
            Expert guides on storm damage repair, roof inspections, material
            comparisons, maintenance tips, and cost breakdowns — written for
            homeowners and contractors.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Empty state */}
        {BLOGS.length === 0 && (
          <p className="py-20 text-center text-sm text-[#0b2b55]/50">
            No articles yet — check back soon.
          </p>
        )}
      </div>
    </main>
  );
}