import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function HeadlinePage(props) {
  const trimmedSlug = props?.params?.slug?.trim?.() || "";


  const headline = await client.fetch(
    `*[_type == "headline" && slug.current == $slug][0]{
      title,
      slug,
      summary,
      date,
      body,
      author->{
        name,
        image {
          asset-> {
            url
          }
        }
      },
      coverImage {
        asset->{
          url
        }
      }
    }`,
    { slug: trimmedSlug }
  );

  if (!headline) notFound();

  return (
    <main className="bg-gray-900 text-white min-h-screen px-4 md:px-8 py-10 max-w-3xl mx-auto">
      <section className="pb-6 border-b border-gray-700 mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-white mb-2">
          {headline.title}
        </h1>

        <div className="text-sm text-gray-400 mb-4 flex items-center gap-3">
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

        {headline.coverImage?.asset?.url && (
          <img
            src={headline.coverImage.asset.url}
            alt={headline.title}
            className="w-full aspect-video object-cover rounded-lg mb-6"
          />
        )}
      </section>

      <section className="prose prose-invert max-w-none text-white text-lg leading-relaxed">
        <PortableText value={headline.body} />
      </section>
    </main>
  );
}
