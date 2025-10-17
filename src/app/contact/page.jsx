"use client";

import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Send,
  MessageSquare,
  Navigation,
  CheckCircle2,
  Smartphone,
  Calendar,
  User,
  FileText,
  ChevronRight,
  Heart,
  Shield,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us 24/7",
      subtitle: "Emergency & Appointments",
      value: "083037 01980",
      link: "tel:08303701980",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      title: "Working Hours",
      subtitle: "Monday - Saturday",
      value: "9:00 AM - 8:00 PM",
      link: null,
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      icon: MapPin,
      title: "Clinic Address",
      subtitle: "Visit Us",
      value:
        "E-1/709, near Saryu Apartment, Sector 1, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
      link: "https://maps.app.goo.gl/9Bn4NR5zNPAaaYYw6",
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  const quickContact = [
    {
      icon: Phone,
      title: "Emergency Call",
      description: "24/7 emergency orthopedic care",
      action: "Call Now",
      link: "tel:08303701980",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: Calendar,
      title: "Book Appointment",
      description: "Schedule your consultation",
      action: "Book Now",
      link: "#contact-form",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: MessageSquare,
      title: "Send Message",
      description: "Quick inquiry or questions",
      action: "Message Us",
      link: "#contact-form",
      gradient: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin size={20} className="text-blue-300" />
              <span className="font-semibold text-sm">Get In Touch</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Contact Us
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We're here to help you on your journey to better orthopedic health
            </p>

            <nav className="flex justify-center items-center gap-3 text-blue-100">
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
              <ChevronRight size={16} />
              <span className="text-white">Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-white relative -mt-16 z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {quickContact.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 hover:scale-105"
              >
                <div
                  className={`bg-gradient-to-br ${item.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <span className="text-blue-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  {item.action}
                  <ChevronRight size={20} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
              <Phone size={20} />
              <span className="font-semibold">Contact Information</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to connect with Dr. Avik Roy's
              clinic
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 group-hover:border-transparent h-full">
                  <div
                    className={`bg-gradient-to-br ${info.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors shadow-lg`}
                  >
                    <info.icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-blue-100 mb-4 transition-colors">
                    {info.subtitle}
                  </p>

                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-700 group-hover:text-white font-medium transition-colors block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-700 group-hover:text-white font-medium transition-colors">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
              <Navigation size={20} />
              <span className="font-semibold">Find Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Visit Our Clinic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Gomti Nagar, Lucknow - Easily accessible
              with ample parking
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1341570830336!2d81.01126687450197!3d26.835684963398226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3f6fd439bb1%3A0x15747d11bacb5f27!2sAASRA%20CLINIC%20Dr%20Avik%20Roy%20Orthopaedic%2C%20Sports%20Injury%20%26%20Joint%20Replacement%20Surgeon!5e0!3m2!1sen!2sin!4v1744790003755!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a
                href="https://maps.app.goo.gl/9Bn4NR5zNPAaaYYw6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all inline-flex items-center gap-2 shadow-lg"
              >
                <Navigation size={20} />
                Get Directions
              </a>
              <a
                href="tel:08303701980"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all inline-flex items-center gap-2"
              >
                <Phone size={20} />
                Call Before Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
                <MessageSquare size={20} />
                <span className="font-semibold">Send Us a Message</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Book Your Appointment
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Smartphone
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all"
                        placeholder="Enter your phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Subject
                    </label>
                    <div className="relative">
                      <FileText
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all"
                        placeholder="Appointment/Inquiry"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 resize-none transition-all"
                    placeholder="Tell us about your condition or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-5 rounded-full font-bold text-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-3 group shadow-lg"
                >
                  <Send size={24} />
                  Send Message
                  <ChevronRight
                    size={24}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>

              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm mt-6">
                <Shield size={16} className="text-blue-600" />
                <p>
                  We respect your privacy and will never share your information
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
                <Heart size={20} />
                <span className="font-semibold">Why Contact Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Experience Excellence in Orthopedic Care
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: Phone,
                  title: "24/7 Availability",
                  description: "Emergency care available round the clock",
                },
                {
                  icon: Heart,
                  title: "Compassionate Care",
                  description: "Patient-centered approach to treatment",
                },
                {
                  icon: Shield,
                  title: "Expert Team",
                  description: "11+ years of specialized experience",
                },
                {
                  icon: CheckCircle2,
                  title: "Proven Results",
                  description: "98% patient satisfaction rate",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Phone size={20} className="text-red-300 animate-pulse" />
              <span className="font-semibold">Emergency Services</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Need Emergency Orthopedic Care?
            </h2>

            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              We provide 24/7 emergency services for urgent orthopedic
              conditions. Don't hesitate to reach out.
            </p>

            <a
              href="tel:08303701980"
              className="group bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all inline-flex items-center gap-3 shadow-2xl hover:shadow-blue-500/50"
            >
              <Phone size={24} />
              Call Emergency: 083037 01980
              <ChevronRight
                size={24}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold mb-2">24/7</p>
                <p className="text-blue-200 text-sm">Emergency Care</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">&lt;15min</p>
                <p className="text-blue-200 text-sm">Response Time</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">5000+</p>
                <p className="text-blue-200 text-sm">Patients Treated</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">11+</p>
                <p className="text-blue-200 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
