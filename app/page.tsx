import Cards from "./components/Cards";
import FeaturesSection from "./components/FeaturesSections";
import Headlines from "./components/Headlines";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-slate-900">
        {/* Headlines section */}
        <Headlines />

        {/* Power Rankings Feature Thumbnail */}
        <section className="relative px-6 py-12">
          <h2 className="text-3xl font-bold text-white mb-6">Power Rankings</h2>

          <Link href="/power-rankings" className="block group mx-auto max-w-5xl">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="/images/lombardi-trophy.png"
                alt="Power Rankings Thumbnail"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gets darker on hover */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl sm:text-4xl font-semibold text-center">
                </h3>
              </div>
            </div>
          </Link>
        </section>        {/* Other Sections */}
        <Cards />
        <FeaturesSection />
      </main>
    </>
  );
}
