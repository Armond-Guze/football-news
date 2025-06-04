import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Game Snap - Top 2025 NFL Quarterbacks & Football News",
  description:
    "Stay updated with expert rankings, AI-powered highlights, and breaking football coverage. The Game Snap brings you the latest on NFL quarterbacks, draft buzz, and team insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100">
      <body>
        {children}
      </body>
    </html>
  );
}
