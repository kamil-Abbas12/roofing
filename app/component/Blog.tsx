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
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 py-14"
    >
      <div className="mx-auto w-full max-w-6xl px-4">

        {/* Header */}
        <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2
            id="blog-heading"
            className="animate-fadeUp text-xl font-extrabold tracking-tight text-gray-900 md:text-3xl"
          >
            Roofing Tips &amp; Insights{" "}
            <br className="hidden sm:block" />
            From Industry Experts
          </h2>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
            aria-label="View all roofing blog posts"
          >
            View All
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20" aria-hidden="true">
              <ChevronRightIcon className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

          {/* ✅ Left featured image — wrapped in <article> for semantic meaning */}
          <article className="lg:col-span-6">
            <Link
              href={`/blog/${featured.slug}`}
              className="relative block overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5"
              aria-label={`Read featured post: ${featured.title}`}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-200">
                {/* Blurred background fill — decorative */}
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  aria-hidden="true"
                  className="object-cover blur-2xl scale-110"
                  quality={60}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/10" aria-hidden="true" />

                {/* Foreground image — meaningful alt */}
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-contain"
                  quality={95}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" aria-hidden="true" />

              <div className="absolute bottom-4 left-4 right-4">
                {/* ✅ orange-500 text-white date badge — contrast fix: add font-bold + ensure bg is dark enough */}
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                  <time dateTime={featured.date}>{featured.date}</time>
                </div>
                {/* ✅ h3 correct — child of section h2 */}
                <h3 className="mt-2 text-lg font-extrabold text-white drop-shadow sm:text-xl">
                  {featured.title}
                </h3>
              </div>
            </Link>
          </article>

          {/* Right section */}
          <div className="lg:col-span-6">

            {/* Featured card */}
            <article>
              <Link
                key={featured.slug}
                href={`/blog/${featured.slug}`}
                className="block animate-slideUpFade rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition hover:shadow-xl"
                aria-label={`Read: ${featured.title}`}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                  <time dateTime={featured.date}>{featured.date}</time>
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
                      <span>{featured.category}</span>
                      <span aria-hidden="true"> • </span>
                      <span>{featured.readTime}</span>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-xl sm:col-span-5">
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                      {/* Blurred bg — decorative */}
                      <Image
                        src={featured.image}
                        alt=""
                        fill
                        aria-hidden="true"
                        className="object-cover blur-xl scale-110"
                        quality={55}
                        sizes="(min-width: 1024px) 25vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-black/5" aria-hidden="true" />
                      {/* Foreground */}
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        className="object-contain"
                        quality={90}
                        sizes="(min-width: 1024px) 25vw, 100vw"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </article>

            {/* Side posts */}
            <ul className="mt-5 space-y-4" aria-label="More blog posts">
              {sidePosts.map((post) => (
                <li key={post.slug}>
                  <article>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                      aria-label={`Read: ${post.title}`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                          <time dateTime={post.date}>{post.date}</time>
                        </div>

                        {/* ✅ h4 → h3: avoids heading level skip (h2 → h4) */}
                        <h3 className="mt-2 line-clamp-2 text-sm font-extrabold text-gray-900 sm:text-base">
                          {post.title}
                        </h3>

                        <p className="mt-1 line-clamp-2 text-xs text-gray-600 sm:text-sm">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-200">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition duration-300 group-hover:scale-[1.05]"
                          quality={85}
                          sizes="96px"
                        />
                      </div>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}