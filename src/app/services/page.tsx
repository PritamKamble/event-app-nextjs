// app/services/page.tsx or wherever Servicepage is

"use client";

import React from "react";
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
    title: "Corporate Events",
    slug: "corporate-events",
    description:
      "Corporate events in India bring people together to build businesses, celebrate achievements, and create meaningful connections.",
    icon: (
      <img
        src="/icon/business-success.png"
        alt="Corporate"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Birthday & Anniversaries Events",
    slug: "birthday-anniversary",
    description:
      "Celebrate life's milestones with elegant and joyful birthday and anniversary decorations.",
    icon: (
      <img
        src="/icon/birthday-cake.png"
        alt="Corporate"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Baby & Kids Celebrations",
    slug: "baby-kids",
    description:
      "Make every baby and kid's moment extra special with colorful and fun setups.",
    icon: (
      <img
        src="/icon/baby-shower.png"
        alt="Corporate"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Wedding & Pre-Wedding",
    slug: "wedding-prewedding",
    description:
      "From proposals to mehendi and haldi, we create romantic and vibrant wedding vibes.",
    icon: (
      <img
        src="/icon/marriage.png"
        alt="Corporate"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Home Ceremonies",
    slug: "home-ceremonies",
    description:
      "Celebrate griha pravesh and spiritual gatherings with warm, elegant home decor.",
    icon: (
      <img
        src="/icon/wedding-decoration.png"
        alt="Corporate"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Business Launches",
    slug: "business-launches",
    description:
      "Make your business events memorable with premium themes and setups.",
    icon: (
      <img
        src="/icon/targeting.png"
        alt="Corporate"
        className="w-16 h-16 mx-auto"
      />
    ),
  },
  {
    title: "Welcome & Milestones",
    slug: "welcome-milestones",
    description:
      "From welcoming babies to brides, we create heartfelt, memorable entrances.",
    icon: <FaHandsHelping className="text-7xl sm:text-8xl" />,
  },
  {
    title: "Others / Custom Events",
    slug: "custom-events",
    description:
      "No matter the theme, we customize decor to suit your imagination and occasion.",
    icon: <FaStar className="text-7xl sm:text-8xl" />,
  },
];

export default function Servicepage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-transparent">
      <h1 className="text-3xl font-light text-center text-[#d1b12b] mb-7">
        Comprehensive Event Services
      </h1>
      <EventCategoryCard services={services} />
    </div>
  );
}
