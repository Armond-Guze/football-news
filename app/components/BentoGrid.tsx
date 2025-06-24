import { client } from "@sanity/lib/client";
import { headlineQuery, powerRankingsQuery } from "@sanity/lib/queries";
import { urlFor } from "@sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import type { PowerRankingTeam } from "@/types";

interface Headline {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  summary?: string;
  coverImage?: {
    asset?: {
      _ref: string;
      _type: string;
    };
  };
}

export default async function BentoGrid() {
  // Fetch data from Sanity
  const [headlines, powerRankings] = await Promise.all([
    client.fetch(headlineQuery),
    client.fetch(powerRankingsQuery)
  ]);

  const featuredHeadline = headlines?.[0];
  const latestHeadlines = headlines?.slice(1, 4) || [];
  const topTeams = powerRankings?.slice(0, 3) || [];

  return (
    <section className="relative px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Latest Content
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Power rankings, breaking news, and expert analysis all in one place
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 h-auto lg:h-[700px]">
        
        {/* Large Power Rankings Card */}
        <Link href="/power-rankings" className="md:col-span-2 lg:col-span-3 md:row-span-2 group">
          <div className="relative h-full min-h-[350px] rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-sm border border-white/10 hover:border-indigo-400/30 transition-all duration-500 hover:scale-[1.02] shadow-2xl hover:shadow-indigo-500/25">
            <Image
              src="/images/lombardi-trophy.png"
              alt="Power Rankings"
              fill
              className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="relative h-full flex flex-col justify-between p-8">
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center px-4 py-2 bg-indigo-600/80 rounded-full backdrop-blur-sm border border-indigo-400/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-white text-sm font-semibold">Live Rankings</span>
                </div>
                <svg className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  NFL Power Rankings
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Weekly team rankings with expert analysis and insights
                </p>
                
                {/* Top 3 Teams Preview */}
                {topTeams.length > 0 && (
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-400">Top 3:</span>
                    <div className="flex -space-x-2">
                      {topTeams.map((team, index) => (
                        <div key={team._id} className="relative">
                          {team.teamLogo?.asset ? (
                            <Image
                              src={urlFor(team.teamLogo).width(32).height(32).url()}
                              alt={team.teamName}
                              width={32}
                              height={32}
                              className="w-8 h-8 rounded-full border-2 border-white/20 bg-white/10"
                            />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-white/20 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">#{team.rank}</span>
                            </div>
                          )}
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-bold">{index + 1}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>

        {/* Featured Headline */}
        {featuredHeadline?.slug?.current ? (
          <Link href={`/headlines/${featuredHeadline.slug.current}`} className="md:col-span-2 lg:col-span-3 group">
            <div className="relative h-full min-h-[350px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/80 to-gray-900/80 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-blue-500/20">
              {featuredHeadline.coverImage?.asset ? (
                <Image
                  src={urlFor(featuredHeadline.coverImage).width(600).url()}
                  alt={featuredHeadline.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-purple-900/60" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="relative h-full flex flex-col justify-between p-6">
                <div className="flex items-start justify-between">
                  <div className="inline-flex items-center px-3 py-1 bg-red-600/80 rounded-full backdrop-blur-sm">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-white text-xs font-semibold uppercase tracking-wider">Featured</span>
                  </div>
                  <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 line-clamp-3 group-hover:text-blue-300 transition-colors duration-300">
                    {featuredHeadline.title}
                  </h3>
                  {featuredHeadline.summary && (
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {featuredHeadline.summary}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <Link href="/headlines" className="md:col-span-2 lg:col-span-3 group">
            <div className="relative h-full min-h-[350px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/80 to-gray-900/80 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-blue-500/20">
              <Image
                src="/images/jalen-hurts.png"
                alt="Featured News"
                fill
                className="object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="relative h-full flex flex-col justify-between p-6">
                <div className="flex items-start justify-between">
                  <div className="inline-flex items-center px-3 py-1 bg-red-600/80 rounded-full backdrop-blur-sm">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-white text-xs font-semibold uppercase tracking-wider">Breaking</span>
                  </div>
                  <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
                    Latest NFL Headlines & Breaking News
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    Stay updated with the latest NFL news, trades, and breaking stories
                  </p>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Small Cards Row */}
        {latestHeadlines.length > 0 ? (
          latestHeadlines.slice(0, 3).map((headline, index) => (
            <Link 
              key={headline._id} 
              href={headline.slug?.current ? `/headlines/${headline.slug.current}` : '/headlines'} 
              className="md:col-span-2 lg:col-span-2 group"
            >
              <div className={`relative h-full min-h-[160px] rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-[1.02] shadow-lg ${
                index === 0 ? 'bg-gradient-to-br from-emerald-900/60 to-teal-900/60 hover:border-emerald-400/30 hover:shadow-emerald-500/20' :
                index === 1 ? 'bg-gradient-to-br from-orange-900/60 to-red-900/60 hover:border-orange-400/30 hover:shadow-orange-500/20' :
                'bg-gradient-to-br from-purple-900/60 to-pink-900/60 hover:border-purple-400/30 hover:shadow-purple-500/20'
              }`}>
                {headline.coverImage?.asset ? (
                  <Image
                    src={urlFor(headline.coverImage).width(400).url()}
                    alt={headline.title}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-60 transition-all duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                
                <div className="relative h-full flex items-end p-4">
                  <div>
                    <div className={`inline-flex items-center px-2 py-1 rounded-md backdrop-blur-sm mb-2 ${
                      index === 0 ? 'bg-emerald-600/70' :
                      index === 1 ? 'bg-orange-600/70' :
                      'bg-purple-600/70'
                    }`}>
                      <span className="text-white text-xs font-semibold">News</span>
                    </div>
                    <h3 className={`text-sm lg:text-base font-bold text-white line-clamp-2 transition-colors duration-300 ${
                      index === 0 ? 'group-hover:text-emerald-300' :
                      index === 1 ? 'group-hover:text-orange-300' :
                      'group-hover:text-purple-300'
                    }`}>
                      {headline.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <>
            <Link href="/headlines" className="md:col-span-2 lg:col-span-2 group">
              <div className="relative h-full min-h-[160px] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-900/60 to-teal-900/60 backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-all duration-500 hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/20">
                <Image
                  src="/images/patrick-mahomes.png"
                  alt="Player Analysis"
                  fill
                  className="object-cover opacity-50 group-hover:opacity-60 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                
                <div className="relative h-full flex items-end p-4">
                  <div>
                    <div className="inline-flex items-center px-2 py-1 bg-emerald-600/70 rounded-md backdrop-blur-sm mb-2">
                      <span className="text-white text-xs font-semibold">Analysis</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                      Player Spotlights
                    </h3>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/about" className="md:col-span-2 lg:col-span-2 group">
              <div className="relative h-full min-h-[160px] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-900/60 to-red-900/60 backdrop-blur-sm border border-white/10 hover:border-orange-400/30 transition-all duration-500 hover:scale-[1.02] shadow-lg hover:shadow-orange-500/20">
                <Image
                  src="/images/josh-allen.png"
                  alt="Draft Analysis"
                  fill
                  className="object-cover opacity-50 group-hover:opacity-60 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                
                <div className="relative h-full flex items-end p-4">
                  <div>
                    <div className="inline-flex items-center px-2 py-1 bg-orange-600/70 rounded-md backdrop-blur-sm mb-2">
                      <span className="text-white text-xs font-semibold">Draft</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                      Draft Coverage
                    </h3>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/headlines" className="md:col-span-2 lg:col-span-2 group">
              <div className="relative h-full min-h-[160px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/60 to-pink-900/60 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-[1.02] shadow-lg hover:shadow-purple-500/20">
                <Image
                  src="/images/lamar-jackson.png"
                  alt="Game Recaps"
                  fill
                  className="object-cover opacity-50 group-hover:opacity-60 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                
                <div className="relative h-full flex items-end p-4">
                  <div>
                    <div className="inline-flex items-center px-2 py-1 bg-purple-600/70 rounded-md backdrop-blur-sm mb-2">
                      <span className="text-white text-xs font-semibold">Recaps</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      Game Analysis
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </>
        )}

      </div>
    </section>
  );
}
