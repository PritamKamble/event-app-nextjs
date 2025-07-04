"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dots, setDots] = useState<React.ReactElement[]>([]);

  const navItems = ["Services", "About", "Gallery", "Review", "Contact"];

  // Safe dot generation only on client
  useEffect(() => {
    const newDots = [...Array(25)].map((_, i) => (
      <div
        key={i}
        className="absolute w-[8px] h-[8px] bg-yellow-300 rounded-full opacity-40 animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${4 + Math.random() * 6}s`,
        }}
      />
    ));
    setDots(newDots);
  }, []);

  return (
    <header className="bg-transparent text-black top-0 z-50 w-full mt-3 bg-gradient-to-r from-[#fff] via-[#f7f4e4] to-[#ecdf99] overflow-hidden">
      {/* Floating dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">{dots}</div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center ml-2.5">
          <Image
            src="/logo/The-Balloon-Story.png"
            alt="logo"
            width={60}
            height={60}
            className="dark:invert transition-transform duration-300 hover:scale-125"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm text-amber-700 sm:text-base">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-gray-800 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-amber-50 z-50 shadow-lg transform transition-transform duration-300 ${
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

          {/* Nav links */}
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block text-base text-gray-800 hover:text-amber-900 transition"
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
