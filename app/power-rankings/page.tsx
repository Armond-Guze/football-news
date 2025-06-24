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
            <h1 className="text-4xl font-bold text-white mb-4">No Rankings Available</h1>
            <p className="text-gray-400 text-lg">
              Power rankings will be published soon. Check back later!
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="px-4 py-16 sm:px-6 lg:px-12 bg-neutral-950 text-white min-h-screen">
        <header className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 to-transparent rounded-xl -z-10" />
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            NFL Power Rankings
          </h1>
          <p className="text-xl text-gray-300 mt-6 font-medium">
            Latest rankings updated weekly • {rankings.length} teams
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600/20 rounded-full border border-indigo-500/30">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            <span className="text-sm text-green-400 font-semibold">Live Rankings</span>
          </div>
        </header>

        <div className="space-y-12 max-w-3xl mx-auto">
          {rankings.map((team) => {
            const { _id, rank, previousRank, teamColor, teamName, teamLogo, summary, body } = team;
            const change = previousRank ? previousRank - rank : 0;
            const movement = getMovementIndicator(change);

            return (
              <article key={_id} className="group hover:scale-[1.02] transition-all duration-300">
                {/* Enhanced Card with Glass Effect */}
                <div
                  className={`${styles.teamCard} ${styles.teamBackground} relative backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-6`}
                  style={{
                    "--team-bg-color": teamColor ? `${teamColor}15` : "rgba(255, 255, 255, 0.08)",
                    "--team-gradient": `linear-gradient(135deg, ${teamColor || "#6366f1"} 0%, ${teamColor || "#8b5cf6"} 100%)`,
                  } as React.CSSProperties}
                  role="region"
                  aria-labelledby={`team-${_id}-name`}
                >
                  {/* Enhanced Left Stripe with Glow */}
                  <div
                    className={`${styles.leftStripe} ${styles.teamStripe} shadow-lg`}
                    style={{
                      boxShadow: `0 0 20px ${teamColor || "#6366f1"}40`,
                    } as React.CSSProperties}
                    aria-hidden="true"
                  />

                  {/* Enhanced Rank Display */}
                  <div className="flex flex-col items-center min-w-[80px] bg-black/30 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                      Rank
                    </span>
                    <span 
                      className="text-5xl font-black text-white drop-shadow-lg" 
                      style={{
                        textShadow: `0 0 10px ${teamColor || "#6366f1"}60`,
                      } as React.CSSProperties}
                    >
                      #{rank}
                    </span>
                    {rank <= 3 && (
                      <div className="mt-1">
                        <span className="text-xs">
                          {rank === 1 ? "🏆" : rank === 2 ? "🥈" : "🥉"}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Enhanced Logo */}
                  {teamLogo?.asset && (
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                      <Image
                        src={urlFor(teamLogo).url()}
                        alt={`${teamName} logo`}
                        width={72}
                        height={72}
                        className="rounded-full object-cover ring-2 ring-white/20 shadow-lg relative z-10"
                        priority={rank <= 5}
                      />
                    </div>
                  )}

                  {/* Team Name & Enhanced Movement */}
                  <div className="flex-1 flex items-center justify-between">
                    <h2 
                      id={`team-${_id}-name`}
                      className="text-2xl sm:text-3xl font-bold text-white group-hover:text-indigo-300 transition-colors"
                    >
                      {teamName}
                    </h2>
                    
                    {/* Enhanced Movement Indicator */}
                    <div className="flex flex-col items-center justify-center min-w-[50px] bg-black/40 rounded-lg p-3 backdrop-blur-sm">
                      <span
                        className={`text-2xl font-bold ${movement.color} ${
                          change !== 0 ? "motion-safe:animate-bounce" : ""
                        }`}
                        style={{
                          filter: change !== 0 ? `drop-shadow(0 0 8px ${movement.color === 'text-green-400' ? '#22c55e' : '#ef4444'})` : undefined,
                        } as React.CSSProperties}
                      >
                        {movement.symbol}
                      </span>
                      {change !== 0 && (
                        <span className={`text-sm font-semibold ${movement.color}`}>
                          {Math.abs(change)}
                        </span>
                      )}
                      {change === 0 && (
                        <span className="text-xs text-gray-400">Same</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Enhanced Summary & Body Section */}
                <div className="mt-6 px-6 py-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/30">
                  {summary && (
                    <p className="text-lg text-gray-300 leading-relaxed mb-4 font-medium">
                      {summary}
                    </p>
                  )}
                  {Array.isArray(body) && body.length > 0 && (
                    <div className="prose prose-invert prose-lg max-w-none text-gray-200">
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
    console.error("Error fetching power rankings:", error);
    return (
      <div className="px-4 py-16 sm:px-6 lg:px-12 bg-neutral-950 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-400 mb-4">Error Loading Rankings</h1>
          <p className="text-gray-400 text-lg">
            Unable to load power rankings. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}
