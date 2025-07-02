"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Services",
    "About",
    "Gallery",
    "Review",
    "Contact",
  ];

  return (
    <header className="bg-white text-black shadow-lg shadow-amber-900 sticky top-0 z-50 w-[97%] mx-auto mt-3 rounded-3xl">
      {/* Top Nav */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/The-Balloon-Story.png"
            alt="logo"
            width={60}
            height={60}
            className="dark:invert"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm sm:text-base">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-yellow-300 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar & Overlay */}
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col space-y-4 h-full">
          {/* Close button */}
          <button
            className="self-end mb-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>

          {/* Mobile Nav Links */}
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block text-base text-gray-800 hover:text-yellow-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
