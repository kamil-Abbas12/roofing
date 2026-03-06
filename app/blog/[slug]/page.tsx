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
      <main className="min-h-screen  bg-[#f7efe6] mt-20">
        <div className="mx-auto max-w-3xl px-4 py-5 md:py-80">
          <h1 className="text-2xl font-extrabold text-[#0b2b55]">
            Post not found
          </h1>
          <Link className="mt-4 inline-block text-[#ff7a1a]" href="/blog">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7efe6]">
      <article className="mx-auto max-w-3xl px-4 py-20 ">
        <Link href="/blog" className="text-sm font-semibold text-[#ff7a1a]">
          ← Back to Blog
        </Link>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#0b2b55]">
          {post.title}
        </h1>

        <div className="mt-3 text-sm text-[#0b2b55]/70">
          {post.date} • {post.category} • {post.readTime}
        </div>

        <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-black/5">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        <div className="prose prose-slate mt-8 max-w-none prose-headings:text-[#0b2b55] prose-p:text-[#0b2b55]/80">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/blog"
            className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#0b2b55] ring-1 ring-black/5"
          >
            Blog Grid
          </Link>
          <Link
            href="/blog/sidebar"
            className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#0b2b55] ring-1 ring-black/5"
          >
            Blog Sidebar
          </Link>
        </div>
      </article>
    </main>
  );
}
