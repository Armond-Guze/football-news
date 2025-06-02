import Navbar from './components/Navbar';
import Cards from './components/Cards';
import ContactPage from './components/ContactPage';
import FeaturesSection from './components/FeaturesSections';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Cards className="text-black mt-6"/>
        <FeaturesSection />
        <ContactPage className="text-black mt-6" />
        <Footer />
      </main>
    </>
  );
}
