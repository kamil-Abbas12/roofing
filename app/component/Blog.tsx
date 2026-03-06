"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BLOGS } from "@/data/blogs";

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 0 1 .02-1.06L10.94 10 7.23 6.29a.75.75 0 1 1 1.06-1.06l4.24 4.24a.75.75 0 0 1 0 1.06l-4.24 4.24a.75.75 0 0 1-1.08 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Blog() {
  const posts = useMemo(() => BLOGS, []);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % posts.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [posts.length]);

  const featured = posts[active];
  const sidePosts = posts
    .map((p, idx) => ({ p, idx }))
    .filter(({ idx }) => idx !== active)
    .slice(0, 3)
    .map(({ p }) => p);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 py-14">
      <div className="mx-auto w-full max-w-6xl px-4">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-4">

          <h2 className="animate-fadeUp text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Roofing Tips & Insights <br className="hidden sm:block" />
            From Industry Experts
          </h2>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            View All
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20">
              <ChevronRightIcon className="h-4 w-4" />
            </span>
          </Link>

        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

          {/* Left big image */}
          <Link
            href={`/blog/${featured.slug}`}
            className="relative overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 lg:col-span-6"
          >

            <div className="relative aspect-[4/5] w-full">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />

            <div className="absolute bottom-4 left-4 right-4">

              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                {featured.date}
              </div>

              <h3 className="mt-2 text-lg font-extrabold text-white drop-shadow sm:text-xl">
                {featured.title}
              </h3>

            </div>
          </Link>

          {/* Right section */}
          <div className="lg:col-span-6">

            {/* Featured card */}
            <Link
              key={featured.slug}
              href={`/blog/${featured.slug}`}
              className="block animate-slideUpFade rounded-2xl border border-gray-200 bg-white p-5 shadow-md hover:shadow-xl transition"
            >

              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                {featured.date}
              </div>

              <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-12 sm:items-center">

                <div className="sm:col-span-7">

                  <h3 className="text-lg font-extrabold leading-snug text-gray-900">
                    {featured.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {featured.excerpt}
                  </p>

                  <div className="mt-3 text-xs font-semibold text-gray-500">
                    {featured.category} • {featured.readTime}
                  </div>

                </div>

                <div className="relative overflow-hidden rounded-xl sm:col-span-5">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

              </div>
            </Link>

            {/* Side posts */}
            <div className="mt-5 space-y-4">

              {sidePosts.map((post) => (

                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md border border-gray-200 transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="min-w-0 flex-1">

                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                      {post.date}
                    </div>

                    <h4 className="mt-2 line-clamp-2 text-sm font-extrabold text-gray-900 sm:text-base">
                      {post.title}
                    </h4>

                    <p className="mt-1 line-clamp-2 text-xs text-gray-600 sm:text-sm">
                      {post.excerpt}
                    </p>

                  </div>

                  <div className="relative h-16 w-24 overflow-hidden rounded-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.05]"
                    />
                  </div>

                </Link>

              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}