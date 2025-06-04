export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-indigo-400 mb-8 text-center">
          About <span className="text-white">The Game Snap</span>
        </h1>

        <section className="mb-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            <strong className="text-white">The Game Snap</strong> is a modern football media brand built by fans, for fans.
            We focus on quarterbacks, key matchups, and emerging storylines in the NFL — offering clean, fast, and insightful
            content without the noise.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Breakdowns of the top quarterbacks of 2025</li>
            <li>Highlight reels and game recaps</li>
            <li>AI-powered football art and infographics</li>
            <li>Editorial content that’s actually worth reading</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Why We're Different</h2>
          <p className="text-gray-300 leading-relaxed">
            No fluff. No filler. No corporate bias. <strong className="text-white">The Game Snap</strong> is independent,
            digital-native, and designed to scale with the modern football fan in mind. We’re here to challenge the
            traditional sports media playbook.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            To bring smart, sharp, and stylish football content to screens everywhere — from mobile to desktop to game day watch parties.
          </p>
        </section>

        <footer className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} The Game Snap. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
