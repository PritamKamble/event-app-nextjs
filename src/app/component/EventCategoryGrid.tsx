"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface Service {
  title: string;
  slug: string;
  description: string;
  icon: React.ReactNode;
}

export default function EventCategoryCard({
  services,
}: {
  services: Service[];
}) {
  const router = useRouter();

  return (
    <section className={`${poppins.className} bg-transparent py-12 px-4`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => router.push(`/event/eventdetail/${service.slug}`)}
            className="group cursor-pointer bg-transparent shadow shadow-gray-400 min-h-[310px] sm:min-h-[400px] h-auto w-full p-10 flex flex-col justify-center items-center text-center hover:bg-[#bec0b4] hover:text-white active:bg-[#bec0b4] active:text-white transition duration-300"
          >
            <div className="mb-4 text-gray-700 group-hover:text-white">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center group-hover:bg-[#d2d3c7]">
                {service.icon}
              </div>
            </div>
            <h3 className="text-lg text-[#9f9159] sm:text-xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base px-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
