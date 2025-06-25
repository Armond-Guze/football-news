import Cards from "./components/Cards";
import FeaturesSection from "./components/FeaturesSections";
import Headlines from "./components/Headlines";
import BentoGrid from "./components/BentoGrid";

export default function Home() {
  return (
    <>
      {/* Main content container that flows seamlessly with navbar/footer */}
      <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white">
        {/* Headlines section */}
        <Headlines />

        {/* Dynamic Bento Grid Section */}
        <BentoGrid />

        {/* Cards Section */}
        <Cards />

        {/* Features Section */}
        <FeaturesSection />
      </div>
    </>
  );
}
