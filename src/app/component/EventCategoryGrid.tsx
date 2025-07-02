"use client";
import Image from "next/image";

const events = [
  { title: "Birthday", image: "/category/bdaycategory.jpg" },
  { title: "Baby Shower", image: "/category/Baby-Shower3.webp" },
  { title: "Anniversary ", image: "/category/anns.jpg" },
  { title: "Baby Welcome", image: "/category/welcome.jpg" },
  { title: "Proposal", image: "/category/proposal.jpeg" },
  { title: "Theme Decoration", image: "/category/theme.jpg" },
  { title: "Haldi /Wedding  ", image: "/category/haldi.jpg" },
  { title: "Baby Welcome", image: "/category/welcome.jpg" },
 
];

export default function EventCategoryGrid() {
  return (
    // <section className="py-5 px-4 bg-[#FFF6F6]">
    <section className="py-12 px-2 sm:px-4 bg-[#fff]">
      <h2 className="text-[23px] sm:text-3xl font-bold text-center text-pink-950 mb-7">
        Turn Every Occasion into a Celebration🎈{" "}
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 mb-1.5 md:gap-6">
        {events.map((event, i) => (
          <div
            key={i}
            className="bg-[#FFF] rounded-[40px]  transition  border-amber-950"
          >
            <div className="rounded-[30px] overflow-hidden border-2">
              <Image
                src={event.image}
                alt={event.title}
                width={550}
                height={550}
                className="w-full aspect-[1/1] object-cover "
              />
            </div>
            <h3 className="text-center text-gray-500 sm:text-2xl font-semibold text-gray-600 mt-3">
              {event.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
