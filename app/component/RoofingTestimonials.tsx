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
  {
    name: "Michael Anderson",
    role: "Homeowner",
    image: "/pic1.jpg",
    text: "TopDog Roofing did an outstanding job replacing our roof. The team was professional",
  },
  {
    name: "Sarah Williams",
    role: "Property Manager",
    image: "/pic2.jpg",
    text: "From inspection to completion, everything was handled smoothly. They explained .",
  },
  {
    name: "Daniel Roberts",
    role: "Business Owner",
    image: "/pic3.jpg",
    text: "After storm damage, we needed urgent roof repair.",
  },
  {
    name: "Mitchell Roberts",
    role: "Business Owner",
    image: "/pic4.jpg",
    text: "Their team responded quickly and restored our commercial roof efficiently. ",
  },
  {
    name: "Brian Roberts",
    role: "Business Owner",
    image: "/pic5.jpg",
    text: "Outstanding service and communication. Highly recommend their roofing services.",
  },
  {
    name: "Daniel Roberts",
    role: "Business Owner",
    image: "/pic6.jpg",
    text: "Professional team and excellent craftsmanship.",
  },
];

export default function RoofingTestimonials() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">

      {/* floating background */}
      <div className="absolute -top-40 left-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full"></div>

      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-sm font-medium text-blue-900 shadow">
            Client Feedback
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            What Our Roofing Clients Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Real reviews from homeowners and property managers who trusted us.
          </p>
        </motion.div>

        {/* SLIDER */}
        <div className="relative mt-16">

          {/* PREVIOUS BUTTON */}
          <button
  ref={prevRef}
  className="absolute -left-16 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-xl border group transition md:flex"
>
  <ChevronLeft className="h-5 w-5 text-gray-700 transition" />
</button>


         {/* NEXT BUTTON */}
<button
  ref={nextRef}
  className="absolute -right-16 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-xl border group transition md:flex"
>
  <ChevronRight className="h-5 w-5 text-gray-700 transition" />
</button>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            loop
            spaceBetween={24}
            observer
            observeParents
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
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
            className="pb-14"
          >
            {testimonials.map((item, index) => (
<SwiperSlide key={index} className="flex h-auto">
                  <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative h-full rounded-2xl bg-white p-8 shadow-lg transition overflow-hidden"
                >

                  {/* top gradient line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

                  {/* quote + stars */}
                  <div className="flex items-start justify-between">
                    <Quote className="h-8 w-8 text-blue-600/20" />

                    <div className="flex text-orange-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="currentColor"
                          className="transition group-hover:scale-110"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {item.text}
                  </p>

                  {/* user */}
<div className="mt-auto pt-8 flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-blue-200 group-hover:ring-blue-500 transition">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition group-hover:scale-110"
                        sizes="48px"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {item.role}
                      </p>
                    </div>
                  </div>

                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
}