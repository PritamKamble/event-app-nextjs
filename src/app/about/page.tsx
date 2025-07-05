"use client";

import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function AboutPage() {
  return (
    <div
      className={`${poppins.className} w-full bg-gradient-to-b from-[#fffdf5] to-[#f0f0f5] py-16`}
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-semibold text-[#d1b12b] tracking-tight">
          About Us
        </h3>
        <p className="text-light md:text-lg text-gray-500 mt-2">
          Celebrating joy with creative elegance and heartfelt moments.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Left: Image */}
        <div className="flex gap-2">
          <div className="w-full">
            <Image
              src="/slide/babyshower.jpg"
              alt="Celebration"
              width={500}
              height={350}
              className="w-full h-[250px] sm:h-[400px] rounded  rounded-tl-4xl shadow-lg object-cover"
            />
          </div>
          <div className="w-full">
            <Image
              src="/slide/babyshower.jpg"
              alt="Celebration"
              width={500}
              height={350}
              className="w-full sm:h-[300px] h-[200px] rounded rounded-br-4xl shadow-lg object-cover "
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 leading-snug mb-4">
              Crafting Special Celebrations Just for You
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed text-justify mb-4">
              We specialize in creating unforgettable event experiences — from
              intimate gatherings to grand celebrations. Our passion lies in the
              details, turning your vision into reality with a touch of magic.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              Whether it’s a birthday, wedding, baby shower, or corporate event,
              we ensure every moment is unique, seamless, and filled with joy.
            </p>
          </div>
          <div>
            {/* <button className="bg-[#f0b23c] hover:bg-[#c28400] text-white px-6 py-3 rounded-full shadow-md transition duration-300">
              Contact Us
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
