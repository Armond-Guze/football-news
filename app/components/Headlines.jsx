// app/components/Headlines.jsx
"use client";
import Link from "next/link";
import headlines from "../data/headlinesData"; // Adjust path as needed

export default function Headlines() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Main Feature Story (first headline with video thumbnail) */}
        <div className="md:col-span-2 bg-gray-800 rounded-xl overflow-hidden shadow-lg">
          <a
            href={headlines[0].videoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://img.youtube.com/vi/${headlines[0].videoUrl.split("v=")[1]}/hqdefault.jpg`}
              alt={headlines[0].title}
              className="w-full object-cover aspect-video transition hover:brightness-90"
            />
          </a>
          <div className="p-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              {headlines[0].title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              {headlines[0].summary}
            </p>
          </div>
        </div>

        {/* Sidebar Headlines */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md h-fit">
          <h3 className="text-lg font-semibold text-indigo-400 mb-4">
            Top Headlines
          </h3>
          <ul className="space-y-3 text-sm">
            {headlines.map((headline, idx) => (
              <li key={idx} className="border-b border-gray-700 pb-2">
                <Link
                  href={`/headlines/${headline.slug}`}
                  className="hover:text-indigo-400 transition"
                >
                  • {headline.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
