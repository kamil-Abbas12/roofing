import Image from "next/image";
import Link from "next/link";
import { BLOGS, ContentBlock } from "@/data/blogs";

export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const post = BLOGS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Blog | Top Dog Roofing" };
  }

  return {
    title: post.title,
    description: post.excerpt || post.caption || "Roofing tips and insights",
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

case "table":
  // narrow to table shape to satisfy TypeScript and avoid unreachable duplicate code
  if (!("headers" in block) || !("rows" in block)) return null;

  const tableBlock = block as any;

  return (
    <div key={index} className="mb-8 w-full overflow-x-auto">
      <table className="min-w-[700px] w-full border-collapse border border-black text-left">
        <thead>
          <tr>
            {tableBlock.headers.map((header: string, j: number) => (
              <th
                key={j}
                className="border border-black bg-white px-4 py-3 text-left font-bold text-black whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableBlock.rows.map((row: any[], rowIndex: number) => (
            <tr key={rowIndex}>
              {row.map((cell: any, cellIndex: number) => (
                <td
                  key={cellIndex}
                  className={`border border-black px-4 py-3 text-black align-top ${
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
  );

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
        <div className="mx-auto max-w-3xl px-4 py-40 text-center">
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

        {/* Image */}
        <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-black/5">
          <Image
            src={post.image}
            alt={`Image for ${post.title}`}
            fill
            className="object-cover"
            priority
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
                      className="object-cover transition duration-300 group-hover:scale-105"
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