"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  { name: "Ethan Carter", role: "Homeowner", image: "/pic1.webp", text: "TopDog Roofing did an outstanding job replacing our roof." },
  { name: "Olivia Bennett", role: "Property Manager", image: "/pic2.webp", text: "From inspection to completion, everything was handled smoothly." },
  { name: "Lucas Hayes", role: "Property Client", image: "/pic3.webp", text: "After storm damage, we needed urgent roof repair." },
  { name: "Chloe Simmons", role: "Property Client", image: "/pic4.webp", text: "Their team responded quickly and restored our commercial roof efficiently." },
  { name: "Mason Foster", role: "Property Client", image: "/pic5.webp", text: "Outstanding service and communication." },
  { name: "Sophia Reynolds", role: "Property Client", image: "/pic6.webp", text: "Professional team and excellent craftsmanship." },
];

export default function RoofingTestimonials() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950"
    >
      {/* Floating background */}
      <div className="absolute -top-40 left-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full -translate-x-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-sm font-medium text-blue-900 shadow">
            Customer Feedback
          </span>

          {/* ✅ h2 → correct (section heading, not page h1) */}
          <h2
            id="testimonials-heading"
            className="mt-6 text-4xl font-bold text-white md:text-5xl"
          >
            What Our Roofing Clients Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Real reviews from homeowners and property managers who trusted us.
          </p>
        </motion.div>

        {/* SLIDER */}
        <div className="relative mt-16">

          {/* ✅ aria-label added — fixes "Buttons do not have an accessible name" Lighthouse failure */}
          <button
            ref={prevRef}
            aria-label="Previous testimonial"
            className="absolute -left-16 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-xl border group transition md:flex focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700 transition" aria-hidden="true" />
          </button>

          <button
            ref={nextRef}
            aria-label="Next testimonial"
            className="absolute -right-16 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-xl border group transition md:flex focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <ChevronRight className="h-5 w-5 text-gray-700 transition" aria-hidden="true" />
          </button>

          <Swiper
            className="pb-16 md:pb-20 lg:pb-24"
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            loop
            spaceBetween={24}
            observer
            observeParents
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={false}
            onBeforeInit={(swiper: SwiperType) => {
              if (typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation!.prevEl = prevRef.current;
                swiper.params.navigation!.nextEl = nextRef.current;
              }
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="flex">
                <motion.figure
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative flex flex-col h-full rounded-2xl bg-white p-8 shadow-lg transition overflow-hidden md:h-[250px] lg:min-h-[200px]"
                  aria-label={`Testimonial from ${item.name}, ${item.role}`}
                >
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" aria-hidden="true" />

                  {/* Quote + stars */}
                  <div className="flex items-start justify-between">
                    <Quote className="h-8 w-8 text-blue-600/20" aria-hidden="true" />
                    <div className="flex text-orange-500" aria-label="5 out of 5 stars" role="img">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" className="transition group-hover:scale-110" aria-hidden="true" />
                      ))}
                    </div>
                  </div>

                  <blockquote>
                    <p className="mt-4 text-gray-600 leading-relaxed">{item.text}</p>
                  </blockquote>

                  {/* User */}
                  <figcaption className="mt-auto pt-8 flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-blue-200 group-hover:ring-blue-500 transition">
                      <Image
                        src={item.image}
                        alt={`Photo of ${item.name}`}
                        fill
                        className="object-cover transition group-hover:scale-110"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      {/* ✅ h4 → cite + strong — h4 skips heading levels (h2→h4). Use semantic figcaption instead. */}
                      <cite className="not-italic font-semibold text-gray-900 block">{item.name}</cite>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </figcaption>
                </motion.figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}