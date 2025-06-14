// app/components/Headlines.jsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from '../../sanity/lib/client';
import { headlineQuery } from '../../sanity/lib/queries';



export default function Headlines() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    client.fetch(headlineQuery).then(setHeadlines);
  }, []);

  if (!headlines.length) return null;

  const main = headlines[0];
  const sidebar = headlines.slice(1);

  return (
    <section className="bg-gray-900 text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Main Feature Story */}
        <div className="md:col-span-2 bg-gray-800 rounded-xl overflow-hidden shadow-lg">
          <a
            href={main.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://img.youtube.com/vi/${main.videoUrl?.split("v=")[1]}/hqdefault.jpg`}
              alt={main.title}
              className="w-full object-cover aspect-video transition hover:brightness-90"
            />
          </a>
          <div className="p-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              {main.title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              {main.summary}
            </p>
          </div>
        </div>

        {/* Sidebar Headlines */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md h-fit">
          <h3 className="text-lg font-semibold text-indigo-400 mb-4">
            Breaking News
          </h3>
          <ul className="space-y-3 text-sm">
            {sidebar.map((headline) => (
              <li key={headline._id} className="border-b border-gray-700 pb-2">
                <Link
                  href={`/headlines/${headline.slug.current}`}
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
