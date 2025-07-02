"use client";

import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Birthday Decorations",
    image: "/gallery/bday2.jpeg",
    description: "Celebrate your special day with colorful and personalized birthday decorations.",
  },
  {
    title: "Anniversary Decorations",
    image: "/gallery/anvrsry.jpg",
    description: "Elegant and romantic decor to mark your special milestones together.",
  },
  {
    title: "Baby Shower",
    image: "/gallery/babyShower.jpeg",
    description: "Adorable and themed setups to welcome your little one.",
  },
  {
    title: "Proposal Setup",
    image: "/gallery/proposal.jpeg",
    description: "Make your proposal unforgettable with a dreamy setup and romantic ambiance.",
  },
  {
    title: "First Birthday Theme",
    image: "/services/firstbday.jpg",
    description: "Cute and themed decor to celebrate your baby's first big milestone!",
  },
  {
    title: "Theme Decorations",
    image: "/services/firstbday.jpg",
    description: "Cute and themed decor to celebrate your baby's first big milestone!",
  },
];

export default function Servicepage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12  bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={450}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
