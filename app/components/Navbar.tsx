"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => setMenuOpen(false);

  // Removed "Home" from navigation items
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Headlines", href: "/headlines" },
    { label: "Power Rankings", href: "/power-rankings" },
    { label: "NFL Standings", href: "/standings" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="text-gray-100 shadow-sm sticky top-0 z-50 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/backgroundImage1.jpeg"
          alt="Navbar texture"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Subtle gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-gray-900/40 to-black/40 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-18 py-3 relative z-10">
        {/* Logo - Now serves as Home link */}
        <Link href="/" className="inline-flex items-center space-x-2 group">
          <Image
            src="/images/the-snap-logo.png"
            alt="FootballNews Logo"
            width={72}
            height={72}
            className="h-12 md:h-18 w-auto transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`relative text-sm font-semibold pb-1 transition-all duration-300 ${
                  isActive 
                    ? 'text-indigo-400 after:w-full' 
                    : 'text-white hover:text-indigo-400'
                } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full ${
                  isActive ? 'after:w-full' : 'after:w-0'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Enhanced Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="relative p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 group"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-1 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : 'rotate-0'
                }`}
              />
              <span
                className={`absolute top-3 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute top-5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : 'rotate-0'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 border-t border-gray-700 px-6 py-6 space-y-1 relative z-10">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                onClick={handleLinkClick}
                className={`block text-base font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'text-indigo-400 bg-slate-800/50 border-l-4 border-indigo-400'
                    : 'text-white hover:text-indigo-400 hover:bg-slate-800/30 hover:translate-x-2'
                } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
