import Cards from "./components/Cards";
import FeaturesSection from "./components/FeaturesSections";
import Headlines from "./components/Headlines";
import BentoGrid from "./components/BentoGrid";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-black">
        {/* Headlines section */}
        <Headlines />

        {/* Dynamic Bento Grid Section */}
        <BentoGrid />

        {/* Separator */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center max-w-4xl mx-auto px-6">
            <div className="w-full border-t border-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
          </div>
        </div>

        {/* Other Sections */}
        <Cards />
        <FeaturesSection />
      </main>
    </>
  );
}
