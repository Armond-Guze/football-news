import Navbar from './components/Navbar';
import Cards from './components/Cards';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-6 bg-white">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Football News</h1>
        <p className="mt-4 text-lg text-gray-600">
          Stay updated with the latest in football — scores, rumors, and stories.
        </p>
        <Cards className="text-black mt-6"/>
      </main>
    </>
  );
}
