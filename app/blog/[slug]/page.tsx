import Image from "next/image";
import Link from "next/link";
import { BLOGS } from "@/data/blogs";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOGS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-[#f7efe6] mt-20">
        <div className="mx-auto max-w-3xl px-4 py-40 text-center">
          <h1 className="text-2xl font-extrabold text-[#0b2b55]">
            Post not found
          </h1>

          <Link
            href="/blog"
            className="mt-4 inline-block text-[#ff7a1a]"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7efe6]">
      <article className="mx-auto max-w-3xl px-4 py-20">

        {/* Back */}
        <Link
          href="/blog"
          className="text-sm font-semibold text-[#ff7a1a]"
        >
          ← Back to Blog
        </Link>

        {/* Title */}
        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#0b2b55]">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="mt-3 text-sm text-[#0b2b55]/70">
          {post.date} • {post.category} • {post.readTime}
        </div>

        {/* Caption BEFORE image */}
        <p className="mt-6 text-center text-base italic leading-relaxed text-[#0b2b55]/80">
          {post.caption}
        </p>

        {/* Blog Image */}
        <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-black/5">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Blog Content */}
        <div className="prose prose-slate mt-8 max-w-none text-[#0b2b55]/90">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/blog"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b2b55] ring-1 ring-black/5"
          >
            Blog Grid
          </Link>

          <Link
            href="/blog/sidebar"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b2b55] ring-1 ring-black/5"
          >
            Blog Sidebar
          </Link>
        </div>

      </article>
    </main>
  );
}