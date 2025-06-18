import Cards from "./components/Cards";
import FeaturesSection from "./components/FeaturesSections";
import Headlines from "./components/Headlines";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-slate-900">
        <Headlines />
        <Cards className="text-black mt-6" />
        <FeaturesSection />
      </main>
    </>
  );
}
