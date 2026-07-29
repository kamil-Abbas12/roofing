import { MetadataRoute } from 'next'
import { BLOGS } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://roofing.topdoglead.com";

  // ✅ dynamic blog URLs
  const blogUrls = BLOGS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  // ✅ service page URLs
  const serviceUrls = [
    "roof-repair",
    "roof-replacement",
    "storm-damage",
    "commercial-roofing",
    "roof-inspection",
    "new-construction",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    priority: 0.85,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      priority: 0.9,
    },
  
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      priority: 0.9,
    },

    // ✅ service pages
    ...serviceUrls,

    // ✅ dynamic blogs
    ...blogUrls,
  ];
}