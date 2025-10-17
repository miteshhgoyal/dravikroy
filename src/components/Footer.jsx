import React from "react";
import {
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Heart,
  Stethoscope,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Dr. Avik Roy", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
  ];

  const treatments = [
    { name: "Joint Replacement Surgery", href: "/treatment/joint-replacement" },
    { name: "Hip Replacement Surgery", href: "/treatment/hip-replacement" },
    { name: "Knee Replacement Surgery", href: "/treatment/knee-replacement" },
    { name: "Arthroscopic Surgery", href: "/treatment/arthroscopy" },
    { name: "ACL Tear", href: "/treatment/acl-tear" },
    { name: "PCL Tear", href: "/treatment/pcl-tear" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/aasraroboticsclinic/",
      label: "Facebook",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/aasrarobotics/",
      label: "Instagram",
      color: "bg-pink-600 hover:bg-pink-700",
    },
  ];

  const contactInfo = {
    phone: "08303701980",
    address:
      "E-1/709, near Saryu Apartment, Sector 1, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
    mapLink: "https://maps.app.goo.gl/GvZwUprBrtWnUfGP6",
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 relative z-50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <h1 className="text-3xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800">
                Dr Avik Roy
              </h1>
            </a>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              Expert orthopedic care with over 11 years of experience
              specializing in joint replacement, arthroscopy, and trauma
              surgery.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} p-2.5 rounded-lg text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <Stethoscope className="w-5 h-5 mr-2 text-blue-600" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 flex items-center gap-2 group text-sm"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-blue-600" />
              Contact Us
            </h4>

            <div className="space-y-4">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">{contactInfo.phone}</span>
              </a>

              <a
                href={contactInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{contactInfo.address}</span>
              </a>
            </div>

            {/* Emergency Contact Box */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
              <h5 className="font-semibold text-blue-800 text-sm mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Emergency Care
              </h5>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-blue-700 font-bold text-lg hover:underline"
              >
                {contactInfo.phone}
              </a>
              <p className="text-xs text-blue-600 mt-1">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Heart className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span className="text-sm text-center sm:text-left">
                Copyright © {currentYear} Dr. Avik Roy. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
