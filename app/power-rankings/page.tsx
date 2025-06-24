import { client } from "@sanity/lib/client";
import { powerRankingsQuery } from "@sanity/lib/queries";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@sanity/lib/image";

export const revalidate = 60;

export default async function PowerRankingsPage() {
  const rankings = await client.fetch(powerRankingsQuery);

  return (
<div className="px-4 py-16 sm:px-6 lg:px-12 bg-neutral-950 text-white">
      <h1 className="text-5xl font-bold mb-14 text-center">NFL Power Rankings</h1>

      <div className="space-y-20 max-w-5xl mx-auto">
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
                ? { symbol: "▲", color: "text-green-400" }
                : change < 0
                ? { symbol: "▼", color: "text-red-500" }
                : { symbol: "–", color: "text-gray-400" };

            const faintBg = teamColor
              ? `${teamColor}10`
              : "#ffffff10";

            const gradientStyle = {
              background: `linear-gradient(to right, ${teamColor || "#ffffff"} 0%, transparent 100%)`
            };

            return (
              <div key={_id} className="space-y-4">
                {/* Top Section: Rank / Name / Logo */}
                <div
                  className="relative rounded-xl px-6 py-5 sm:px-8 sm:py-6 flex items-center gap-4 sm:gap-6"
                  style={{
                    backgroundColor: faintBg,
                  }}
                >
                  {/* Left Stripe */}
                  <div
                    className="absolute left-0 top-0 h-full w-3 sm:w-4 rounded-l-xl"
                    style={gradientStyle}
                  />

                  {/* Rank */}
                  <div className="flex flex-col items-center min-w-[60px]">
                    <span className="text-sm text-gray-300">Rank</span>
                    <span className="text-4xl font-extrabold text-white">{rank}</span>
                  </div>

                  {/* Logo */}
                  {teamLogo?.asset && (
                    <Image
                      src={urlFor(teamLogo).url()}
                      alt={teamName}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  )}

                  {/* Team Name & Movement */}
                  <div className="flex-1 flex items-center justify-between">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                      {teamName}
                    </h2>
                    <div className="flex flex-col items-center justify-center min-w-[32px]">
                      <span
                        className={`text-xl font-semibold ${movement.color} ${
                          change !== 0 ? "motion-safe:animate-soft-bounce" : ""
                        }`}
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

                {/* Summary & Body */}
                <div className="px-2 sm:px-4">
                  {summary && (
                    <p className="text-lg sm:text-xl text-white leading-relaxed mb-3">
                      {summary}
                    </p>
                  )}
                  {Array.isArray(body) && body.length > 0 && (
                    <div className="text-lg sm:text-xl text-white leading-loose">
                      <PortableText value={body} />
                    </div>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
