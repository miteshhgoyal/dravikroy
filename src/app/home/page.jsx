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
  Microscope,
} from "lucide-react";

const KneeIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <g>
      <path d="M22.91 15.15v55.19C52.94 91.19 99.09 120.3 139.7 148.4c21.1 14.6 40.7 28.9 55.7 41.8 15.1 12.8 26.1 23 29.5 35.7l.3 1v1c.4 15.2 3.7 25.2 7.9 31.2s9.1 8.6 15.6 9.5c12.9 1.9 32.2-6 47.3-19.2 15-13.2 25-30.9 24.2-44.2-.4-6.6-2.9-12.4-9.4-18.1-6.4-5.7-17.3-11.1-33.9-14.6-12-2.5-27.8-11.4-49.3-24.3-21.5-12.8-47.5-29.5-74.5-47.2-47.4-31.24-96.84-64.79-130.19-85.85zM191.9 18c17.6 11.41 48.1 31.99 79.9 57.23C320.7 114 371.4 164.4 380.7 202.2v.1c2.4 10 3.5 36.8 2.8 69.2-.7 32.3-2.7 70.9-5.2 108-3 45.2-6.6 87.9-8.9 114.5h18.1c2.3-26.8 5.8-68.8 8.8-113.3 2.4-37.2 4.5-76 5.2-108.9.7-32.8.4-58.8-3.4-73.8v-.1C386.3 150 332.9 100.7 283 61.12 261.8 44.31 241.1 29.51 224.3 18zM18 142.7v24.5c48.95 44.6 118.5 101.7 163.9 134.3-10.6 58.8-8.6 132.7-7 192.5h18c-1.7-61.9-3.5-138.3 7.6-194.7l1.2-5.8-4.8-3.4C149.1 256.4 67.59 189 18 142.7zm317.3 33l8 79.6c8.5-4.9 13.8-10.8 17-17 4.3-8.6 4.8-18.4 2.4-28.2-3.9-15-15.2-28.6-27.4-34.4zm-18.5 87.5c-2.6 1.7-6.8 5.8-13.2 10.2-11.8 8.2-31.4 15.8-66.1 13.8-.8 8.1 2.6 15.2 10.2 22.5 9.4 9.2 25.4 17.2 44.2 21.4l3 .7 2 2.4c4.5 5.6 5.7 11.6 7.5 20.1 1.8 8.5 3.4 19.1 4.8 31.1 2.8 24.1 4.9 54 6.4 83.2.4 8.6.8 17.1 1.1 25.4h29c-1.2-53.3-.6-113.2 5.2-176.4.1-12.3-.5-24.3-4.4-33.7-3.9-9.4-10.4-16.4-25-21.5-1.9-.7-3.5 0-4.7.8zm-76.6 63.9c0 3.2.1 6.4.3 9.6.7 13.6 3.3 25.7 7.2 30.8l1.9 2.5-.4 124H267l2.1-127.3 2.3-2.5c5.7-6.2 8.2-11.5 10-17.3-15.9-4.3-30.2-10.9-41.2-19.8z" />
    </g>
  </svg>
);

const HipIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <g>
      <path d="M47.593,17c-0.937,0-1.874,0.09-2.784,0.267l0.382,1.963C45.975,19.077,46.783,19,47.593,19C52.78,19,57,23.22,57,28.407 c0,3.704-2.077,6.971-5.421,8.523l0.843,1.814C56.417,36.889,59,32.831,59,28.407C59,22.117,53.883,17,47.593,17z" />
      <path d="M47.592,13C45.309,13,43.1,13.411,41,14.209v-0.542l-2-2.668C38.355,10.141,38,9.075,38,8V1H26v7c0,1.075-0.355,2.141-1,3 l-2,2.667v0.542C20.9,13.411,18.691,13,16.408,13C7.912,13,1,19.912,1,28.407c0,6.776,4.345,12.687,10.812,14.706 c3.485,1.09,6.42,3.588,8.053,6.854l2.703,5.405C23.687,57.609,25.936,59,28.438,59c0.189,0,0.375-0.024,0.562-0.04V60 c0,1.654,1.346,3,3,3s3-1.346,3-3v-1.04c0.187,0.016,0.374,0.04,0.562,0.04c2.501,0,4.75-1.391,5.87-3.628l2.703-5.405 c1.633-3.266,4.568-5.764,8.053-6.854C58.655,41.094,63,35.184,63,28.407C63,19.912,56.088,13,47.592,13z M36.082,9h-8.164 C27.966,8.669,28,8.335,28,8V7h8v1C36,8.335,36.034,8.669,36.082,9z M36,3v2h-8V3H36z M25,14.333l1.6-2.133 c0.28-0.373,0.506-0.78,0.705-1.2h9.391c0.199,0.42,0.425,0.827,0.705,1.199l1.6,2.134v3.253L35.586,21h-7.172L25,17.586V14.333z M43,36.236l0.764,1.527c0.155,0.309,0.236,0.655,0.236,1C44,39.997,42.997,41,41.764,41h-0.548c-0.542,0-1.065-0.196-1.472-0.554 l-0.829-0.725C39.583,39.006,40,38.054,40,37c0-1.201-0.542-2.266-1.382-3C39.458,33.266,40,32.201,40,31s-0.542-2.266-1.382-3 C39.458,27.266,40,26.201,40,25c0-0.505-0.104-0.985-0.276-1.43l0.019-0.017C40.151,23.196,40.674,23,41.216,23h0.548 C42.997,23,44,24.003,44,25.236c0,0.345-0.082,0.691-0.236,1L43,27.764c-0.654,1.309-1,2.773-1,4.236S42.346,34.928,43,36.236z M21,27.764l-0.764-1.527c-0.155-0.309-0.236-0.655-0.236-1C20,24.003,21.003,23,22.236,23h0.548c0.542,0,1.065,0.196,1.473,0.554 l0.019,0.016C24.104,24.016,24,24.495,24,25c0,1.201,0.542,2.266,1.382,3C24.542,28.734,24,29.799,24,31s0.542,2.266,1.382,3 C24.542,34.734,24,35.799,24,37c0,1.054,0.417,2.006,1.085,2.721l-0.829,0.726C23.849,40.804,23.326,41,22.784,41h-0.548 C21.003,41,20,39.997,20,38.764c0-0.345,0.082-0.691,0.236-1L21,36.236c0.654-1.309,1-2.773,1-4.236S21.654,29.072,21,27.764z M36,23c1.103,0,2,0.897,2,2s-0.897,2-2,2h-8c-1.103,0-2-0.897-2-2s0.897-2,2-2H36z M38,31c0,1.103-0.897,2-2,2h-8 c-1.103,0-2-0.897-2-2s0.897-2,2-2h8C37.103,29,38,29.897,38,31z M26,37c0-1.103,0.897-2,2-2h8c1.103,0,2,0.897,2,2s-0.897,2-2,2 h-8C26.897,39,26,38.103,26,37z M28.438,57c-1.739,0-3.303-0.967-4.081-2.522l-2.703-5.405c-1.875-3.749-5.244-6.616-9.246-7.867 C6.781,39.447,3,34.304,3,28.407C3,21.015,9.015,15,16.408,15c2.299,0,4.51,0.48,6.592,1.386v2.028l3.092,3.092 c-0.233,0.128-0.45,0.276-0.652,0.446C24.688,21.343,23.756,21,22.784,21h-0.548C19.9,21,18,22.9,18,25.236 c0,0.654,0.155,1.31,0.447,1.895l0.764,1.527C19.727,29.69,20,30.846,20,32s-0.273,2.31-0.789,3.342l-0.764,1.527 C18.155,37.454,18,38.109,18,38.764C18,41.1,19.9,43,22.236,43h0.548c1.027,0,2.018-0.372,2.79-1.048l0.436-0.382 c0.053,2.342,1.148,4.517,2.99,5.941v9.449C28.814,56.983,28.626,57,28.438,57z M33,46.465V60c0,0.552-0.449,1-1,1s-1-0.448-1-1 V46.465l-0.445-0.297C28.955,45.102,28,43.317,28,41.395V41h8v0.395c0,1.923-0.955,3.707-2.555,4.773L33,46.465z M51.591,41.205 c-4.001,1.251-7.371,4.118-9.246,7.867l-2.703,5.405C38.865,56.033,37.302,57,35.562,57c-0.189,0-0.376-0.017-0.562-0.04v-9.449 c1.842-1.424,2.937-3.6,2.99-5.942l0.436,0.381C39.198,42.628,40.189,43,41.216,43h0.548C44.1,43,46,41.1,46,38.764 c0-0.654-0.155-1.31-0.447-1.895l-0.764-1.527C44.273,34.31,44,33.154,44,32s0.273-2.31,0.789-3.342l0.764-1.527 C45.845,26.546,46,25.891,46,25.236C46,22.9,44.1,21,41.764,21h-0.548c-0.972,0-1.905,0.343-2.657,0.952 c-0.202-0.17-0.419-0.318-0.651-0.445L41,18.414v-2.028C43.083,15.48,45.293,15,47.592,15C54.985,15,61,21.015,61,28.407 C61,34.304,57.219,39.447,51.591,41.205z" />
      <path d="M16.407,19c0.81,0,1.618,0.077,2.402,0.229l0.382-1.963C18.281,17.09,17.344,17,16.407,17C10.117,17,5,22.117,5,28.407 c0,4.424,2.583,8.481,6.579,10.338l0.843-1.814C9.077,35.378,7,32.111,7,28.407C7,23.22,11.22,19,16.407,19z" />
    </g>
  </svg>
);

const page = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const treatments = [
    {
      title: "Joint Replacement Surgery",
      description:
        "Hip and knee osteoarthritis among other musculoskeletal problems are the leading causes of disability in India",
      icon: <KneeIcon className="w-12 h-12" />,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Hip Replacement Surgery",
      description:
        "Hip Replacement surgery is commonly performed to cure progressive arthritis.",
      icon: <HipIcon className="w-12 h-12" />,
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Knee Replacement Surgery",
      description:
        "Knee joint has a layer of smooth cartilage between end of thighbone and top of calf bone.",
      icon: <KneeIcon className="w-12 h-12" />,
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
      icon: <Microscope className="w-12 h-12" />,
      gradient: "from-teal-500 to-teal-600",
    },
    {
      title: "PCL Tear",
      description:
        "Posterior Cruciate Ligament or PCL tear is a less common knee injury when compared to the ACL tear.",
      icon: <Microscope className="w-12 h-12" />,
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
              { icon: KneeIcon, label: "Joint Replacements", count: "500+" },
              { icon: Microscope, label: "ACL Repairs", count: "300+" },
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
