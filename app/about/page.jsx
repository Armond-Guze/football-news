export default function About() {
  return (
    <div className="min-h-screen p-8 text-gray-900 dark:text-white max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About The Game Snap</h1>

      <p className="mb-6">
        <strong>The Game Snap</strong> is a modern football media brand built by fans, for fans. We focus on quarterbacks, key matchups, and emerging storylines in the NFL — offering clean, fast, and insightful content without the noise.
      </p>

      <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
      <p className="mb-6">
        Whether it’s breaking down the top 10 quarterbacks of 2025, publishing highlight reels, or featuring AI-powered football artwork, we create original content that keeps fans engaged and informed.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Why We're Different</h2>
      <p className="mb-6">
        No fluff. No filler. No corporate bias. The Game Snap is independent, digital-native, and designed to scale with the modern football fan in mind. We’re here to challenge the traditional sports media playbook.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="mb-6">
        To bring smart, sharp, and stylish football content to screens everywhere — from mobile to desktop to game day watch parties.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} The Game Snap. All rights reserved.
      </p>
    </div>
  );
}
