"use client";

import React from "react";
import {
  Award,
  Heart,
  Stethoscope,
  Activity,
  Clock,
  Users,
  CheckCircle2,
  Star,
  Shield,
  Target,
  TrendingUp,
  ChevronRight,
  Phone,
  Bone,
  HeartPulse,
  Scissors,
} from "lucide-react";
import Image from "next/image";
import doctorImage from "../../assets/image.jpg";

const AboutPage = () => {
  const expertise = [
    {
      title: "Joint Replacement Surgery",
      icon: <Bone className="w-10 h-10" />,
      gradient: "from-blue-500 to-blue-600",
      link: "/treatment/joint-replacement",
    },
    {
      title: "Hip Replacement Surgery",
      icon: <HeartPulse className="w-10 h-10" />,
      gradient: "from-indigo-500 to-indigo-600",
      link: "/treatment/hip-replacement",
    },
    {
      title: "Knee Replacement Surgery",
      icon: <Target className="w-10 h-10" />,
      gradient: "from-purple-500 to-purple-600",
      link: "/treatment/knee-replacement",
    },
    {
      title: "Arthroscopic Surgery",
      icon: <Activity className="w-10 h-10" />,
      gradient: "from-cyan-500 to-cyan-600",
      link: "/treatment/arthroscopy",
    },
    {
      title: "ACL Tear",
      icon: <Shield className="w-10 h-10" />,
      gradient: "from-teal-500 to-teal-600",
      link: "/treatment/acl-tear",
    },
    {
      title: "PCL Tear",
      icon: <Scissors className="w-10 h-10" />,
      gradient: "from-emerald-500 to-emerald-600",
      link: "/treatment/pcl-tear",
    },
  ];

  const specialties = [
    "Joint Replacement Surgery (Knee, Hip, Shoulder)",
    "Arthroscopic (Keyhole) Surgery",
    "Sports Injury Management",
    "Spine and Back Care",
    "Fracture and Trauma Management",
    "Pediatric Orthopedics",
    "Physical Rehabilitation & Post-op Care",
  ];

  const achievements = [
    {
      icon: Users,
      number: "5000+",
      label: "Happy Patients",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      number: "11+",
      label: "Years Experience",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Star,
      number: "4.9",
      label: "Patient Rating",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Success Rate",
      color: "from-green-500 to-green-600",
    },
  ];

  const whyChoose = [
    {
      icon: Award,
      title: "Expert Care",
      description:
        "MCh Joint Replacement from AIIMS Raipur 2023 with 11+ years experience",
      color: "blue",
    },
    {
      icon: Activity,
      title: "Advanced Technology",
      description:
        "State-of-the-art diagnostic and minimally invasive surgical techniques",
      color: "indigo",
    },
    {
      icon: Heart,
      title: "Personalized Treatment",
      description:
        "Customized care plans tailored to each patient's unique needs",
      color: "purple",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Care",
      description:
        "Round-the-clock availability for urgent orthopedic emergencies",
      color: "pink",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden py-12">
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
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Stethoscope size={20} className="text-blue-300" />
                <span className="text-sm font-medium">
                  Meet Your Orthopedic Specialist
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Dr. Avik Roy
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-4 font-light">
                Leading Orthopedic Surgeon
              </p>

              <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                Specializing in Joint Replacement, Arthroscopy & Trauma Surgery
                with over 11 years of excellence
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                  >
                    <p className="text-2xl md:text-3xl font-bold mb-1">
                      {achievement.number}
                    </p>
                    <p className="text-xs text-blue-200">{achievement.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:08303701980"
                  className="group bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all inline-flex items-center gap-2 shadow-xl hover:shadow-2xl"
                >
                  <Phone size={20} />
                  Call Now
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="#specialties"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={doctorImage}
                  alt="Dr. Avik Roy - Orthopedic Surgeon"
                  className="w-full h-auto"
                  width={600}
                  height={800}
                  priority
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl">
                      <Award className="text-white" size={28} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">
                        MCh Degree Recipient
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

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
              <Heart size={20} />
              <span className="font-semibold">Welcome to AASRA Clinic</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Where Compassionate Care Meets
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Advanced Orthopedic Expertise
              </span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Stethoscope className="text-blue-600" size={28} />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Led by renowned orthopedic surgeon Dr. Avik Roy, our clinic is
                  dedicated to restoring mobility, relieving pain, and improving
                  the quality of life for patients of all ages.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="bg-indigo-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Target className="text-indigo-600" size={28} />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Dr. Avik Roy is a distinguished orthopedic surgeon based in
                  Lucknow, Uttar Pradesh, with over 11 years of experience
                  specializing in joint replacement, arthroscopy, and trauma
                  surgery.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="bg-purple-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Award className="text-purple-600" size={28} />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Active member of the Indian Orthopaedic Association and Uttar
                  Pradesh Orthopaedic Association. Recipient of the prestigious
                  MCh Joint Replacement and Reconstruction degree from AIIMS
                  Raipur in 2023.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="bg-green-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Activity className="text-green-600" size={28} />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Whether dealing with sports injuries, joint pain, arthritis,
                  or complex fractures, we provide comprehensive diagnostic,
                  surgical, and non-surgical solutions tailored to your unique
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
              <Shield size={20} />
              <span className="font-semibold">Areas of Expertise</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Orthopedic Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced surgical and non-surgical solutions for all your
              musculoskeletal needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {expertise.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group bg-gradient-to-br from-gray-50 to-white hover:from-blue-50 hover:to-indigo-50 p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100"
              >
                <div
                  className={`bg-gradient-to-br ${item.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all text-white shadow-lg`}
                >
                  {item.icon}
                </div>
                <h3 className="text-gray-900 font-medium text-sm leading-tight">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section
        id="specialties"
        className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
                <Stethoscope size={20} />
                <span className="font-semibold">Our Specializations</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Specialized Care Across Multiple Disciplines
              </h2>
            </div>

            <div className="space-y-3 mb-8">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:scale-[1.02] border border-gray-100"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium pt-1.5">
                    {specialty}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-10 rounded-2xl text-white shadow-xl">
              <div className="flex items-start gap-6">
                <div className="bg-white/20 p-4 rounded-xl">
                  <Heart className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-lg leading-relaxed mb-4">
                    At AASRA Clinic, we believe in treating the whole person—not
                    just the condition. We take the time to listen, educate, and
                    involve our patients in every step of their recovery
                    journey.
                  </p>
                  <p className="text-xl font-bold">
                    Let us help you get back on your feet—stronger and healthier
                    than ever before.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
              <Star size={20} />
              <span className="font-semibold">Why Choose Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Excellence in Every Aspect of Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining expertise, technology, and compassion to deliver
              exceptional orthopedic outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 group-hover:border-transparent group-hover:text-white h-full">
                  <div
                    className={`bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors`}
                  >
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all border border-gray-100"
                >
                  <div
                    className={`bg-gradient-to-br ${achievement.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <achievement.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {achievement.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
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
              <Phone size={20} className="text-blue-300" />
              <span className="font-semibold">
                Ready to Start Your Recovery?
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Take the First Step Towards
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                Pain-Free Movement
              </span>
            </h2>

            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Book your consultation with Dr. Avik Roy and experience
              world-class orthopedic care in Lucknow
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <a
                href="tel:08303701980"
                className="group bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all inline-flex items-center gap-3 shadow-2xl hover:shadow-blue-500/50"
              >
                <Phone size={24} />
                08303701980
                <ChevronRight
                  size={24}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center gap-3"
              >
                Book Appointment Online
                <ChevronRight size={24} />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold mb-2">11+</p>
                <p className="text-blue-200 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">5000+</p>
                <p className="text-blue-200 text-sm">Patients Treated</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">98%</p>
                <p className="text-blue-200 text-sm">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">24/7</p>
                <p className="text-blue-200 text-sm">Emergency Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
