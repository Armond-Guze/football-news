import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import FeaturesSection from "./components/FeaturesSections";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-900">
        <Cards className="text-black mt-6" />
        <FeaturesSection />
        <Footer />
      </main>
    </>
  );
}
