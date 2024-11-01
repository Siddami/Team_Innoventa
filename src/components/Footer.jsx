const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/login" className="hover:underline">Login</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">If you have any questions, feel free to reach out:</p>
            <p className="flex items-center mb-2">
              <i className='bx bx-envelope text-xl mr-2'></i>
              <span>Email: <a href="mailto:support@auditifyx.com" className="hover:underline">support@auditifyx.com</a></span>
            </p>
            <p className="flex items-center">
              <i className='bx bx-phone text-xl mr-2'></i>
              <span>Phone: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></span>
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-wrap space-x-2">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                <i className='bx bxl-facebook-square text-2xl mr-1'></i> Facebook
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                <i className='bx bxl-twitter text-2xl mr-1'></i> Twitter
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                <i className='bx bxl-linkedin-square text-2xl mr-1'></i> LinkedIn
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                <i className='bx bxl-instagram text-2xl mr-1'></i> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} AuditifyX created by Team Innoventa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
