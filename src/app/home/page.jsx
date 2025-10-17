"use client";

import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Menu,
  X,
  Star,
  ChevronRight,
  Award,
  Users,
  Clock,
  Stethoscope,
  Activity,
  Heart,
  Scissors,
  Bone,
  HeartPulse,
  Target,
  Shield,
  Calendar,
  CheckCircle2,
} from "lucide-react";

const page = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const treatments = [
    {
      title: "Joint Replacement Surgery",
      description:
        "Hip and knee osteoarthritis among other musculoskeletal problems are the leading causes of disability in India",
      icon: <Bone className="w-12 h-12" />,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Hip Replacement Surgery",
      description:
        "Hip Replacement surgery is commonly performed to cure progressive arthritis.",
      icon: <HeartPulse className="w-12 h-12" />,
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Knee Replacement Surgery",
      description:
        "Knee joint has a layer of smooth cartilage between end of thighbone and top of calf bone.",
      icon: <Target className="w-12 h-12" />,
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Arthroscopy",
      description:
        "Arthroscopy is a surgical procedure by which the internal structure of a joint is examined for diagnosis",
      icon: <Activity className="w-12 h-12" />,
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      title: "ACL Tear",
      description:
        "ACL or Anterior Cruciate Ligament tear is a common knee injury. Most athletes playing high impact sports",
      icon: <Shield className="w-12 h-12" />,
      gradient: "from-teal-500 to-teal-600",
    },
    {
      title: "PCL Tear",
      description:
        "Posterior Cruciate Ligament or PCL tear is a less common knee injury when compared to the ACL tear.",
      icon: <Scissors className="w-12 h-12" />,
      gradient: "from-emerald-500 to-emerald-600",
    },
  ];

  const testimonials = [
    {
      name: "Akshat Pokhariyal",
      text: "I met him in the case of emergency regarding my son and he handled the entire situation so well that we were relieved immediately and my son was immediately out of pain. Very humble behaviour and helpful doctor. Thank u Dr Avik sir for your help.",
    },
    {
      name: "Kanchan Singh",
      text: "I had great experience with AASRA CLINIC team. Dr Avik Roy is highly experienced and supportive, The staff is very cooperative and helpful. Hip replacement of my family member was done and started walking on next day.",
    },
    {
      name: "Dharmendra Tewari",
      text: "Dr Avik Roy is the best joint replacement surgeon in lucknow gomtinagar. Unhone humare mareez ka Hip Replacement Kia tha. She is walking like nothing has ever happened to her. Very very happy. Thank you sir",
    },
    {
      name: "Shailesh Pratap Singh",
      text: "I suffered a knee injury where almost 100% of my ACL was broken. I then visited Dr. Avik Roy for the treatment. The doctor suggested PRP treatment for the same. The treatment showed remarkable results and I am back with my football practice and everything.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Redesigned to match other pages */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 md:py-32 overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Stethoscope size={20} className="text-blue-300" />
                <span className="text-sm font-medium">
                  Premier Orthopedic Care in Lucknow
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Expert Orthopedic Care in Lucknow
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Specialized in joint replacement, arthroscopy, and trauma
                surgery with over 11 years of experience
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <p className="text-2xl md:text-3xl font-bold mb-1">11+</p>
                  <p className="text-xs text-blue-200">Years Experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <p className="text-2xl md:text-3xl font-bold mb-1">5000+</p>
                  <p className="text-xs text-blue-200">Happy Patients</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <p className="text-2xl md:text-3xl font-bold mb-1">98%</p>
                  <p className="text-xs text-blue-200">Success Rate</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all inline-flex items-center gap-2 shadow-xl hover:shadow-2xl"
                >
                  <Calendar size={20} />
                  Book Appointment
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="tel:08303701980"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all inline-flex items-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative h-fit">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&q=80"
                  alt="Dr. Avik Roy - Orthopedic Surgeon"
                  className="w-full h-[600px] object-cover object-top"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl">
                      <Award className="text-white" size={28} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">
                        MCh Joint Replacement
                      </p>
                      <p className="text-sm text-gray-600">AIIMS Raipur 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white relative -mt-16 z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 group hover:scale-105">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Stethoscope className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Expert Orthopedic Surgeon
              </h3>
              <p className="text-gray-600">
                Easy treatment with expert care and advanced techniques
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 group hover:scale-105">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Emergency Service
              </h3>
              <p className="text-gray-600">
                24/7 Emergency services available for urgent care
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 group hover:scale-105">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Best Consultant
              </h3>
              <p className="text-gray-600">
                Personalized advice and consultation with experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
                <Heart size={20} />
                <span className="font-semibold">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dr. Avik Roy
              </h2>
              <p className="text-xl text-gray-600">
                Distinguished Orthopedic Surgeon • 11+ Years Experience
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                <strong>Dr. Avik Roy</strong> is a distinguished orthopedic
                surgeon based in Lucknow, Uttar Pradesh, with over{" "}
                <strong>11 years of experience</strong> in the field. He
                specializes in <strong>joint replacement, arthroscopy,</strong>{" "}
                and <strong>trauma surgery</strong>, offering comprehensive care
                for musculoskeletal disorders.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-all">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 rounded-full mb-4">
                    <Award className="text-white" size={28} />
                  </div>
                  <p className="text-gray-900 font-semibold">
                    Expert Orthopedic Surgeon
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-all">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 rounded-full mb-4">
                    <Activity className="text-white" size={28} />
                  </div>
                  <p className="text-gray-900 font-semibold">
                    Advanced Techniques
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-all">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 rounded-full mb-4">
                    <Heart className="text-white" size={28} />
                  </div>
                  <p className="text-gray-900 font-semibold">
                    Personalized Care
                  </p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="/about"
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all font-medium shadow-lg"
                >
                  Read More About Dr. Roy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Section */}
      <section id="treatment" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
              <Activity size={20} />
              <span className="font-semibold">Treatment</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Provide The Best Orthopedic Treatment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the best orthopedic treatment, specializing in joint
              replacement, sports injuries, and advanced minimally invasive
              procedures for optimal recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`relative h-48 bg-gradient-to-br ${treatment.gradient} flex items-center justify-center`}
                >
                  <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                    {treatment.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  <button className="flex items-center gap-2 text-blue-600 font-medium hover:gap-4 transition-all">
                    Learn More <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all font-medium text-lg shadow-lg"
            >
              Contact Now
            </a>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award size={20} className="text-blue-200" />
              <span className="font-semibold">Orthopedic Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Excellence in Orthopedic Care and Recovery
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive orthopedic services backed by years of expertise and
              advanced medical technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Users, text: "Experienced Team" },
              { icon: Activity, text: "Advanced Technology" },
              { icon: Heart, text: "Personalized Treatment" },
              { icon: Clock, text: "Convenient & Accessible" },
              { icon: Award, text: "Expertise & Experience" },
              { icon: Shield, text: "Community Involvement" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} />
                </div>
                <p className="font-medium text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Treatment Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
                  <CheckCircle2 size={20} />
                  <span className="font-semibold">Quality Treatment</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  We Proudly Give Quality Treatment
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We understand that orthopedic injuries and acute joint or
                  muscle pain can happen unexpectedly. Our emergency orthopedic
                  services are designed to provide prompt and effective care to
                  help you manage discomfort and begin your recovery quickly.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Bone, text: "Joint Replacement Surgery" },
                  { icon: HeartPulse, text: "Hip Replacement Surgery" },
                  { icon: Target, text: "Knee Replacement Surgery" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center hover:shadow-lg transition-all"
                  >
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="text-white" size={28} />
                    </div>
                    <p className="text-gray-900 font-semibold">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all font-medium shadow-lg"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
              <Award size={20} />
              <span className="font-semibold">Cases</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Orthopedic Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Successful treatment outcomes across various orthopedic conditions
              with personalized care and advanced surgical techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Bone, label: "Joint Replacements", count: "500+" },
              { icon: HeartPulse, label: "ACL Repairs", count: "300+" },
              { icon: Activity, label: "Arthroscopy", count: "400+" },
              { icon: Shield, label: "Trauma Cases", count: "600+" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all border border-gray-100 hover:scale-105"
              >
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">
                  {item.count}
                </h3>
                <p className="text-gray-700 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
              <Star size={20} />
              <span className="font-semibold">Client Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Clients Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At AASRA Clinic, we pride ourselves on providing exceptional
              orthopedic services that deliver real results. But don't just take
              our word for it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:scale-[1.02]"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-yellow-400 text-yellow-400"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/testimonials"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all font-medium text-lg shadow-lg"
            >
              View All Testimonials
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
