'use client'

import React, { useState } from 'react'
import {
    Star,
    Quote,
    Users,
    Award,
    Heart,
    TrendingUp,
    CheckCircle2,
    ChevronRight,
    ChevronLeft,
    MessageSquare,
    Shield,
    Clock,
    Activity
} from 'lucide-react'

const TestimonialsPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            name: 'Akshat Pokhariyal',
            location: 'Lucknow',
            rating: 5,
            text: 'I met him in the case of emergency regarding my son and he handled the entire situation so well that we were relieved immediately and my son was immediately out of pain. Very humble behaviour and helpful doctor. Thank u Dr Avik sir for your help.',
            treatment: 'Emergency Care',
            date: '2024'
        },
        {
            name: 'Kanchan Singh',
            location: 'Lucknow',
            rating: 5,
            text: 'I had great experience with AASRA CLINIC team. Dr Avik Roy is highly experienced and supportive, The staff is very cooperative and helpful. Hip replacement of my family member was done and started walking on next day.',
            treatment: 'Hip Replacement',
            date: '2024'
        },
        {
            name: 'Dharmendra Tewari',
            location: 'Gomti Nagar',
            rating: 5,
            text: 'Dr Avik Roy is the best joint replacement surgeon in lucknow gomtinagar. Unhone humare mareez ka Hip Replacement Kia tha. She is walking like nothing has ever happened to her. Very very happy. Thank you sir',
            treatment: 'Hip Replacement',
            date: '2024'
        },
        {
            name: 'Shailesh Pratap Singh',
            location: 'Lucknow',
            rating: 5,
            text: 'I suffered a knee injury where almost 100% of my ACL was broken. I then visited Dr. Avik Roy for the treatment. The doctor suggested PRP treatment for the same. The treatment showed remarkable results and I am back with my football practice and everything.',
            treatment: 'ACL Tear - PRP Treatment',
            date: '2024'
        }
    ]

    const stats = [
        {
            icon: Users,
            number: '5000+',
            label: 'Happy Patients',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Star,
            number: '4.9',
            label: 'Average Rating',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: Award,
            number: '98%',
            label: 'Success Rate',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: TrendingUp,
            number: '100%',
            label: 'Satisfaction',
            color: 'from-purple-500 to-purple-600'
        }
    ]

    const features = [
        { icon: Heart, text: 'Personalized Care Approach' },
        { icon: Award, text: 'Expert Surgical Techniques' },
        { icon: Activity, text: 'Quick Recovery Support' },
        { icon: Users, text: 'Compassionate Staff' },
        { icon: Clock, text: '24/7 Emergency Service' },
        { icon: Shield, text: 'Advanced Technology' }
    ]

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <MessageSquare size={20} className="text-blue-300" />
                            <span className="font-semibold text-sm">Patient Experiences</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Our Clients Reviews
                        </h1>

                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Real stories from real patients who experienced exceptional orthopedic care
                        </p>

                        <nav className="flex justify-center items-center gap-3 text-blue-100">
                            <a href="/" className="hover:text-white transition-colors">Home</a>
                            <ChevronRight size={16} />
                            <span className="text-white">Testimonials</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white relative -mt-16 z-10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                                <div className={`bg-gradient-to-br ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                                    <stat.icon className="text-white" size={32} />
                                </div>
                                <p className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</p>
                                <p className="text-gray-600 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
                            <Heart size={20} />
                            <span className="font-semibold">Why Patients Choose Us</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Excellence Recognized by Our Patients
                        </h2>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            At AASRA Clinic, we pride ourselves on providing exceptional orthopedic services that deliver real results. But don't just take our word for it—hear from the patients whose lives we've transformed.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:scale-[1.02]">
                                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                    <feature.icon className="text-white" size={24} />
                                </div>
                                <p className="text-gray-700 font-medium text-center">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Testimonial Slider */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
                                <Star size={20} />
                                <span className="font-semibold">Featured Reviews</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                What Our Patients Say
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Direct feedback from patients who experienced transformative care at AASRA Clinic
                            </p>
                        </div>

                        {/* Testimonial Slider */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 md:p-16 rounded-3xl shadow-2xl border border-blue-100 relative overflow-hidden">
                                {/* Quote Icon */}
                                <div className="absolute top-8 left-8 opacity-20">
                                    <Quote className="text-blue-600" size={80} />
                                </div>

                                {/* Rating */}
                                <div className="flex justify-center gap-2 mb-6 relative z-10">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} className="fill-yellow-400 text-yellow-400" size={28} />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 text-center relative z-10 italic max-w-4xl mx-auto">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                {/* Author Info */}
                                <div className="text-center relative z-10">
                                    <div className="bg-gradient-to-br from-blue-600 to-indigo-600 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                                        <Users className="text-white" size={40} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <p className="text-blue-600 font-semibold mb-2">
                                        {testimonials[currentIndex].treatment}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {testimonials[currentIndex].location} • {testimonials[currentIndex].date}
                                    </p>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex justify-center gap-4 mt-8">
                                <button
                                    onClick={prevTestimonial}
                                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-14 h-14 rounded-full flex items-center justify-center hover:shadow-xl transition-all shadow-lg"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-14 h-14 rounded-full flex items-center justify-center hover:shadow-xl transition-all shadow-lg"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-2 mt-6">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`h-3 rounded-full transition-all ${index === currentIndex
                                                ? 'bg-blue-600 w-8'
                                                : 'bg-gray-300 hover:bg-gray-400 w-3'
                                            }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Testimonials Grid */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
                            <Users size={20} />
                            <span className="font-semibold">All Reviews</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            More Success Stories
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join thousands of satisfied patients who chose AASRA Clinic for their orthopedic care
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:scale-[1.02]">
                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-gray-700 mb-6 leading-relaxed italic">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Users className="text-white" size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                        <p className="text-sm text-blue-600 font-medium">{testimonial.treatment}</p>
                                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Indicators Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
                                <Shield size={20} />
                                <span className="font-semibold">Trust & Quality</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Built on Trust, Proven by Results
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { icon: Heart, title: 'Patient-Centered', description: 'Care that puts you first' },
                                { icon: Award, title: 'Award-Winning', description: 'Recognized excellence' },
                                { icon: Shield, title: 'Safe & Secure', description: 'Your health protected' },
                                { icon: CheckCircle2, title: 'Proven Results', description: '98% success rate' }
                            ].map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center">
                                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <item.icon className="text-white" size={28} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                            <Heart size={20} className="text-blue-300" />
                            <span className="font-semibold">Join Our Happy Patients</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Your Success Story Starts Here
                        </h2>

                        <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                            Experience the same exceptional care that our patients rave about. Book your consultation with Dr. Avik Roy today.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center mb-16">
                            <a
                                href="tel:08303701980"
                                className="group bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all inline-flex items-center gap-3 shadow-2xl hover:shadow-blue-500/50"
                            >
                                <MessageSquare size={24} />
                                08303701980
                                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/contact"
                                className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center gap-3"
                            >
                                Book Appointment
                                <ChevronRight size={24} />
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/20">
                            <div>
                                <p className="text-3xl font-bold mb-2">5000+</p>
                                <p className="text-blue-200 text-sm">Patients Treated</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold mb-2">4.9</p>
                                <p className="text-blue-200 text-sm">Average Rating</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold mb-2">98%</p>
                                <p className="text-blue-200 text-sm">Success Rate</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold mb-2">100%</p>
                                <p className="text-blue-200 text-sm">Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TestimonialsPage
