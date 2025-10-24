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
  Microscope,
  Bone,
  HeartPulse,
  Scissors,
} from "lucide-react";
import Image from "next/image";
import doctorImage from "../../assets/image.jpg";

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

const AboutPage = () => {
  const expertise = [
    {
      title: "Joint Replacement Surgery",
      icon: <KneeIcon className="w-10 h-10" />,
      gradient: "from-blue-500 to-blue-600",
      link: "/treatment/joint-replacement",
    },
    {
      title: "Hip Replacement Surgery",
      icon: <HipIcon className="w-10 h-10" />,
      gradient: "from-indigo-500 to-indigo-600",
      link: "/treatment/hip-replacement",
    },
    {
      title: "Knee Replacement Surgery",
      icon: <KneeIcon className="w-10 h-10" />,
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
      icon: <Microscope className="w-10 h-10" />,
      gradient: "from-teal-500 to-teal-600",
      link: "/treatment/acl-tear",
    },
    {
      title: "PCL Tear",
      icon: <Microscope className="w-10 h-10" />,
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
