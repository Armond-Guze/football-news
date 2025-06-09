import { Poppins } from "next/font/google";
import "./globals.css";

// Load Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Choose weights you want
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
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans bg-white text-gray-900">{children}</body>
    </html>
  );
}
