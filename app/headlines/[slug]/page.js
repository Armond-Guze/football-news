import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export default async function HeadlinePage(props) {
  const params = props.params || {};
  const trimmedSlug = params.slug?.trim?.() || "";

  const headlines = await client.fetch(
    `*[_type == "headline"]{
      title,
      slug,
      summary,
      body,
      coverImage {
        asset-> {
          url
        }
      }
    }`
  );

  const headline = headlines.find(
    (h) => h.slug?.current?.trim() === trimmedSlug
  );

  if (!headline) notFound();

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{headline.title}</h1>
        {headline.coverImage?.asset?.url && (
          <img
            src={headline.coverImage.asset.url}
            alt={headline.title}
            className="rounded-lg mb-6 w-full"
          />
        )}
        <p className="text-gray-400 italic mb-6">{headline.summary}</p>
        <div className="prose prose-invert">
          <PortableText value={headline.body} />
        </div>
      </div>
    </main>
  );
}
