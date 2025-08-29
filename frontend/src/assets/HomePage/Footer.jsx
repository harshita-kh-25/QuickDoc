import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-sm text-gray-400 px-6 md:px-20 pt-14 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">

        {/* Logo + tagline */}
        <div>
          <h3 className="text-white font-bold text-xl mb-2">Anarisk</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Latest in risk intelligence—delivered.
          </p>
        </div>

        {/* Footer columns */}
        <div>
          <h4 className="text-white font-semibold mb-3">Home</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Product</h4>
          <ul className="space-y-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>Integration</li>
            <li>Risk categories</li>
            <li>Compliance score</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>API Documentation</li>
            <li>Tutorials</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Use Case</h4>
          <ul className="space-y-2">
            <li>Compliance Monitoring</li>
            <li>Cybersecurity Risk Detection</li>
            <li>Vendor Risk Assessment</li>
            <li>Financial Document Review</li>
            <li>Internal Audit Prep</li>
          </ul>
        </div>
      </div>

      {/* Social + Subscribe */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-800 pt-6">
        <div className="flex items-center gap-4">
          <span className="text-white text-sm font-medium">Our Socials :</span>
          <FaFacebookF className="text-white/80 hover:text-white cursor-pointer" />
          <FaXTwitter className="text-white/80 hover:text-white cursor-pointer" />
          <FaInstagram className="text-white/80 hover:text-white cursor-pointer" />
          <FaLinkedinIn className="text-white/80 hover:text-white cursor-pointer" />
        </div>

        <form className="flex items-center bg-[#1A1A1A] border border-gray-700 rounded-full px-4 py-1.5 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your business email"
            className="bg-transparent outline-none text-white text-sm placeholder-gray-500 w-full md:w-60"
          />
          <button
            type="submit"
            className="ml-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-full"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2 md:gap-0">
        <p>© 2025 Anarisk by Elux Space. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">Privacy Notices</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
