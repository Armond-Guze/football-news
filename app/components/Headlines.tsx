import { client } from "@sanity/lib/client";
import { headlineQuery } from "@sanity/lib/queries";
import { urlFor } from "@sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

interface Headline {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  summary?: string;
  coverImage?: {
    asset?: {
      _ref: string;
      _type: string;
    };
  };
}

export default async function Headlines() {
  const headlines: Headline[] = await client.fetch(headlineQuery);

  if (!headlines?.length) return null;

  const main = headlines[0];
  const sidebar = headlines.slice(1);
  return (
    <section className="relative text-white py-20 px-6 lg:px-20 overflow-hidden z-0 min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/backgroundImage.jpeg"
          alt="Black textured background"
          fill
          className="object-cover"
        />
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 -z-10" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Main Feature Story */}
        <div className="md:col-span-2 bg-black/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
          {main?.coverImage && main?.slug?.current && (
            <Link href={`/headlines/${main.slug.current.trim()}`}>
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={urlFor(main.coverImage).width(800).url()}
                  alt={main.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </Link>
          )}

          <div className="p-8">
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
              <span className="text-indigo-400 text-sm font-semibold uppercase tracking-wider">Featured Story</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight hover:text-indigo-300 transition-colors duration-300">
              {main.title || "Untitled"}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {main.summary || "No summary available."}
            </p>
          </div>
        </div>

        {/* Sidebar Headlines */}
        <div className="bg-black/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl h-fit border border-white/10">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
            <h3 className="text-xl font-bold text-red-400">
              Breaking News
            </h3>
          </div>
          <ul className="space-y-6 text-sm">
            {sidebar.map((headline) => (
              <li key={headline._id} className="border-b border-gray-700/50 pb-4 last:border-b-0 last:pb-0">
                {headline.slug?.current ? (
                  <Link href={`/headlines/${headline.slug.current.trim()}`}>
                    <div className="flex items-start gap-4 group cursor-pointer">
                      {headline.coverImage && (
                        <div className="relative overflow-hidden rounded-lg flex-shrink-0">
                          <Image
                            src={urlFor(headline.coverImage)
                              .width(80)
                              .height(50)
                              .url()}
                            alt={headline.title}
                            width={80}
                            height={50}
                            className="w-20 h-[50px] object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <span className="hover:text-indigo-400 transition-colors duration-300 font-medium leading-tight">
                        {headline.title}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <span className="text-gray-500 flex items-center">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                    {headline.title || "Untitled"}
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
