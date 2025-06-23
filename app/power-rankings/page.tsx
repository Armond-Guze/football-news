import { client } from "../../sanity/lib/client";
import { powerRankingsQuery } from "../../sanity/lib/queries";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../sanity/lib/image";

export const revalidate = 60;

export default async function PowerRankingsPage() {
  const rankings = await client.fetch(powerRankingsQuery);

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-12 bg-background text-white">
      <h1 className="text-5xl font-bold text-indigo-400 mb-14 text-center">
        NFL Power Rankings
      </h1>

      <div className="space-y-16 max-w-5xl mx-auto">
        {rankings.map(
          ({
            _id,
            rank,
            previousRank,
            teamColor,
            teamName,
            teamLogo,
            summary,
            body,
          }) => {
            const change = previousRank ? previousRank - rank : 0;
            const movement =
              change > 0
                ? { symbol: "▲", color: "text-green-500" }
                : change < 0
                ? { symbol: "▼", color: "text-red-500" }
                : { symbol: "–", color: "text-gray-400" };

            return (
              <div
                key={_id}
                className="relative bg-gray-900 rounded-2xl p-6 sm:p-10 shadow-lg"
              >
                {/* Vertical Stripe */}
                <div
                  className="absolute left-0 top-0 h-full w-2 sm:w-2 rounded-l-xl"
                  style={{ backgroundColor: teamColor || "#ffffff" }}
                />

                {/* Top Row */}
                <div className="flex items-center gap-4 sm:gap-6 mb-6">
                  {/* Rank */}
                  <div className="flex flex-col items-center min-w-[60px]">
                    <span className="text-sm sm:text-base text-gray-400">
                      Rank
                    </span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-indigo-300">
                      {rank}
                    </span>
                  </div>

                  {/* Logo */}
                  {teamLogo?.asset && (
                    <Image
                      src={urlFor(teamLogo).url()}
                      alt={teamName}
                      width={72}
                      height={72}
                      className="rounded-full border border-gray-600"
                    />
                  )}

                  {/* Team Name + Movement */}
                  <div className="flex-1 flex items-center justify-between">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                      {teamName}
                    </h2>
                    <div className="flex flex-col items-center justify-center min-w-[32px]">
                      <span
                        className={`text-xl font-semibold ${movement.color}`}
                      >
                        {movement.symbol}
                      </span>
                      {change !== 0 && (
                        <span className={`text-sm ${movement.color}`}>
                          {Math.abs(change)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-4">
                  {summary}
                </p>

                {/* Body */}
                {Array.isArray(body) && body.length > 0 && (
                  <div className="mt-2 text-base sm:text-lg text-slate-300 leading-loose">
                    <PortableText value={body} />
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
