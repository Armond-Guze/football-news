import { Poppins } from "next/font/google";
import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";
import { Analytics } from "@vercel/analytics/react";
import FooterAd from "./components/FooterAd";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Game Snap – NFL News, Power Rankings & Quarterback Insights",
  description:
    "Stay updated with expert takes, weekly power rankings, draft analysis, and the latest headlines in pro football. The Game Snap delivers bold coverage for NFL fans.",
  keywords: [
    "NFL",
    "Football News",
    "NFL Power Rankings",
    "Quarterback Rankings",
    "Draft Analysis",
    "NFL Teams",
    "The Game Snap",
  ],
  openGraph: {
    title: "The Game Snap",
    description:
      "Bold NFL coverage. Quarterbacks, Power Rankings, Draft Rumors & Weekly Takes.",
    url: "https://thegamesnap.com",
    siteName: "The Game Snap",
    images: [
      {
        url: "https://thegamesnap.com/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "The Game Snap - NFL Power Rankings & Draft Coverage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Game Snap",
    description:
      "NFL headlines, rankings, and draft stories — your go-to source for football talk.",
    creator: "@thegamesnap",
    images: ["https://thegamesnap.com/og-default.jpg"],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          data-ad-client="ca-pub-7706858365277925"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0YLR2ZR8SX');
          `}
        </Script>
      </head>

      <body className="font-sans bg-black text-white">
        <LayoutWrapper>{children}</LayoutWrapper>
        <FooterAd />
        <Analytics />
      </body>
    </html>
  );
}
