import { useLocation, Link } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/About" },
  { label: "Contact Us", path: "/Contact" },
];

function combineClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-gray-900 text-white font-pop sticky top-0 z-50 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400">
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Logo and Navigation Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <img
                  className="h-9 w-auto transition-transform group-hover:scale-105"
                  src="/logo.webp"
                  onError={(e) => {
                    e.currentTarget.src = "https://i.ibb.co/GJVVhyR/logo.webp";
                  }}
                  alt="Dentistry Logo"
                />
                <span className="text-xl font-bold tracking-wide text-white group-hover:text-teal-400 transition-colors">
                  Dentistry
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:items-center">
              <div className="flex space-x-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={combineClasses(
                      location.pathname === link.path
                        ? "bg-gray-800 text-teal-400 font-semibold"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white",
                      "rounded-md px-3.5 py-2 text-sm transition-colors"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact quick actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 text-xs text-gray-300 hover:text-teal-300 transition-colors"
              title="Call Dentistry Helpline"
            >
              <PhoneIcon className="h-4 w-4 text-teal-400" />
              <span>+91 98765-43210</span>
            </a>
            <Link
              to="/Contact"
              className="bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-all shadow-sm"
            >
              Book Visit
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden bg-gray-900 border-t border-gray-800">
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navLinks.map((link) => (
            <DisclosureButton
              key={link.label}
              as={Link}
              to={link.path}
              className={combineClasses(
                location.pathname === link.path
                  ? "bg-gray-800 text-teal-400 font-semibold"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {link.label}
            </DisclosureButton>
          ))}
          <div className="pt-2 border-t border-gray-800 flex flex-col space-y-2">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 text-sm text-gray-300 py-1"
            >
              <PhoneIcon className="h-4 w-4 text-teal-400" />
              <span>+91 98765-43210 (Main)</span>
            </a>
            <a
              href="tel:+919123456789"
              className="flex items-center space-x-2 text-sm text-gray-300 py-1"
            >
              <PhoneIcon className="h-4 w-4 text-amber-400" />
              <span>+91 91234-56789 (Alt / Emergency)</span>
            </a>
            <Link
              to="/Contact"
              className="bg-teal-600 hover:bg-teal-500 text-white text-center text-sm font-semibold py-2 rounded-md transition-colors"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
