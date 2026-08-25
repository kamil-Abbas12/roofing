// src/app/blog/page.tsx
import type { Metadata } from "next";
import { BLOGS } from "@/data/blogs";
import BlogCard from "../component/BlogCard";
import Pagination from "../component/Pagination";

const BASE_URL = "https://roofing.topdoglead.com";
const POSTS_PER_PAGE = 9;

type BlogPageProps = {
  searchParams: { page?: string };
};

function getPageFromParams(pageParam?: string, totalPages: number = 1) {
  const parsed = Number(pageParam);
  if (!Number.isFinite(parsed) || parsed < 1) return 1;
  return Math.min(Math.floor(parsed), totalPages);
}

export function generateMetadata({ searchParams }: BlogPageProps): Metadata {
  const totalPages = Math.max(1, Math.ceil(BLOGS.length / POSTS_PER_PAGE));
  const page = getPageFromParams(searchParams?.page, totalPages);

  const canonical =
    page > 1 ? `${BASE_URL}/blog?page=${page}` : `${BASE_URL}/blog`;

  const title =
    page > 1
      ? `Roofing Blog | Page ${page} | Tips, Repairs & Expert Guides`
      : "Roofing Blog | Tips, Repairs & Expert Guides";

  const description =
    "Browse expert roofing articles covering storm damage repair, roof inspections, material comparisons, maintenance tips, and cost guides from Top Dog Roofing.";

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description:
        "Expert roofing tips, storm damage guides, and repair advice from Top Dog Roofing.",
      url: canonical,
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
      title,
      description:
        "Expert roofing tips, storm damage guides, and repair advice from Top Dog Roofing.",
      images: [`${BASE_URL}/roof2.webp`],
    },
  };
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
  ],
};

export default function BlogPage({ searchParams }: BlogPageProps) {
  const totalPages = Math.max(1, Math.ceil(BLOGS.length / POSTS_PER_PAGE));
  const currentPage = getPageFromParams(searchParams?.page, totalPages);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = BLOGS.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Full blog schema always lists every post — good for SEO/discoverability
  // regardless of which page the crawler lands on.
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
      datePublished: post.isoDate,
      description: post.excerpt,
    })),
  };

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

      {/* Helps search engines understand pagination relationships */}
      {currentPage > 1 && (
        <link
          rel="prev"
          href={
            currentPage - 1 === 1
              ? `${BASE_URL}/blog`
              : `${BASE_URL}/blog?page=${currentPage - 1}`
          }
        />
      )}
      {currentPage < totalPages && (
        <link
          rel="next"
          href={`${BASE_URL}/blog?page=${currentPage + 1}`}
        />
      )}

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
          {paginatedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Empty state */}
        {BLOGS.length === 0 && (
          <p className="py-20 text-center text-sm text-[#0b2b55]/50">
            No articles yet — check back soon.
          </p>
        )}

        {/* Pagination controls */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/blog"
          />
        )}
      </div>
    </main>
  );
}