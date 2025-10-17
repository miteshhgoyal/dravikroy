import React, { useState } from "react";
import { Phone, MapPin, Facebook, Instagram, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex flex-wrap gap-4 md:gap-6">
              <a
                href="tel:08303701980"
                className="flex items-center gap-2 hover:text-blue-200 transition-colors"
              >
                <Phone size={16} />
                <span>083037 01980</span>
              </a>
              <a
                href="https://maps.app.goo.gl/hTQGWaWZ7V8Gf3VA7"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 hover:text-blue-200 transition-colors"
              >
                <MapPin size={16} />
                <span>E-1/709, Sector 1, Gomti Nagar, Lucknow</span>
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/aasraroboticsclinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/aasrarobotics/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="flex items-center">
              <h1 className="text-3xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800">Dr Avik Roy</h1>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </a>
              <a
                href="/testimonials"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Testimonials
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </a>
            </div>

            <a
              href="tel:08303701980"
              className="hidden lg:block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              08303701980
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4">
              <div className="flex flex-col gap-3">
                <a
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Home
                </a>
                <a
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  About
                </a>
                <a
                  href="/testimonials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Testimonials
                </a>
                <a
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Contact
                </a>
                <a
                  href="tel:08303701980"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-center font-medium"
                >
                  08303701980
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
