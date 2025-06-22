import { client } from "../../sanity/lib/client";
import { headlineQuery } from "../../sanity/lib/queries";
import { urlFor } from "../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

export default async function Headlines() {
  const headlines = await client.fetch(headlineQuery);

  if (!headlines?.length) return null;

  const main = headlines[0];
  const sidebar = headlines.slice(1);

  return (
    <section className="relative text-white py-16 px-6 lg:px-20 overflow-hidden z-0 min-h-[600px]">
  {/* Background Image */}
  <div className="absolute inset-0 -z-20">
    <Image
      src="/images/backgroundImage.jpeg"
      alt="Black textured background"
      fill
      className="object-cover"
    />
  </div>

  {/* Slight black tint overlay */}
  <div className="absolute inset-0 bg-black/50 -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Main Feature Story */}
        <div className="md:col-span-2 bg-black/80 rounded-xl overflow-hidden shadow-lg">
          {main?.coverImage && main?.slug?.current && (
            <Link href={`/headlines/${main.slug.current.trim()}`}>
              <img
                src={urlFor(main.coverImage).width(800).url()}
                alt={main.title}
                className="w-full aspect-video object-cover rounded shadow-lg transition hover:opacity-80"
              />
            </Link>
          )}

          <div className="p-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              {main.title || "Untitled"}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              {main.summary || "No summary available."}
            </p>
          </div>
        </div>

        {/* Sidebar Headlines */}
        <div className="bg-black/80 p-6 rounded-xl shadow-md h-fit">
          <h3 className="text-lg font-semibold text-indigo-400 mb-4">
            Breaking News
          </h3>
          <ul className="space-y-4 text-sm">
            {sidebar.map((headline) => (
              <li key={headline._id} className="border-b border-gray-700 pb-2">
                {headline.slug?.current ? (
                  <Link href={`/headlines/${headline.slug.current.trim()}`}>
                    <div className="flex items-start gap-3">
                      {headline.coverImage && (
                        <img
                          src={urlFor(headline.coverImage)
                            .width(80)
                            .height(50)
                            .url()}
                          alt={headline.title}
                          className="w-20 h-[50px] object-cover rounded-md flex-shrink-0"
                        />
                      )}
                      <span className="hover:text-indigo-400 transition cursor-pointer">
                        {headline.title}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <span className="text-gray-500">
                    • {headline.title || "Untitled"}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
