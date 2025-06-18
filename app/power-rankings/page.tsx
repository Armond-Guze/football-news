// app/power-rankings/page.tsx
import { client } from "../../sanity/lib/client"; // ✅ correct alias path
import { powerRankingsQuery } from "../../sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "../../sanity/lib/image"; // ✅ Adjust path if needed

export const revalidate = 60; // ISR for performance

export default async function PowerRankingsPage() {
  const rankings = await client.fetch(powerRankingsQuery);

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 bg-background text-white">
      <h1 className="text-4xl font-bold text-indigo-400 mb-10 text-center">
        NFL Power Rankings
      </h1>
      <ul className="space-y-8 max-w-3xl mx-auto">
        {rankings.map(({ _id, rank, previousRank, teamName, teamLogo, summary, body }) => {
          const change = previousRank ? previousRank - rank : 0;

          return (
            <li
              key={_id}
              className="bg-gray-800 rounded-xl p-6 shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <div className="flex-shrink-0">
                {teamLogo?.asset && (
                  <Image
                    src={urlFor(teamLogo).url()}
                    alt={teamName}
                    width={64}
                    height={64}
                    className="rounded-full border border-gray-600"
                  />
                )}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">
                  #{rank} - {teamName}
                  <span
                    className={`ml-2 text-sm ${
                      change > 0
                        ? "text-green-500"
                        : change < 0
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                  >
                    {change > 0 ? `▲ ${change}` : change < 0 ? `▼ ${Math.abs(change)}` : "–"}
                  </span>
                </h2>

                <p className="text-gray-300">{summary}</p>

                {Array.isArray(body) && body.length > 0 && (
                  <div className="mt-4 text-gray-400 text-sm">
                    <PortableText value={body} />
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
