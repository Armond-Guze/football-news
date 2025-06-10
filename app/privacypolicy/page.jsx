export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-indigo-400 mb-8 text-center">
          Privacy <span className="text-white">Policy</span>
        </h1>

        <section className="mb-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            At <strong className="text-white">The Game Snap</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Information We Collect</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We collect minimal personal information to improve your experience on our site:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Usage data through cookies and similar tracking technologies</li>
            <li>Automatically collected information such as your IP address, browser type, and device details</li>
            <li>Information you voluntarily provide when contacting us or subscribing to newsletters</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">How We Use Your Information</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Your information helps us:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Deliver and improve our football content and website features</li>
            <li>Personalize your experience</li>
            <li>Analyze site usage to optimize performance</li>
            <li>Serve relevant advertisements, including through Google AdSense</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-300 leading-relaxed">
            We use cookies and similar technologies to understand user behavior, enhance your experience, and deliver personalized content and ads. You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Third-Party Services</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We partner with trusted third-party services such as Google AdSense to display relevant ads. These services may collect data through cookies and tracking technologies in accordance with their own privacy policies.
          </p>
          <p className="text-gray-300 leading-relaxed">
            For more information about Google’s advertising practices and to opt out of personalized ads, visit&nbsp;
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">
              Google Ads Privacy & Terms
            </a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Your Rights</h2>
          <p className="text-gray-300 leading-relaxed">
            You have the right to access, correct, or delete your personal data. If you have questions or requests regarding your information, please contact us at&nbsp;
            <a href="mailto:privacy@thegamesnap.com" className="text-indigo-400 underline">privacy@thegamesnap.com</a>.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Children’s Privacy</h2>
          <p className="text-gray-300 leading-relaxed">
            Our site is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <footer className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} The Game Snap. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
