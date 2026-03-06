import Link from "next/link";
import { BLOGS, CATEGORIES } from "@/data/blogs";
import BlogCard from "@/app/component/BlogCard";

export default function BlogSidebarPage() {
  return (
<main className="min-h-screen bg-[#f7efe6] pt-28">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 lg:grid-cols-12">
        <aside className="lg:col-span-4">
<div className="sticky top-28 rounded-2xl bg-white/80 backdrop-blur p-5 shadow-md ring-1 ring-black/5">
            <h2 className="text-lg font-extrabold text-[#0b2b55]">
              Categories
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-[#f7efe6] px-3 py-1 text-xs font-semibold text-[#0b2b55]"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-full bg-[#ff7a1a] px-4 py-2 text-sm font-semibold text-white"
              >
                Go to Blog Grid
              </Link>
            </div>
          </div>
        </aside>

        <section className="lg:col-span-8">
          <h1 className="text-3xl font-extrabold text-[#0b2b55]">
            Blog With Sidebar
          </h1>
          <p className="mt-2 text-sm text-[#0b2b55]/70">
            Same content, different layout.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-20">
            {BLOGS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
