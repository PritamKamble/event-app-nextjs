"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Poppins } from "next/font/google";
import ContactUsPage from "@/app/contact/page";
import { FaStar } from "react-icons/fa";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const services = [
  {
    title: "Birthday",
    slug: "birthday",
    description:
      "Celebrate life's milestones with joyful and creative birthday decorations.",
    image: "/slide/Book.jpg",
    features: ["Balloon Arch", "Theme Banners", "Cake Table Decor"],
  },
  {
    title: "Baby Shower",
    slug: "baby-shower",
    description:
      "Make every baby shower special with delightful and colorful themes.",
    image: "/slide/babyshower.jpg",
    features: ["Pastel Setup", "Welcome Board", "Photo Booth"],
  },
  {
    title: "Anniversary",
    slug: "anniversary",
    description:
      "Celebrate anniversaries with elegant and romantic decor setups.",
    image: "/images/events/anniversary.jpg",
    features: ["Floral Backdrop", "LED Lights", "Couple Chairs"],
  },
  {
    title: "Haldi Decor",
    slug: "haldi-decor",
    description:
      "Traditional haldi ceremonies enhanced with festive colors and decor.",
    image: "/images/events/haldi.jpg",
    features: ["Yellow Drapes", "Marigold Setup", "Stage Decor"],
  },
  {
    title: "Mehendi Decor",
    slug: "mehendi-decor",
    description:
      "Colorful mehendi functions brought to life with vibrant decor.",
    image: "/images/events/mehendi.jpg",
    features: ["Green & Yellow Drapes", "Henna Station", "Flower Decor"],
  },
  {
    title: "Proposal Decor",
    slug: "proposal",
    description: "Make your proposal magical with themed and romantic setups.",
    image: "/images/events/proposal.jpg",
    features: ["Rose Petal Aisle", "Love Balloons", "Marry Me LED"],
  },
  // Add other services as needed
];

export default function EventDetailPage() {
  const { slug } = useParams();
  const event = services.find((item) => item.slug === slug);

  if (!event) {
    return (
      <div className="text-center text-red-500 py-20">Event not found 🚫</div>
    );
  }

  return (
    <section className={`${poppins.className}`}>
      {/* Title Section with Custom Background */}
      <div className="relative w-full h-[150px] md:h-[200px]">
        <Image
          src="/slide/design_05.jpg"
          alt="Background"
          fill
          className="object-cover brightness-[0.5]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-orange-600 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">{event.title}</h1>
        </div>
      </div>

      {/* Event Detail Section */}
      <div className="max-w-7xl mx-auto px-2 py-11">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 px-4">
          <div>
            <h2 className="text-2xl font-semibold text-amber-950 mb-6">
              What's Included
            </h2>
            <p className="text-lg max-w-2xl mb-5">{event.description}</p>

            <ul className="list-disc list-inside text-[#bd9f28] space-y-2 text-lg">
              {event.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="">
            <Image
              src={event.image}
              alt={event.title}
              width={600}
              height={400}
              className=" h-[300px] sm:h-[410px] object-fit transition duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-110 group-hover:rotate-[1deg]"
            />
          </div>
        </div>

        <ContactUsPage />
      </div>
    </section>
  );
}
