"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative text-gray-100 py-12 border-t border-gray-800 overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/backgroundImage.jpeg"
          alt="Footer texture background"
          fill
          className="object-cover"
        />
      </div>

      {/* Optional dark tint for contrast */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* The Game Snap */}
          <div>
            <h3 className="text-xl font-bold text-indigo-400 mb-4">
              The Game Snap
            </h3>
            <p className="text-sm text-gray-400">
              Your source for elite coverage and NFL insights.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-indigo-400 mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:TheGameSnap@yahoo.com"
                  className="hover:text-indigo-400 transition"
                >
                  TheGameSnap@yahoo.com
                </a>
              </li>
              <li>
                <Link
                  href="/privacypolicy"
                  className="hover:text-indigo-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-indigo-400 transition"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-semibold text-indigo-400 mb-3">
              Follow Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/thegamesnap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-gray-500 border-t border-gray-800 pt-6">
          &copy; {new Date().getFullYear()} The Game Snap. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
