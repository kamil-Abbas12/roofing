import Link from "next/link";
import { BLOGS, CATEGORIES } from "@/data/blogs";
import BlogCard from "@/app/component/BlogCard";

export const metadata = {
  title: "Roofing Blog with Categories | Top Dog Roofing",
  description: "Explore roofing articles with categories.",
  alternates: {
    canonical: "https://roofing.topdoglead.com/blog",
  },
};

export default function BlogSidebarPage() {
  return (
    <main
      className="min-h-screen bg-[#f7efe6] pt-28"
      role="main"
      aria-label="Blog with categories"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 lg:grid-cols-12">
        
        {/* SIDEBAR */}
        <aside
          className="lg:col-span-4"
          aria-label="Blog categories"
        >
          <div className="sticky top-28 rounded-2xl bg-white/80 backdrop-blur p-5 shadow-md ring-1 ring-black/5">
            
            <h2 className="text-lg font-extrabold text-[#0b2b55]">
              Categories
            </h2>

            {/* FIX: use nav for categories */}
            <nav className="mt-4 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <Link
                  key={c}
                  href={`/blog?category=${c.toLowerCase()}`}
                  aria-label={`View ${c} articles`}
                  className="rounded-full bg-[#f7efe6] px-3 py-1 text-xs font-semibold text-[#0b2b55] hover:bg-[#e6dccf]"
                >
                  {c}
                </Link>
              ))}
            </nav>

            {/* FIX: better link text */}
            <div className="mt-6">
              <Link
                href="/blog"
                aria-label="Go to blog grid page"
                className="inline-flex items-center justify-center rounded-full bg-[#ff7a1a] px-4 py-2 text-sm font-semibold text-white"
              >
                View All Blog Posts
              </Link>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <section
          className="lg:col-span-8"
          aria-label="Blog posts"
        >
          <header>
            <h1 className="text-3xl font-extrabold text-[#0b2b55]">
              Roofing Blog
            </h1>

            <p className="mt-2 text-sm text-[#0b2b55]/80">
              Explore roofing tips, repair guides, and expert advice.
            </p>
          </header>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-20">
            {BLOGS.map((post) => (
              <article key={post.slug}>
                <BlogCard post={post} />
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}