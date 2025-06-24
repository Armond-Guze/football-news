"use client";

import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden text-white py-24 sm:py-32 z-0">
      {/* Background image layer */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/backgroundImage.jpeg"
          alt="Section texture background"
          fill
          quality={100}
          priority
          className="object-cover"
        />
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 -z-10" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                <h2 className="text-base font-bold leading-7 text-indigo-400 uppercase tracking-wider">
                  The Best in the Game
                </h2>
              </div>
              <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
                What Makes Elite QBs <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Unstoppable</span>
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Quarterbacks like Mahomes, Burrow, and Jackson aren&apos;t just athletes—they&apos;re playmakers, leaders, and culture-setters. Here&apos;s what sets them apart from the rest.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-300 lg:max-w-none">
                <div className="relative pl-12 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <dt className="inline font-bold text-white">
                    <svg
                      className="absolute top-5 left-4 size-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Patrick Mahomes&apos; improvisation.
                  </dt>
                  <dd className="inline">
                    With his no-look passes, sidearm throws, and unreal pocket awareness, Mahomes turns broken plays into highlight reels.
                  </dd>
                </div>

                <div className="relative pl-12 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <dt className="inline font-bold text-white">
                    <svg
                      className="absolute top-5 left-4 size-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Joe Burrow&apos;s poise under pressure.
                  </dt>
                  <dd className="inline">
                    Cool, calculated, and confident—Burrow thrives in tight pockets and clutch moments, making big-time throws look routine.
                  </dd>
                </div>

                <div className="relative pl-12 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <dt className="inline font-bold text-white">
                    <svg
                      className="absolute top-5 left-4 size-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                      <path
                        fillRule="evenodd"
                        d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Lamar Jackson&apos;s game-breaking speed.
                  </dt>
                  <dd className="inline">
                    In an instant, Jackson can flip the field with his legs. His ability to escape and accelerate makes him a threat from anywhere.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right-side image with enhanced styling */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
            <Image
              src="/images/helmet-background.png"
              alt="Quarterback helmet and background"
              className="relative w-full max-w-s rounded-2xl shadow-2xl ring-1 ring-white/20 hover:scale-105 transition-transform duration-500"
              width={1400}
              height={1250}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
