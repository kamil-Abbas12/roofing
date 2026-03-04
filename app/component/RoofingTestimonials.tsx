"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Anderson",
    role: "Homeowner",
    image: "/pic1.jpg",
    text: "TopDog Roofing did an outstanding job replacing our roof. The team was professional, on time, and the quality of work exceeded our expectations. Highly recommend them for anyone needing reliable roofing services.",
  },
  {
    name: "Sarah Williams",
    role: "Property Manager",
    image: "/pic2.jpg",
    text: "From inspection to completion, everything was handled smoothly. They explained the entire roofing process clearly and delivered exactly what they promised. Excellent craftsmanship and communication.",
  },
  {
    name: "Daniel Roberts",
    role: "Business Owner",
    image: "/pic3.jpg",
    text: "After storm damage, we needed urgent roof repair. Their team responded quickly and restored our commercial roof efficiently. Honest pricing and high-quality service.",
  },
];

export default function RoofingTestimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#f1f1ff] px-4 py-1 text-sm font-medium text-gray-800 ">
            Client Feedback
          </span>
          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            What Our Roofing Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-[#f1f1ff] p-8 shadow-lg transition hover:shadow-xl"
            >
              {/* Quote */}
              <div className="text-4xl text-blue-600">“</div>

              {/* Text */}
              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.text}
              </p>

              {/* Client Info */}
              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">{item.role}</p>

                  {/* Stars */}
                  <div className="mt-1 flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}