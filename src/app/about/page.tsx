import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full bg-gray-50 py-12 px-6">
      <h3 className="text-center text-4xl font-bold text-indigo-700 mb-10">
        ABOUT US
      </h3>{" "}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="w-full h-full">
          <Image
            src="/images/about-img.jpg" // replace with your image path
            alt="Celebration"
            width={500}
            height={350}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              We Will Give a Very Special Celebration for You
            </h2>
            <p className="text-gray-600 text-justify mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              labore fugiat ut esse perferendis perspiciatis provident dolores
              fuga in facilis culpa possimus, quia praesentium itaque, sapiente
              quasi harum rem asperiores.
            </p>
            <p className="text-gray-600 text-justify mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              vero expedita incidunt provident quibusdam aut odit, numquam
              nesciunt similique nisi.
            </p>
          </div>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
