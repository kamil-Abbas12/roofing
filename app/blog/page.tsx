import { BLOGS } from "@/data/blogs";
import BlogCard from "../component/BlogCard";

export const metadata = {
  title: "Roofing Blog | Tips, Repairs & Guides",
  description: "Browse roofing tips, storm damage repair guides, and expert advice.",
};

export default function BlogGridPage() {
  return (
    <main className="min-h-screen bg-[#f7efe6]">
      <div className="mx-auto max-w-6xl px-4 py-25 xl:py-30">
        <h1 className="text-3xl font-extrabold text-[#0b2b55]">Roofing Blog</h1>
        <p className="mt-2 text-sm text-[#0b2b55]/70">
          Browse the latest roofing articles, inspections tips, and repair guides.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
