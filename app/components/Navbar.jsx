"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  // Google AdSense init
  useEffect(() => {
    const ad = document.getElementById("navbar-ad"); // or "footer-ad"
    if (ad && !ad.getAttribute("data-adsbygoogle-status")) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsense error:", e);
      }
    }
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacypolicy" },
    { label: "Contact", href: "/contact" },
    { label: "Power Rankings", href: "/power-rankings" },
  ];

  return (
    <>
      <nav className="bg-background text-gray-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center space-x-2">
            <img
              src="/images/the-snap-logo.png"
              alt="FootballNews Logo"
              className="h-18 w-auto"
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
          <div className="md:hidden bg-slate-900 border-t border-gray-700 px-6 py-4 space-y-4">
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
      {/* Google AdSense Under Navbar */}
      <div className="w-full flex justify-center bg-background">
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "90px" }}
          data-ad-client="ca-pub-XXXX"
          data-ad-slot="8764188470"
          data-ad-format="auto"
          data-full-width-responsive="true"
          id="navbar-ad"
        />
      </div>
    </>
  );
}
