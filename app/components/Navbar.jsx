'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: 'about' },
    { label: 'Privacy Policy', href: '/privacypolicy' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-slate-900 text-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-18">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center space-x-2">
          <img
            src="/images/thesnap.png"
            alt="FootballNews Logo"
            className="h-30 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Icons */}
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
  );
}
