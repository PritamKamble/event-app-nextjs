"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonialpage() {
  const videos = [
    "/videos/testimonial-v.mp4",
    "/videos/testimonial-v2.mp4",
    "/videos/testimonial-v3.mp4",
    "/videos/testimonial-v.mp4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="px-4 py-10 bg-gray-50">
      <h1 className="text-3xl font-semibold text-center mb-10 text-[#bd9f28]">
        What Our Customers Say
      </h1>

      {/* ✅ Mobile view: 1 video at a time with navigation */}
      <div className="block md:hidden text-center">
        <video
          src={videos[currentIndex]}
          controls
          autoPlay
          loop
          muted
          className="rounded-lg shadow-xl w-full max-w-md h-64 object-cover mx-auto"
        />

        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="bg-[#D08700] hover:bg-[#D08700] text-white p-3 rounded-full shadow-md"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#D08700] hover:bg-[#D08700] text-white p-3 rounded-full shadow-md"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* ✅ Desktop view: Grid of videos */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {videos.map((src, index) => (
          <video
            key={index}
            src={src}
            controls
            autoPlay
            loop
            muted
            className="rounded-lg shadow-xl w-full max-w-md h-64 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
