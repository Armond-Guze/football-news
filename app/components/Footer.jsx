"use client";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const ad = document.getElementById("footer-ad");
    if (ad && !ad.getAttribute("data-adsbygoogle-status")) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsense error:", e);
      }
    }
  }, []);

  return (
    <footer className="bg-background text-gray-100 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
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

        {/* AdSense */}
        <div className="mt-12 flex justify-center">
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "100%", height: "90px" }}
            data-ad-client="ca-pub-XXXX"
            data-ad-slot="6943307518"
            data-ad-format="auto"
            data-full-width-responsive="true"
            id="footer-ad"
          />
        </div>

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7706858365277925"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <div className="mt-12 text-center text-xs text-gray-500 border-t border-gray-800 pt-6">
          &copy; {new Date().getFullYear()} The Game Snap. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
