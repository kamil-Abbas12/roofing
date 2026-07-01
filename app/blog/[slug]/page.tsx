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
    title: `${post.title} | Top Dog Roofing`,
    description: post.excerpt || post.caption || "Roofing tips and insights",
  };
}

function RenderBlock({ block, index }: { block: ContentBlock; index: number }) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="mt-8 mb-3 inline-block bg-yellow-300 px-2 py-1 text-xl font-extrabold text-black"
        >
          {block.text}
        </h2>
      );

    case "subheading":
      return (
        <h3
          key={index}
          className="mt-6 mb-3 text-lg font-extrabold text-[#0b2b55]"
        >
          {block.text}
        </h3>
      );

    case "paragraph":
      return (
        <p key={index} className="mb-4 leading-relaxed text-[#0b2b55]/90">
          {block.text}
        </p>
      );

    case "bullets":
      return (
        <ul key={index} className="mb-4 ml-5 list-disc space-y-1">
          {block.items.map((item, j) => (
            <li key={j} className="leading-relaxed text-[#0b2b55]/90">
              {item.bold && (
                <span className="font-bold text-[#0b2b55]">{item.bold}</span>
              )}
              {item.text}
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div key={index} className="mb-6">
          {/* Desktop table */}
          <div className="hidden overflow-x-auto sm:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr>
                  {block.headers.map((header, j) => (
                    <th
                      key={j}
                      className="border border-emerald-100 bg-emerald-600 px-4 py-3 font-bold text-white"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-emerald-50" : "bg-white"}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`border border-emerald-100 px-4 py-3 align-top text-[#0b2b55]/90 ${
                          cellIndex === 0 ? "font-bold text-[#0b2b55]" : ""
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

          {/* Mobile stacked cards */}
          <div className="space-y-4 sm:hidden">
            {block.rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-sm"
              >
                <div className="bg-emerald-600 px-4 py-3 text-sm font-bold text-white">
                  {row[0]}
                </div>

                <div className="border-t border-emerald-100 px-4 py-3">
                  <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.08em] text-emerald-600">
                    {block.mobileLabels?.[0] || block.headers[1]}
                  </div>
                  <div className="text-sm leading-relaxed text-[#0b2b55]/90">
                    {row[1]}
                  </div>
                </div>

                <div className="border-t border-emerald-100 px-4 py-3">
                  <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.08em] text-emerald-600">
                    {block.mobileLabels?.[1] || block.headers[2]}
                  </div>
                  <div className="text-sm leading-relaxed text-[#0b2b55]/90">
                    {row[2]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "pro_tip":
      return (
        <p key={index} className="mb-4 leading-relaxed text-[#0b2b55]/90">
          <span className="font-bold text-[#0b2b55]">Pro Tip:</span>{" "}
          {block.text}
        </p>
      );

    case "closing":
      return (
        <p
          key={index}
          className="mt-8 text-base font-bold italic leading-relaxed text-[#0b2b55]"
        >
          {block.text}
        </p>
      );

    default:
      return null;
  }
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
          <h1 className="text-2xl font-extrabold text-[#0b2b55]">
            Post not found
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
        <p className="mt-6 text-center text-base italic leading-relaxed text-[#0b2b55]/90">
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

        {/* Navigation */}
        <nav className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/blog"
            aria-label="Go to blog grid page"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b2b55] ring-1 ring-black/5"
          >
            View Blog Grid
          </Link>

          <Link
            href="/blog/sidebar"
            aria-label="Go to blog sidebar page"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b2b55] ring-1 ring-black/5"
          >
            View Blog Sidebar
          </Link>
        </nav>

      </article>
    </main>
  );
}