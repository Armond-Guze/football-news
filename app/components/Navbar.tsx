"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacypolicy" },
    { label: "Contact", href: "/contact" },
    { label: "Power Rankings", href: "/power-rankings" },
  ];

  return (
    <nav className="relative text-gray-100 shadow-sm sticky top-0 z-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/backgroundImage1.jpeg"
          alt="Navbar texture"
          fill
          className="object-cover"
        />
      </div>

      {/* Subtle black tint for readability */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-18 py-3 relative z-10">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center space-x-2">
          <img
            src="/images/the-snap-logo.png"
            alt="FootballNews Logo"
            className="h-12 md:h-18 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative text-sm font-semibold pb-1 text-white transition-colors hover:text-indigo-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 border-t border-gray-700 px-6 py-4 space-y-4 relative z-10">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={handleLinkClick}
              className="block text-base font-medium hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
