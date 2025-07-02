import React from 'react';

const celebrationData = [
  { type: "Events", count: 1000, color: "bg-white", image: "/category/ballon.png" },
  { type: "Birthdays", count: 124, color: "bg-white", image: "/category/birthday-cake.png" },
  { type: "Anniversaries", count: 85, color: "bg-white", image: "/category/rings.png" },
  { type: "Baby Showers", count: 42, color: "bg-white", image: "/category/baby (1).png" },
  { type: "Parties", count: 33, color: "bg-white", image: "/category/cheers.png" },
  { type: "Proposals", count: 27, color: "bg-white", image: "/category/diamond-ring.png" },
];

export default function HappyCustpage() {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-pink-800 mb-8">
        Happy Customers, Happy Moments 😊
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {celebrationData.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg p-6 text-center ${item.color}`}
          >
            <img
              src={item.image}
              alt={item.type}
              className="w-16 h-16 mx-auto mb-3"
            />
            <h2 className="text-xl font-semibold text-gray-800">{item.type}</h2>
            <p className="text-2xl font-bold text-pink-700">{item.count}+</p>
          </div>
        ))}
      </div>
    </div>
  );
}
