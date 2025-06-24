import { client } from "@sanity/lib/client";
import { powerRankingsQuery } from "@sanity/lib/queries";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@sanity/lib/image";
import styles from "./power-rankings.module.css";
import type { PowerRankingTeam, MovementIndicator } from "@/types";

export const revalidate = 60;

// Helper function to calculate team movement
function getMovementIndicator(change: number): MovementIndicator {
  if (change > 0) {
    return { symbol: "▲", color: "text-green-400" };
  } else if (change < 0) {
    return { symbol: "▼", color: "text-red-500" };
  } else {
    return { symbol: "–", color: "text-gray-400" };
  }
}

export default async function PowerRankingsPage() {
  try {
    const rankings: PowerRankingTeam[] = await client.fetch(powerRankingsQuery);

    // Handle empty state
    if (!rankings || rankings.length === 0) {
      return (
        <div className="px-4 py-16 sm:px-6 lg:px-12 bg-neutral-950 text-white min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">NFL Power Rankings</h1>
            <p className="text-xl text-gray-400">No rankings available at this time.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="px-4 py-16 sm:px-6 lg:px-12 bg-neutral-950 text-white min-h-screen">
        <header className="text-center mb-14">
          <h1 className="text-5xl font-bold">NFL Power Rankings</h1>
          <p className="text-lg text-gray-400 mt-4">
            Latest rankings updated weekly • {rankings.length} teams
          </p>
        </header>

        <div className="space-y-20 max-w-5xl mx-auto">
          {rankings.map((team) => {
          const { _id, rank, previousRank, teamColor, teamName, teamLogo, summary, body } = team;
          const change = previousRank ? previousRank - rank : 0;
          const movement = getMovementIndicator(change);

            return (
              <article key={_id} className="space-y-4">
                {/* Top Section: Rank / Name / Logo */}
                <div
                  className={`${styles.teamCard} ${styles.teamBackground} flex items-center gap-4 sm:gap-6`}
                  style={{
                    // Using CSS custom properties for dynamic team colors - this is the recommended approach
                    // for dynamic styling when values come from CMS/API data
                    "--team-bg-color": teamColor ? `${teamColor}10` : "rgba(255, 255, 255, 0.06)",
                    "--team-gradient": `linear-gradient(to right, ${teamColor || "#ffffff"} 0%, transparent 100%)`,
                  } as React.CSSProperties}
                  role="region"
                  aria-labelledby={`team-${_id}-name`}
                >
                  {/* Left Stripe */}
                  <div
                    className={`${styles.leftStripe} ${styles.teamStripe}`}
                    aria-hidden="true"
                  />

                  {/* Rank */}
                  <div className="flex flex-col items-center min-w-[60px]">
                    <span className="text-sm text-gray-300" aria-label="Team rank">
                      Rank
                    </span>
                    <span className="text-4xl font-extrabold text-white" aria-label={`Rank ${rank}`}>
                      {rank}
                    </span>
                  </div>

                  {/* Logo */}
                  {teamLogo?.asset && (
                    <div className="relative">
                      <Image
                        src={urlFor(teamLogo).url()}
                        alt={`${teamName} logo`}
                        width={64}
                        height={64}
                        className="rounded-full object-cover"
                        priority={rank <= 5} // Prioritize top 5 teams
                      />
                    </div>
                  )}

                  {/* Team Name & Movement */}
                  <div className="flex-1 flex items-center justify-between">
                    <h2 
                      id={`team-${_id}-name`}
                      className="text-2xl sm:text-3xl font-semibold text-white"
                    >
                      {teamName}
                    </h2>
                    <div className="flex flex-col items-center justify-center min-w-[32px]">
                      <span
                        className={`text-xl font-semibold ${movement.color} ${
                          change !== 0 ? "motion-safe:animate-pulse" : ""
                        }`}
                        aria-label={
                          change > 0 
                            ? `Moved up ${Math.abs(change)} positions` 
                            : change < 0 
                            ? `Moved down ${Math.abs(change)} positions` 
                            : "No change in position"
                        }
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
                    <div className="text-lg sm:text-xl text-white leading-loose prose prose-invert max-w-none">
                      <PortableText value={body} />
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching power rankings:', error);
    return (
      <div className="px-4 py-16 sm:px-6 lg:px-12 bg-neutral-950 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">NFL Power Rankings</h1>
          <p className="text-xl text-red-400">Unable to load rankings. Please try again later.</p>
        </div>
      </div>
    );
  }
}
