import Image from "next/image";
import Link from "next/link";
import { BLOGS } from "@/data/blogs";

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
        <section className="prose prose-slate mt-8 max-w-none text-[#0b2b55]/90">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
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