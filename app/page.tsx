import Cards from "./components/Cards";
import FeaturesSection from "./components/FeaturesSections";
import Headlines from "./components/Headlines";
import BentoGrid from "./components/BentoGrid";
import TrendingTopics from "./components/TrendingTopics";
import NewsletterSignup from "./components/NewsletterSignup";

export default function Home() {
  return (
    <>
      {/* Main content container with dark background */}
      <div className="bg-black min-h-screen text-white">
        {/* Headlines section */}
        <Headlines />

        {/* Trending Topics section */}
        <TrendingTopics />

        {/* Dynamic Bento Grid Section */}
        <BentoGrid />

        {/* Cards Section */}
        <Cards />

        {/* Newsletter Signup */}
        <NewsletterSignup />

        {/* Features Section */}
        <FeaturesSection />
      </div>
    </>
  );
}
