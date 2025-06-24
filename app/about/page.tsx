import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-indigo-400 sm:text-5xl lg:text-6xl">
            About The Snap
          </h1>
          <p className="mt-6 text-xl text-gray-300 leading-8">
            Your premier destination for in-depth NFL analysis, power rankings, and the latest football news.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At The Snap, we&apos;re passionate about delivering comprehensive NFL coverage that goes beyond the surface. 
              Our team of dedicated football analysts brings you weekly power rankings, breaking news, and insightful 
              commentary that helps you stay ahead of the game.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">What We Offer</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">Weekly Power Rankings</h3>
                <p className="text-gray-300">
                  Our comprehensive NFL power rankings are updated weekly, providing detailed analysis of each team&apos;s 
                  performance, trends, and outlook.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">Breaking News</h3>
                <p className="text-gray-300">
                  Stay up-to-date with the latest NFL headlines, trades, injuries, and developments that impact 
                  your favorite teams.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">Expert Analysis</h3>
                <p className="text-gray-300">
                  Our experienced analysts provide deep insights into game strategies, player performances, 
                  and season-long trends.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">Community Focus</h3>
                <p className="text-gray-300">
                  We believe football is more than just a game—it&apos;s a community. Join our growing audience 
                  of passionate NFL fans.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose The Snap?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-indigo-400 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Accurate & Timely</h3>
                  <p className="text-gray-300">
                    We pride ourselves on delivering accurate information and timely updates that you can trust.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-indigo-400 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Unbiased Coverage</h3>
                  <p className="text-gray-300">
                    Our analysis is fair and unbiased, focusing on facts and performance rather than speculation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-indigo-400 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Fan-Focused Content</h3>
                  <p className="text-gray-300">
                    Every piece of content we create is designed with the football fan in mind, providing 
                    the insights you crave.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center py-12">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Join The Snap?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Stay connected with us for the latest NFL updates and analysis.
            </p>            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/headlines"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Read Headlines
              </Link>
              <Link
                href="/power-rankings"
                className="border border-indigo-600 hover:bg-indigo-600 text-indigo-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                View Rankings
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
