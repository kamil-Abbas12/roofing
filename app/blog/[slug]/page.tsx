import Image from "next/image";
import Link from "next/link";
import { BLOGS, ContentBlock } from "@/data/blogs";
import { SITE_URL } from "@/lib/seo";

export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const post = BLOGS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Blog | Top Dog Roofing" };
  }

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const title = post.metaTitle || post.title;
  const description =
    post.metaDescription || post.excerpt || post.caption || "Roofing tips and insights";

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "TopDog Roofing",
      images: [{ url: `${SITE_URL}${post.image}`, width: 1200, height: 630, alt: post.title }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${post.image}`],
    },
  };
}

function RenderBlock({ block, index }: { block: ContentBlock; index: number }) {
  switch (block.type) {
   case "heading":
  return (
    <h2
      key={index}
      className="mt-8 mb-4 text-3xl font-bold text-black"
    >
      {block.text}
    </h2>
  );

   case "subheading":
  return (
    <h3
      key={index}
      className="mt-6 mb-3 text-2xl font-bold text-black"
    >
      {block.text}
    </h3>
  );

   case "paragraph":
  return (
    <p key={index} className="mb-5 leading-8 text-black">
      {block.text}
    </p>
  );

    case "bullets":
  return (
    <ul key={index} className="mb-5 ml-6 list-disc space-y-2">
      {block.items.map((item, j) => (
        <li key={j} className="leading-8 text-black">
          {item.bold && (
            <span className="font-bold text-black">
              {item.bold}
            </span>
          )}
          {item.text}
        </li>
      ))}
    </ul>
  );

case "table": {
      // narrow to table shape to satisfy TypeScript
      if (!("headers" in block) || !("rows" in block)) return null;

      const tableBlock = block as any;
      const headers: string[] = tableBlock.headers;
      const rows: any[][] = tableBlock.rows;

      return (
        <div key={index} className="mb-8 w-full">
          {/* Desktop / tablet: real <table> for accessibility + SEO */}
          <div className="hidden overflow-x-auto rounded-lg sm:block">
            <table className="w-full table-fixed border-collapse border border-black text-left">
              <thead>
                <tr>
                  {headers.map((header, j) => (
                    <th
                      key={j}
                      className="border border-black bg-white px-4 py-3 text-left font-bold text-black"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`border border-black px-4 py-3 align-top text-black ${
                          cellIndex === 0 ? "font-bold" : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards, no horizontal scrolling */}
          <div className="flex flex-col gap-4 sm:hidden">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="rounded-xl border border-black/10 bg-white p-4 shadow-sm"
              >
                <p className="mb-2 text-base font-bold text-black">
                  {row[0]}
                </p>
                <dl className="space-y-2">
                  {row.slice(1).map((cell, cellIndex) => (
                    <div key={cellIndex} className="flex flex-col">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-black/60">
                        {headers[cellIndex + 1]}
                      </dt>
                      <dd className="text-sm leading-6 text-black">{cell}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      );
    }
  case "pro_tip":
  return (
    <p key={index} className="mb-5 leading-8 text-black">
      <span className="font-bold">Pro Tip:</span> {block.text}
    </p>
  );
   case "closing":
  return (
    <p
      key={index}
      className="mt-8 text-lg font-bold italic leading-8 text-black"
    >
      {block.text}
    </p>
  );
    default:
      return null;
  }
}

function getRelatedPosts(currentSlug: string, category: string, count = 3) {
  // Prefer same-category posts first, then fill with the rest, excluding the current post
  const others = BLOGS.filter((p) => p.slug !== currentSlug);
  const sameCategory = others.filter((p) => p.category === category);
  const rest = others.filter((p) => p.category !== category);
  return [...sameCategory, ...rest].slice(0, count);
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOGS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-[#f7efe6] mt-20" role="main">
        <div className="mx-auto max-w-4xl px-4 py-40 text-center">
<h1 className="mt-4 text-4xl font-bold leading-tight text-black">            Post not found
          </h1>
          <Link
            href="/blog"
            aria-label="Go back to blog page"
            className="mt-4 inline-block text-[#ff7a1a]"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category);

  return (
    <main className="min-h-screen bg-[#f7efe6]" role="main">
      <article className="mx-auto max-w-3xl px-4 py-20">

        {/* Header */}
        <header>
          <Link
            href="/blog"
            aria-label="Go back to blog list"
            className="text-sm font-semibold text-blue-600"
          >
            ← Back to Blog
          </Link>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#0b2b55]">
            {post.title}
          </h1>

          <div className="mt-3 text-sm text-[#0b2b55]/80">
            {post.date} • {post.category} • {post.readTime}
          </div>
        </header>

        {/* Caption */}
<p className="mt-6 text-center text-base italic leading-8 text-black">
            {post.caption}
        </p>

        {/* Image — this is the LCP element, so it must load first with no lazy-loading */}
        <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-black/5">
          <Image
            src={post.image}
            alt={`Image for ${post.title}`}
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Content */}
        <section className="mt-8 max-w-none">
          {post.content.map((block, i) => (
            <RenderBlock key={i} block={block} index={i} />
          ))}
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="mt-14 border-t border-black/10 pt-10">
            <h2 className="mb-6 text-2xl font-bold text-[#0b2b55]">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  aria-label={`Read more: ${related.title}`}
                  className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 transition hover:ring-black/15"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={related.image}
                      alt={`Image for ${related.title}`}
                      fill
                      loading="lazy"
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 300px"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                      {related.category}
                    </p>
                    <h3 className="mt-1 text-sm font-bold leading-snug text-[#0b2b55]">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Navigation */}
        <nav className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/blog"
            aria-label="Go to blog grid page"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b2b55] ring-1 ring-black/5"
          >
            View Blog Grid
          </Link>
        </nav>

      </article>
    </main>
  );
}