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
                  TheGameSnap@yahoo.com
                </a>
              </li>
              <li>
                <a href="privacyPolicy" className="hover:text-indigo-400 transition">
                  Privacy Policy
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
         
  
          {/* Socials or Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Follow Us</h3>
            <ul className="space-y-2 text-sm">
<li>
  <a
    href="https://www.instagram.com/thegamesnap"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-indigo-400 transition"
  >
    Instagram
  </a>
</li>
</ul>

          </div>
        </div>
  
        <div className="mt-12 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} The Game Snap. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;