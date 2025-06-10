'use client'

import { useEffect } from "react";
import Script from "next/script";

export default function Footer() {
  useEffect(() => {
    // Only push if not already done
    const ads = document.querySelectorAll("ins.adsbygoogle");
    ads.forEach((ad) => {
      if (!ad.getAttribute("data-adsbygoogle-status")) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("Adsense error:", e);
        }
      }
    });
  }, []); // ← run only once

  return (
    <>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX"
        crossOrigin="anonymous"
      />
      <footer className="...">
        {/* Ad slot example */}
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXX"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        {/* Footer content */}
      </footer>
    </>
  );
}
