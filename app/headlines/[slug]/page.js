import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function HeadlinePage(props) {
  const params = await props?.params;
  if (!params?.slug) return notFound();

  const trimmedSlug = decodeURIComponent(params.slug).trim();

  const [headline, otherHeadlines] = await Promise.all([
    client.fetch(
      `*[_type == "headline" && slug.current == $slug && published == true][0]{
        title,
        slug,
        summary,
        date,
        body,
        author->{
          name,
          image {
            asset->{ url }
          }
        },
        coverImage {
          asset->{ url }
        }
      }`,
      { slug: trimmedSlug }
    ),
    client.fetch(
      `*[_type == "headline" && published == true] | order(_createdAt desc)[0...6]{
        _id,
        title,
        slug,
        coverImage {
          asset->{ url }
        }
      }`
    ),
  ]);

  if (!headline) notFound();

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* 📦 Content Container */}
      <div className="px-4 md:px-8 py-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* ✅ Main Article Section */}
        <article className="lg:col-span-2 flex flex-col items-center">
          {/* Title + Meta */}
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-white mb-4">
            {headline.title}
          </h1>

          <div className="text-sm text-gray-400 mb-6 flex items-center gap-3">
            {headline.author?.image?.asset?.url && (
              <img
                src={headline.author.image.asset.url}
                alt={headline.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <span>
              By {headline.author?.name || "Unknown"} •{" "}
              {new Date(headline.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          {/* ✅ Cover Image BELOW headline */}
          {headline.coverImage?.asset?.url && (
            <div className="w-full flex justify-center mb-8">
              <div className="relative w-full max-w-3xl h-[320px] overflow-hidden rounded-md border border-slate-700 shadow-sm">
                <img
                  src={headline.coverImage.asset.url}
                  alt={headline.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          )}

          {/* ✅ Body Text */}
          <section className="w-full flex justify-center">
            <div className="prose prose-invert text-white text-lg leading-relaxed max-w-2xl">
              <PortableText value={headline.body} />
            </div>
          </section>
        </article>

        {/* ✅ Sidebar */}
        <aside className="mt-16 lg:mt-[76px] lg:pl-12">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
            More Headlines
          </h2>
          <div className="space-y-3">
            {otherHeadlines
              .filter((h) => h.slug.current !== trimmedSlug)
              .map((h) => (
                <Link
                  key={h._id}
                  href={`/headlines/${h.slug.current}`}
                  className="flex gap-4 items-center hover:bg-gray-800 p-2 rounded transition"
                >
                  <div className="relative w-20 h-14 flex-shrink-0 rounded overflow-hidden self-center">
                    {h.coverImage?.asset?.url && (
                      <Image
                        src={h.coverImage.asset.url}
                        alt={h.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <span className="text-sm text-slate-300">{h.title}</span>
                </Link>
              ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
