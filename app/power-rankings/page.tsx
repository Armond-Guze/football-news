// app/power-rankings/page.tsx
import { client } from "../../sanity/lib/client"; // ✅ correct alias path
import { powerRankingsQuery } from "../../sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 60; // ISR for performance

export default async function PowerRankingsPage() {
  const rankings = await client.fetch(powerRankingsQuery);

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-indigo-400 mb-10 text-center">NFL Power Rankings</h1>
      <ul className="space-y-8 max-w-3xl mx-auto">
        {rankings.map(({ _id, rank, teamName, teamLogo, summary }) => (
          <li key={_id} className="bg-gray-800 rounded-xl p-6 shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-shrink-0">
              <Image
                src={teamLogo.asset.url}
                alt={teamName}
                width={64}
                height={64}
                className="rounded-full border border-gray-600"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">
                #{rank} - {teamName}
              </h2>
              <PortableText value={summary} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
