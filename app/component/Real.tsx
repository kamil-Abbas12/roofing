"use client";
import { ChartAreaIcon, TrendingDown } from "lucide-react";
import { BsPeople } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const Real = () => {
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Item variant with typed easing
const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // use cubic-bezier array instead of "easeOut"
    },
  },
};

  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-700 py-10 md:py-16 xl:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white font-bold mb-4 leading-tight"
        >
          Precision Meets Performance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl xl:text-2xl text-gray-300 mt-4"
        >
          Your reputation is built on sharpness; our leads are built on perfection.
        </motion.p>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 my-8 lg:my-14 xl:my-20"
        >

          {/* CARD 1 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.06 }}
            className="bg-gray-800 border border-gray-700 rounded-xl max-w-sm mx-auto shadow-lg hover:shadow-2xl transition"
          >
            <div className="flex flex-col items-center py-8 px-6">

              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                className="flex items-center justify-center h-16 w-16 bg-blue-500 rounded-full shadow-lg"
              >
                <FaEye className="text-white h-8 w-8" />
              </motion.div>

              <h2 className="text-lg xl:text-xl text-white mt-6 font-semibold text-center">
                The High Cost of Being a Secret
              </h2>

              <p className="text-sm md:text-lg text-gray-300 text-left mt-4">
                A weak digital footprint is an open invitation for competitors to steal your market share. Without a dominant online presence, you’re missing out on high-ticket storm restoration and premium contracts every single day.
              </p>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.06 }}
            className="bg-gray-800 border border-gray-700 rounded-xl max-w-sm mx-auto shadow-lg hover:shadow-2xl transition"
          >
            <div className="flex flex-col items-center py-8 px-6">

              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                className="flex items-center justify-center h-16 w-16 bg-blue-500 rounded-full shadow-lg"
              >
                <TrendingDown className="text-white h-8 w-8" />
              </motion.div>

              <h2 className="text-lg xl:text-xl text-white mt-6 font-semibold text-center">
                Eliminating the Off-Season Slump
              </h2>

              <p className="text-sm md:text-lg text-gray-300 text-left mt-4">
                Elite roofing companies don't wait for the phone to ring-they make it ring. If your growth stops the moment the sun comes out or referrals slow down, you aren't running a market leader.
              </p>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.06 }}
            className="bg-gray-800 border border-gray-700 rounded-xl max-w-sm mx-auto shadow-lg hover:shadow-2xl transition"
          >
            <div className="flex flex-col items-center py-8 px-6">

              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                className="flex items-center justify-center h-16 w-16 bg-blue-500 rounded-full shadow-lg"
              >
                <BsPeople className="text-white h-8 w-8" />
              </motion.div>

              <h2 className="text-lg xl:text-xl text-white mt-6 font-semibold text-center">
                The Invisible Storm Chaser
              </h2>

              <p className="text-sm md:text-lg text-gray-300 text-left mt-4">
                Insurance claims move fast. If you aren't the first face a homeowner sees after a hail storm, you’ve already lost the contract.
              </p>
            </div>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.06 }}
            className="bg-gray-800 border border-gray-700 rounded-xl max-w-sm mx-auto shadow-lg hover:shadow-2xl transition"
          >
            <div className="flex flex-col items-center py-8 px-6">

              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                className="flex items-center justify-center h-16 w-16 bg-blue-500 rounded-full shadow-lg"
              >
                <ChartAreaIcon className="text-white h-8 w-8" />
              </motion.div>

              <h2 className="text-lg xl:text-xl text-white mt-6 font-semibold text-center">
                The High Cost of Operating in the Dark
              </h2>

              <p className="text-sm md:text-lg text-gray-300 text-left mt-4">
                If you can’t see exactly where your best contracts are coming from, you’re just handing your market share to competitors.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* CTA */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl xl:text-2xl text-white mt-6"
        >
          Ring a bell? You're in good company, and there's a smarter solution.
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-6"
        >
          <div className="h-2 bg-blue-500 rounded-full"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Real;