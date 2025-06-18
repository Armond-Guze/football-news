export default function About() {
  return (
    <div className="min-h-screen bg-background text-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-indigo-400 mb-8 text-center">About The Game Snap</h1>

        <p className="mb-8 text-lg text-gray-300 leading-relaxed">
          <strong className="text-white">The Game Snap</strong> is a modern football media brand built by fans, for fans. We focus on quarterbacks, key matchups, and emerging storylines in the NFL — offering clean, fast, and insightful content without the noise.
        </p>

        <h2 className="text-3xl font-semibold text-indigo-400 mb-3">What We Offer</h2>
        <p className="mb-8 text-gray-300 leading-relaxed">
          Whether it’s breaking down the top 10 quarterbacks of 2025, publishing highlight reels, or featuring AI-powered football artwork, we create original content that keeps fans engaged and informed.
        </p>

        <h2 className="text-3xl font-semibold text-indigo-400 mb-3">Why We're Different</h2>
        <p className="mb-8 text-gray-300 leading-relaxed">
          No fluff. No filler. No corporate bias. The Game Snap is independent, digital-native, and designed to scale with the modern football fan in mind. We’re here to challenge the traditional sports media playbook.
        </p>

        <h2 className="text-3xl font-semibold text-indigo-400 mb-3">Our Mission</h2>
        <p className="mb-12 text-gray-300 leading-relaxed">
          To bring smart, sharp, and stylish football content to screens everywhere — from mobile to desktop to game day watch parties.
        </p>

        <p className="text-xs text-center text-gray-500 mt-12">
          © {new Date().getFullYear()} The Game Snap. All rights reserved.
        </p>
      </div>
    </div>
  );
}
