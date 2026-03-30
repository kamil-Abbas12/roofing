import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://roofing.topdoglead.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        // ❌ Block unnecessary or duplicate pages
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/private/",
          "/_next/",
          "/blog/sidebar", // avoid indexing unnecessary page
        ],
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}