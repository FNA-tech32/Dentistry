import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/logo.webp"
                onError={(e) => {
                  e.currentTarget.src = "https://i.ibb.co/GJVVhyR/logo.webp";
                }}
                alt="Dentistry Logo"
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold text-white tracking-wide">
                Dentistry
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Providing modern, compassionate, and personalized dental care for
              patients of all ages. Experience stress-free dental visits.
            </p>
            <div className="text-xs text-teal-400 font-medium">
              ✨ 24/7 Emergency Care Available
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="hover:text-teal-400 transition-colors">
                  Contact & Appointments
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (Primary & Alternative) */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Details
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="text-white block font-medium">📍 Address:</span>
                1456 Pearl Avenue, Wellness Nagar, Mumbai
              </li>
              <li>
                <span className="text-white block font-medium">📞 Primary Phone:</span>
                <a href="tel:+919876543210" className="hover:text-teal-400 transition-colors">
                  +91 98765-43210
                </a>
              </li>
              <li>
                <span className="text-teal-300 block font-medium">📞 Alternative / Emergency:</span>
                <a href="tel:+919123456789" className="hover:text-teal-400 transition-colors">
                  +91 91234-56789
                </a>
              </li>
              <li>
                <span className="text-white block font-medium">📧 Primary Email:</span>
                <a href="mailto:contact@dentistry.com" className="hover:text-teal-400 transition-colors">
                  contact@dentistry.com
                </a>
              </li>
              <li>
                <span className="text-teal-300 block font-medium">📧 Alternative Email:</span>
                <a href="mailto:care@dentistry.com" className="hover:text-teal-400 transition-colors">
                  care@dentistry.com
                </a>
              </li>
            </ul>
          </div>

          {/* Clinic Hours */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Clinic Hours
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-white">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white">10:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-teal-400 font-medium">Emergency Only</span>
              </li>
            </ul>
            <div className="mt-5">
              <Link
                to="/Contact"
                className="inline-block w-full text-center bg-teal-600 hover:bg-teal-500 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors"
              >
                Schedule an Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Dentistry. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Dedicated to gentle, ethical, and high-quality oral healthcare.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
