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
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-slate-200 opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Expert Orthopedic Care in Lucknow
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Specialized in joint replacement, arthroscopy, and trauma
                surgery with over 11 years of experience
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:08303701980"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors font-medium text-lg"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&q=80"
                alt="Medical Professional"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-blue-100">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Stethoscope className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Expert Orthopedic Surgeon
              </h3>
              <p className="text-gray-600">
                Easy treatment with expert care and advanced techniques
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-blue-100">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Emergency Service
              </h3>
              <p className="text-gray-600">
                24/7 Emergency services available for urgent care
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-blue-100">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
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
              <span className="text-blue-600 font-semibold uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Dr. Avik Roy
              </h2>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                <strong>Dr. Avik Roy</strong> is a distinguished orthopedic
                surgeon based in Lucknow, Uttar Pradesh, with over{" "}
                <strong>11 years of experience</strong> in the field. He
                specializes in <strong>joint replacement, arthroscopy,</strong>{" "}
                and <strong>trauma surgery</strong>, offering comprehensive care
                for musculoskeletal disorders.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl">
                  <div className="bg-blue-600 p-4 rounded-full mb-4">
                    <Award className="text-white" size={28} />
                  </div>
                  <p className="text-gray-900 font-semibold">
                    Expert Orthopedic Surgeon
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl">
                  <div className="bg-blue-600 p-4 rounded-full mb-4">
                    <Activity className="text-white" size={28} />
                  </div>
                  <p className="text-gray-900 font-semibold">
                    Advanced Techniques
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl">
                  <div className="bg-blue-600 p-4 rounded-full mb-4">
                    <Heart className="text-white" size={28} />
                  </div>
                  <p className="text-gray-900 font-semibold">
                    Personalized Care
                  </p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="#contact"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium shadow-lg"
                >
                  Read More
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
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Treatment
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              We Provide The Best Orthopedic Treatment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium text-lg shadow-lg"
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
            <span className="text-blue-200 font-semibold uppercase tracking-wider">
              Orthopedic
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Excellence in Orthopedic Care and Recovery
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Experienced Team",
              "Advanced Technology",
              "Personalized Treatment",
              "Convenient & Accessible",
              "Expertise & Experience",
              "Community Involvement",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-colors"
              >
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={24} />
                </div>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Treatment Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <span className="text-blue-600 font-semibold uppercase tracking-wider">
                  Quality Treatment
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                  We Proudly Give Quality Treatment
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We understand that orthopedic injuries and acute joint or
                  muscle pain can happen unexpectedly. Our emergency orthopedic
                  services are designed to provide prompt and effective care to
                  help you manage discomfort and begin your recovery quickly.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ChevronRight className="text-white" size={24} />
                  </div>
                  <p className="text-gray-900 font-semibold">
                    Joint Replacement Surgery
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ChevronRight className="text-white" size={24} />
                  </div>
                  <p className="text-gray-900 font-semibold">
                    Hip Replacement Surgery
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ChevronRight className="text-white" size={24} />
                  </div>
                  <p className="text-gray-900 font-semibold">
                    Knee Replacement Surgery
                  </p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="#contact"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium shadow-lg"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section - Simplified */}
      <section id="cases" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Cases
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Orthopedic Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all border border-blue-100"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Client Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Our Clients Reviews
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At orthopedic, we pride ourselves on providing exceptional
              orthopedic services that deliver real results. But don't just take
              our word for it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
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
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
