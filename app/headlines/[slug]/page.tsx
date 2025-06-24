import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { client } from "@sanity/lib/client";
import type { Headline, HeadlineListItem, HeadlinePageProps } from "@/types";

export const dynamic = "force-dynamic";

export default async function HeadlinePage(props: HeadlinePageProps) {
  const params = await props.params;
  if (!params?.slug) return notFound();

  const trimmedSlug = decodeURIComponent(params.slug).trim();

  const [headline, otherHeadlines] = await Promise.all([
    client.fetch<Headline>(
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
    client.fetch<HeadlineListItem[]>(
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
      <div className="px-4 md:px-8 py-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* ✅ Main Article Section */}
        <article className="lg:col-span-2 flex flex-col">
          {/* ✅ Cover Image FIRST */}
          {headline.coverImage?.asset?.url && (
            <div className="w-full flex justify-center mb-6">
              <div className="relative w-full max-w-2xl h-[400px] md:h-[500px] overflow-hidden rounded-md border border-slate-700 shadow-sm">
                <Image
                  src={headline.coverImage.asset.url}
                  alt={headline.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}

          {/* Title + Meta AFTER image */}
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-white mb-4">
            {headline.title}
          </h1>

          <div className="text-sm text-gray-400 mb-6 flex items-center gap-3">
            {headline.author?.image?.asset?.url && (
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={headline.author.image.asset.url}
                  alt={headline.author.name || "Author"}
                  fill
                  className="object-cover"
                />
              </div>
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

          {/* ✅ Body Text */}
          <section className="w-full flex justify-center">
            <div className="prose prose-invert text-white text-lg leading-relaxed max-w-2xl">
              {headline.body && <PortableText value={headline.body} />}
            </div>
          </section>
        </article>

        {/* ✅ Sidebar - right side on larger devices, aligned with image */}
        <aside className="lg:mt-0 bg-gray-800/50 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
            More Headlines
          </h2>
          <div className="space-y-4">
            {otherHeadlines
              .filter((h) => h.slug.current !== trimmedSlug)
              .slice(0, 4)
              .map((h) => (
                <Link
                  key={h._id}
                  href={`/headlines/${h.slug.current}`}
                  className="flex gap-3 items-start hover:bg-gray-700/50 p-3 rounded transition"
                >
                  <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                    {h.coverImage?.asset?.url && (
                      <Image
                        src={h.coverImage.asset.url}
                        alt={h.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <span className="text-sm text-slate-300 line-clamp-3">{h.title}</span>
                </Link>
              ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
