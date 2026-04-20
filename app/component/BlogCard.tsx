import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blogs";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    // ✅ Wrap in <article> for semantic HTML — each card is a self-contained piece of content
    <article>
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md border border-gray-200 transition hover:-translate-y-1 hover:shadow-xl h-full"
        aria-label={`Read article: ${post.title}`}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            // ✅ Add sizes for better LCP / image optimisation
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>

        <div className="p-4 flex flex-col flex-1">
          {/* ✅ orange-500 on white fails WCAG AA for small text → use orange-600 */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white self-start">
            {/* ✅ Decorative dot — aria-hidden */}
            <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
            {/* ✅ Use <time> for machine-readable dates */}
            <time dateTime={post.date}>{post.date}</time>
          </div>

          {/* ✅ h3 correct — cards appear inside a section with h2 heading */}
          <h3 className="mt-3 line-clamp-2 text-base font-extrabold text-gray-900">
            {post.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-gray-600">
            {post.excerpt}
          </p>

          <div className="mt-3 text-xs font-semibold text-gray-500 mt-auto">
            {/* ✅ Separate spans so screen readers don't mash "Roofing•5 min read" together */}
            <span>{post.category}</span>
            <span aria-hidden="true"> • </span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}