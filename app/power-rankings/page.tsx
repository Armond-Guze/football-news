import { client } from '@/sanity/lib/client'
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";



export const dynamic = "force-dynamic";

const query = groq`*[_type == "powerRanking"] | order(rank asc) {
  _id,
  rank,
  teamName,
  teamLogo,
  date,
  summary
}`;

export default async function PowerRankingsPage() {
  const data = await client.fetch(query);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-white">
      <header className="mb-10 border-b border-gray-700 pb-4">
        <h1 className="text-4xl font-bold">🏈 2025 NFL Power Rankings</h1>
        <p className="text-gray-400 text-sm mt-1">Updated weekly</p>
      </header>

      {/* your map() goes below */}

      {data.map((team: any) => (
     <article
  key={team._id}
  className="mb-10 border-b border-gray-800 pb-6 flex items-start gap-5"
>
  <div className="text-3xl font-bold text-indigo-400 w-10 shrink-0">
    #{team.rank}
  </div>

  <div className="flex-1">
    <div className="flex items-center gap-3 mb-2">
      {team.teamLogo && (
        <img
          src={team.teamLogo}
          alt={team.teamName}
          width={40}
          height={40}
          className="rounded-full object-contain bg-white p-1"
        />
      )}
      <h2 className="text-xl font-semibold">{team.teamName}</h2>
    </div>

    {team.summary && (
      <div className="prose prose-invert text-gray-300 max-w-none">
        <PortableText value={team.summary} />
      </div>
    )}
  </div>
</article>

      ))}
    </main>
  );
}
