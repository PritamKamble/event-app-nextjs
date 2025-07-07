"use client";

import React from "react";
import { FaCalendarAlt, FaBirthdayCake, FaHeart } from "react-icons/fa";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const celebrationData = [
  {
    type: "Events",
    count: 3000,
  },
  {
    type: "Trusted Clients",
    count: 1000,
  },
  {
    type: "Years of Experience",
    count: 10,
  },
];

// Component for animated counter with scroll trigger
const AnimatedCounter = ({ end }: { end: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <p ref={ref} className="text-4xl sm:text-5xl font-light text-[#D08700]">
      {inView ? <CountUp end={end} duration={2} /> : 0}+
    </p>
  );
};

export default function HappyCustpage() {
  return (
    <div className="min-h-screen bg-orange-200 px-4 py-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <div className="space-y-5">
          <h2 className="text-4xl font-semibold font-serif text-[#3e3412]">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 text-lg">
            At <strong>The Balloon Story</strong>, we transform your dreams into
            beautifully crafted realities. Our attention to detail, passion for
            design, and customer-first approach make us the preferred choice for
            celebrations.
          </p>
          <p className="text-gray-700">
            Whether it's a romantic proposal or a child's first birthday, we
            promise perfection with every pop of a balloon.
          </p>
          <ul className="list-disc list-inside text-gray-600 text-base space-y-2">
            <li>Unique, customized decoration themes</li>
            <li>Timely setup & excellent coordination</li>
            <li>Affordable and premium packages</li>
            <li>Trusted by 1000+ happy customers</li>
            <li>End-to-end event support from concept to celebration</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/aboutus.jpg"
            alt="Why Choose Us"
            width={500}
            height={400}
            className="shadow-lg object-cover rounded-tr-[70px] rounded-bl-[70px]"
          />
        </div>
      </div>

      {/* Numbers Section */}
      <div className="text-center mb-10 bg" >
        <h3 className="text-3xl font-semibold text-amber-900 mb-2">
          Numbers That Speak for Themselves
        </h3>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Join thousands of happy clients who trusted us to make their moments
          magical. Our growing portfolio and glowing feedback reflect our
          unwavering commitment to excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {celebrationData.map((item, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.4,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: index * 0.05 }}
              className="rounded-xl shadow-lg p-6 text-center bg-white hover:shadow-xl transition"
            >
              <AnimatedCounter end={item.count} />
              <h2 className="text-xl font-semibold text-gray-800 mt-2">
                {item.type}
              </h2>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
