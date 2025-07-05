// app/services/page.tsx or wherever Servicepage is

"use client";

import React, { useState } from "react";
import {
  FaBriefcase,
  FaBirthdayCake,
  FaBaby,
  FaRing,
  FaHome,
  FaBuilding,
  FaHandsHelping,
  FaStar,
} from "react-icons/fa";
import EventCategoryCard from "../component/EventCategoryGrid";


const services = [
  {
    title: "Birthday",
    slug: "birthday",
    description: "Celebrate life's milestones with joyful and creative birthday decorations.",
    icon: (
      <img
        src="/icon/birthday-cake.png"
        alt="Birthday"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Baby Shower",
    slug: "baby-shower",
    description: "Make every baby shower special with delightful and colorful themes.",
    icon: (
      <img
        src="/icon/baby-shower.png"
        alt="Baby Shower"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Anniversary",
    slug: "anniversary",
    description: "Celebrate anniversaries with elegant and romantic decor setups.",
    icon: (
      <img
        src="/icon/marriage.png"
        alt="Anniversary"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
   {
    title: "Haldi Decor",
    slug: "haldi-decor",
    description: "Traditional haldi ceremonies enhanced with festive colors and decor.",
    icon: (
      <img
        src="/icon/marriage.png"
        alt="Haldi Decor"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Naming Ceremony",
    slug: "naming-ceremony",
    description: "Create heartwarming setups for your baby's naming day celebration.",
    icon: (
      <img
        src="/icon/naming.png"
        alt="Naming Ceremony"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Corporate Events",
    slug: "corporate-events",
    description: "Professional decor for business events, launches, and achievements.",
    icon: (
      <img
        src="/icon/business-success.png"
        alt="Corporate Events"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "House Warming",
    slug: "house-warming",
    description: "Celebrate your new beginnings with elegant griha pravesh decor.",
    icon: (
      <img
        src="/icon/house.png"
        alt="House Warming"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Shop Opening Decor",
    slug: "shop-opening",
    description: "Attract attention and blessings with grand shop opening themes.",
    icon: (
      <img
        src="/icon/shop.png"
        alt="Shop Opening"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Bride to Be Decor",
    slug: "bride-to-be",
    description: "Celebrate bridal moments with charming 'Bride to Be' decorations.",
    icon: (
      <img
        src="/icon/bride.png"
        alt="Bride to Be"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Proposal Decor",
    slug: "proposal",
    description: "Make your proposal magical with themed and romantic setups.",
    icon: (
      <img
        src="/icon/proposal.png"
        alt="Proposal"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
 
  {
    title: "Mehendi Decor",
    slug: "mehendi-decor",
    description: "Colorful mehendi functions brought to life with vibrant decor.",
    icon: (
      <img
        src="/icon/mehendi.png"
        alt="Mehendi Decor"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Baptism",
    slug: "baptism",
    description: "Graceful and spiritual themes for your child’s baptism ceremony.",
    icon: (
      <img
        src="/icon/baptism.png"
        alt="Baptism"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Munj",
    slug: "munj",
    description: "Create a sacred and respectful vibe for traditional Munj ceremonies.",
    icon: (
      <img
        src="/icon/ritual.png"
        alt="Munj"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Baby Welcome",
    slug: "baby-welcome",
    description: "Welcome the newborn with heartwarming and colorful decorations.",
    icon: (
      <img
        src="/icon/welcome-baby.png"
        alt="Baby Welcome"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Bride Welcome",
    slug: "bride-welcome",
    description: "Make bridal entries grand with lovely welcome themes.",
    icon: (
      <img
        src="/icon/welcome-bride.png"
        alt="Bride Welcome"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
 
  {
    title: "Other / Custom Events",
    slug: "custom-events",
    description: "No matter the theme, we customize decor to your imagination.",
    icon: <FaStar className="text-7xl sm:text-8xl mx-auto text-yellow-500" />,
  },
];



export default function Servicepage() {
  const [showAll, setShowAll] = useState(false)
    const visibleServices = showAll ? services : services.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto  px-4 py-12 bg-[#fdf9f2]  ">
      <h1 className="text-3xl font-semibold text-center text-[#d1b12b] mb-7 ">
        Comprehensive Event Services
      </h1>
      <EventCategoryCard services={visibleServices} />
      {/* Show View More only if more than 8 items exist */}
      {services.length > 8 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-[#d1b12b] text-white rounded-md shadow-md hover:bg-yellow-600 transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
}
