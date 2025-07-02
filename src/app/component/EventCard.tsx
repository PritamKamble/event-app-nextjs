"use client";

import React from "react";
import Image from "next/image";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden w-full h-[420px] transition hover:shadow-lg flex flex-col">
      <Image
        src={imageUrl}
        alt={title}
        width={200}
        height={220}
        className="w-full h-64 object-cover"
      />
      <div className="p-2">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
         <button className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm px-4 py-2 rounded-full hover:from-blue-700 hover:to-indigo-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
