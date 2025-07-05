
"use client";

import React from "react";
import {
  FaCalendarAlt,
  FaBirthdayCake,
  FaHeart,
} from "react-icons/fa";
import Image from "next/image";
import CountUp from "react-countup"; // ✅ CountUp for animation

const celebrationData = [
  {
    type: "Events",
    count: 3000,
    // icon: <FaCalendarAlt size={40} className="text-pink-600 mb-3" />,
  },
  {
    type: "Trusted Clients",
    count: 1000,
    // icon: <FaBirthdayCake size={40} className="text-yellow-500 mb-3" />,
  },
  {
    type: "Years of Experience",
    count: 10,
    // icon: <FaHeart size={40} className="text-red-500 mb-3" />,
  },
];

export default function HappyCustpage() {
  return (
    <div className="min-h-screen bg-amber-50 px-4 py-16">
      {/* Top Section: Why Choose Us */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        {/* Left: Text */}
        <div className="space-y-5">
          <h2 className="text-4xl font-semibold text-[#615b45]">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 text-lg">
            At <strong>The Balloon Story</strong>, we transform your dreams into
            beautifully crafted realities. Our attention to detail, passion for design, and
            customer-first approach make us the preferred choice for celebrations.
          </p>
          <p className="text-gray-700">
            Whether it's a romantic proposal or a child's first birthday, we promise
            perfection with every pop of a balloon.
          </p>
          <ul className="list-disc list-inside text-gray-600 text-base space-y-2">
            <li>Unique, customized decoration themes</li>
            <li>Timely setup & excellent coordination</li>
            <li>Affordable and premium packages</li>
            <li>Trusted by 1000+ happy customers</li>
            <li>End-to-end event support from concept to celebration</li>
          </ul>
        </div>

        {/* Right: Image */}
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

      {/* Bottom Section: Happy Customers Stats */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-light text-amber-900 mb-2">
          Numbers That Speak for Themselves
        </h3>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Join thousands of happy clients who trusted us to make their
          moments magical. Our growing portfolio and glowing feedback reflect
          our unwavering commitment to excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {celebrationData.map((item, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg p-6 text-center bg-white hover:shadow-xl transition"
          >
            {/* <div className="flex justify-center">{item.icon}</div> */}
            <p className="text-4xl sm:text-5xl font-light text-amber-800">
              <CountUp end={item.count} duration={2} />+
            </p>
            <h2 className="text-xl font-semibold text-gray-800 mt-2">
              {item.type}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
