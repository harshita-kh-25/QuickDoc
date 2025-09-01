import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-sm text-gray-400 px-6 sm:px-10 md:px-20 pt-14 pb-6">
      {/* Top section with grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-12">
        {/* Logo + tagline (span full on mobile) */}
        <div className="col-span-2 sm:col-span-3 md:col-span-1">
          <h3 className="text-white font-bold text-2xl mb-3">Anarisk</h3>
          <p className="text-gray-400 text-md leading-relaxed max-w-xs">
            Latest in risk intelligence—delivered.
          </p>
        </div>

        {/* Footer columns */}
        <div>
          <h4 className="text-white font-semibold mb-3">Home</h4>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Product</h4>
          <ul className="space-y-2">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Integration</a></li>
            <li><a href="#">Risk categories</a></li>
            <li><a href="#">Compliance score</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">API Documentation</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Use Case</h4>
          <ul className="space-y-2">
            <li><a href="#">Compliance Monitoring</a></li>
            <li><a href="#">Cybersecurity Risk Detection</a></li>
            <li><a href="#">Vendor Risk Assessment</a></li>
            <li><a href="#">Financial Document Review</a></li>
            <li><a href="#">Internal Audit Prep</a></li>
          </ul>
        </div>
      </div>

      {/* Social + Subscribe */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-800 pt-6">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <span className="text-white text-sm font-medium">Our Socials :</span>
          <FaFacebookF className="text-white/80 hover:text-white cursor-pointer" />
          <FaXTwitter className="text-white/80 hover:text-white cursor-pointer" />
          <FaInstagram className="text-white/80 hover:text-white cursor-pointer" />
          <FaLinkedinIn className="text-white/80 hover:text-white cursor-pointer" />
        </div>

        {/* Subscribe Form */}
        <form className="flex flex-col sm:flex-row items-stretch bg-[#1A1A1A] border border-gray-700 overflow-hidden rounded-md w-full sm:w-auto gap-1">
  <input
    type="email"
    placeholder="Enter your business email"
    className="bg-transparent px-4 py-2 text-white text-sm placeholder-gray-500 flex-1 outline-none"
  />
  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 sm:rounded-none sm:rounded-r-md transition"
  >
    Subscribe
  </button>
</form>

      </div>

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2 md:gap-0 text-center">
        <p>© 2025 Anarisk by Elux Space. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">Privacy Notices</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
