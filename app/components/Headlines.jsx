"use client";
import Link from "next/link";
import Image from "next/image";

export default function Headlines() {
  const headlines = [
    {
      title: "NFL: Aaron Rodgers’ contract details with Steelers",
      slug: "aaron-rodgers-contract-details",
    },
    // You can add more like this
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Main Feature Story */}
        <div className="md:col-span-2 relative bg-gray-800 rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-w-16 aspect-h-9 w-full">
            <a
              href="https://www.youtube.com/watch?v=p5UVt9-wSLg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.youtube.com/vi/p5UVt9-wSLg/hqdefault.jpg"
                alt="Aaron Rodgers Contract Update"
                className="rounded-md w-full object-cover aspect-video transition hover:brightness-90"
              />
            </a>
          </div>
          <div className="p-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Details emerge about Aaron Rodgers' contract with Steelers
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Insider sources reveal new terms on Rodgers’ future in Pittsburgh.
              Find out what this means for the AFC.
            </p>
          </div>
        </div>

        {/* Sidebar Headlines */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md h-fit">
          <h3 className="text-lg font-semibold text-indigo-400 mb-4">
            Breaking News
          </h3>
          <ul className="space-y-3 text-sm">
            {headlines.map((item, idx) => (
              <li key={idx} className="border-b border-gray-700 pb-2">
                <Link
                  href={`/headlines/${item.slug}`}
                  className="text-gray-200 hover:text-indigo-400 transition"
                >
                  • {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
