import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blogs";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group overflow-hidden rounded-2xl bg-white shadow-md border border-gray-200 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
          <span className="h-2 w-2 rounded-full bg-white" />
          {post.date}
        </div>

        <h3 className="mt-3 line-clamp-2 text-base font-extrabold text-gray-900">
          {post.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {post.excerpt}
        </p>

        <div className="mt-3 text-xs font-semibold text-gray-500">
          {post.category} • {post.readTime}
        </div>
      </div>
    </Link>
  );
}