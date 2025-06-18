import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "The Game Snap - Top 2025 NFL Quarterbacks & Football News",
  description:
    "Stay updated with expert rankings, AI-powered highlights, and breaking football coverage. The Game Snap brings you the latest on NFL quarterbacks, draft buzz, and team insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} dark`}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7706858365277925"
          crossOrigin="anonymous"
        ></script>

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0YLR2ZR8SX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0YLR2ZR8SX');
          `}
        </Script>
      </head>
      <body className="bg-[#09090B] text-[#E4E4E7] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
