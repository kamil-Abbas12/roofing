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
      url: `${baseUrl}/blog/sidebar`,
      lastModified: new Date(),
      priority: 0.8,
    },

    // ✅ dynamic blogs
    ...blogUrls,
  ];
}