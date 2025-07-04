"use client";

import React, { useState, useEffect } from "react";
import EventCard from "./component/EventCard";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import GalleryPage from "./gallery/page";
import ReviewPage from "./review/page";
import EventCategoryGrid from "./component/EventCategoryGrid";
import Image from "next/image";
import HappyCustpage from "./happycustomer/page";
import MyStoryPage from "@/mystory/page";
import Testimonialpage from "./testimonials/page";
import Servicepage from "./services/page";

export default function Page() {
  const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
  const slides = [
    { type: "image", src: "/slide/Book.jpg" },
    { type: "image", src: "/slide/babyshower.jpg" },
    { type: "image", src: "/slide/Minnie-theme.jpg" },
    { type: "video", src: "/slide/decovideo.mp4" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (slides[current].type === "video") {
      timer = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000); // Video shows for 5 seconds
    } else {
      timer = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 3000); // Image shows for 3 seconds
    }

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="relative min-h-screen  overflow-hidden bg-gradient-to-r from-[#fcfbf8] via-[#f5f0d5] to-[#ecdf99]">
      {/* Animated floating golden dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
      {mounted &&
  [...Array(25)].map((_, i) => (
    <div
      key={i}
      className="absolute w-[8px] h-[8px] bg-yellow-300 rounded-full opacity-40 animate-float"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${4 + Math.random() * 6}s`,
      }}
    />
))}
      </div>

      {/* Page content */}
      <div className="relative z-10 space border-b-2">
        {/* Slider and MyStoryPage side by side (on desktop) */}
        <div className="mt-6 flex flex-col md:flex-row gap-6 ">
          {/* Left: Slider */}
          <div className="w-full md:w-1/2 relative">
            {slides[current].type === "image" ? (
              <Image
                src={slides[current].src}
                alt={`Slide ${current + 1}`}
                className="w-full h-[400px] object-cover transition-all duration-700 ease-in-out rounded-tl-4xl p-2"
                width={1920}
                height={400}
                priority
              />
            ) : (
              <video
                className="w-full h-[400px] object-center"
                src={slides[current].src}
                autoPlay
                muted
                loop
                playsInline
              />
            )}
            {/* Slider Dots */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === current ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: MyStory */}
          <div className="w-full md:w-1/2">
            <MyStoryPage />
          </div>
        </div>

        {/* Event Categories */}
        <Servicepage />

        {/* Other Sections */}
        <HappyCustpage />
        <Testimonialpage/>
        <AboutPage />
        <ContactPage />
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        aria-label="WhatsApp Chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M12.04 2.003a9.931 9.931 0 00-8.85 14.65l-1.17 4.293 4.387-1.153a9.944 9.944 0 004.143.938h.007c5.511 0 9.993-4.482 9.993-9.993a9.931 9.931 0 00-9.99-9.936zm-.048 18.319a8.254 8.254 0 01-4.15-1.137l-.296-.177-2.603.685.694-2.538-.19-.31a8.26 8.26 0 01-1.316-4.464c0-4.565 3.713-8.278 8.278-8.278s8.278 3.713 8.278 8.278-3.713 8.278-8.278 8.278zm4.595-6.179c-.25-.125-1.47-.726-1.698-.808s-.393-.125-.56.125-.642.808-.787.975-.29.187-.539.062a6.693 6.693 0 01-1.962-1.21 7.387 7.387 0 01-1.372-1.692c-.143-.25-.015-.384.107-.509.11-.11.25-.286.373-.429.125-.143.166-.25.25-.414s.042-.312-.02-.437c-.062-.125-.56-1.348-.765-1.844-.201-.482-.405-.417-.56-.425l-.476-.01a.918.918 0 00-.663.31c-.229.25-.873.852-.873 2.078s.894 2.411 1.018 2.578 1.759 2.685 4.27 3.76c.596.257 1.063.41 1.426.524.599.191 1.144.165 1.576.1.48-.072 1.47-.6 1.678-1.179.208-.58.208-1.077.145-1.179-.062-.104-.229-.166-.479-.29z" />
        </svg>
      </a>

      {/* Floating Call Button */}
      <a
        href="tel:+919999999999"
        className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
        aria-label="Call Us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.48 2.53.73 3.88.73a1 1 0 011 1v3.5a1 1 0 01-1 1C10.4 22 2 13.6 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.35.25 2.67.73 3.88a1 1 0 01-.21 1.11l-2.4 2.3z" />
        </svg>
      </a>
    </div>
  );
}
