import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function MyStoryPage() {
  return (
    <section className={poppins.className}>
      <div className="max-w-full mx-auto sm:h-[85vh] px-4 py-10 text-center bg-transparent">
        <h1 className="text-3xl font-bold font-serif text-[#0a0805] mb-6">The Balloon Story</h1>
        <p className="text-[#745a21]  text-lg leading-relaxed">
          Every celebration starts with a spark of joy — and for us, that spark
          has always been balloons. What began as a simple love for colors and
          creativity has now turned into a full-fledged passion for transforming
          spaces into unforgettable memories.
          <br />
          From birthday surprises and baby showers to grand openings and wedding
          proposals, we craft balloon decorations that speak emotion and energy.
          Our goal is to bring happiness, color, and a little bit of magic into
          every moment you want to celebrate.
          <br /><br />
          Let us help you <strong>elevate your occasion</strong> — one balloon at a time!
        </p>
      </div>
    </section>
  );
}
