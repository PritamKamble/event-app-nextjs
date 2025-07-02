"use client";

import React from "react";
import EventCard from "./component/EventCard";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import GalleryPage from "./gallery/page";
import ReviewPage from "./review/page";
import EventCategoryGrid from "./component/EventCategoryGrid";
import Image from "next/image";
import HappyCustpage from "./happycustomer/page";
const events = [
  {
    title: "Birthday Celebration",
    date: "July 20, 2025",
    description:
      "Experience a night of electrifying performances and live bands!",
    imageUrl: "/images/bday.jpeg",
  },
  {
    title: "Anniversary",
    date: "August 5, 2025",
    description: "Taste the best dishes from local and international chefs.",
    imageUrl: "/images/anns.jpg",
  },
  {
    title: "Baby Shower",
    date: "September 10, 2025",
    description: "Explore cutting-edge technology and innovative startups.",
    imageUrl: "/images/bday.jpeg",
  },
  {
    title: "Wedding Celebration",
    date: "October 1, 2025",
    description:
      "Witness masterpieces from modern and classical artists.Witness masterpieces from modern and classical artists.Witness masterpieces from modern and classical artists",
    imageUrl: "/images/bday.jpeg",
  },
];

export default function Page() {
  return (
    // <div className="p-1 bg-[#FFF6F6]">
    <div className="p-1 bg-[#fff]">
      <div className="relative w-full">
        <Image
          src="/images/flower.jpg"
          alt="Hero Banner"
          width={200} // ✅ Required for next/image
          height={100}
          className="w-full h-[200px] md:h-[300px] object-cover  "
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-lg">
          <h1 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
            The Balloon Story
          </h1>
          <h1 className="text-white text-xl md:text-3xl font-medium text-center px-4 mt-2">
            Make Your Event Unforgettable
          </h1>
        </div>
      </div>
      <div>
        <EventCategoryGrid />
      </div>
<div className="py-10 px-2 sm:px-6 md:px-12 lg:px-10 bg-white">
        <h1 className="text-3xl font-bold text-center text-[#6d3c51] mb-8">
         Level Up Your Events
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              description={event.description}
              imageUrl={event.imageUrl}
            />
          ))}
        </div>
      </div>

      <div>
        <GalleryPage />
<HappyCustpage/>
        <AboutPage />
        <ReviewPage />
        <ContactPage />
      </div>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919999999999" // replace with your number
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
