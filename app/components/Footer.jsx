const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-100 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@footballnews.com" className="hover:text-indigo-400 transition">
                  info@footballnews.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-indigo-400 transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Contact Form
                </a>
              </li>
            </ul>
          </div>
  
          
  
          {/* Filler Section 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Highlights</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Analytics</a></li>
            </ul>
          </div>
  
          {/* Socials or Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition">Instagram</a></li>
            </ul>
          </div>
        </div>
  
        <div className="mt-12 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} FootballNews. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;