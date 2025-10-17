import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: {
        template: '%s | Dr. Avik Roy - AASRA Clinic',
        default: 'Top 10 Orthopedic Doctors in Lucknow | Dr. Avik Roy - Best Knee Replacement Surgeon'
    },
    description: 'Dr. Avik Roy is the best orthopedic surgeon in Lucknow with 11+ years of experience. Top-rated for knee replacement surgery, hip replacement, ACL surgery, joint replacement, arthroscopy, and sports injury treatment at AASRA Clinic, Gomti Nagar. Specializing in full knee replacement surgery, surgical knee replacement, and robotics replacement surgeries.',
    authors: [{ name: 'Dr. Avik Roy' }],
    creator: 'Triangle Mind',
    publisher: 'AASRA Clinic',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: 'https://dravik.in',
    },
    openGraph: {
        title: 'Best Orthopedic Surgeon in Lucknow | Dr. Avik Roy - Top Knee & Hip Replacement Specialist',
        description: 'Top-rated orthopedic surgeon in Lucknow with 11+ years of experience. Expert in knee replacement surgery, hip joint surgery, ACL tear treatment, and joint replacement surgery. Find the best knee replacement hospital in Lucknow at AASRA Clinic.',
        url: 'https://dravik.in',
        siteName: 'Dr. Avik Roy - AASRA Clinic',
       
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best Orthopedic Surgeon in Lucknow | Dr. Avik Roy - Top Knee Replacement Doctor',
        description: 'Expert orthopedic care with 11+ years of experience. Specializing in knee replacement surgery cost-effective solutions, hip replacement, ACL surgery, and sports injury treatment in Lucknow.',
        
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                {/* Theme Color */}
                <meta name="theme-color" content="#2563eb" />

                {/* Additional Meta Tags */}
                <meta name="geo.region" content="IN-UP" />
                <meta name="geo.placename" content="Lucknow" />
                <meta name="geo.position" content="26.8357;81.0137" />
                <meta name="ICBM" content="26.8357, 81.0137" />

                {/* Business Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "MedicalOrganization",
                            "name": "AASRA Clinic - Dr. Avik Roy",
                            
                            "description": "Best orthopedic clinic in Lucknow specializing in knee replacement surgery, hip replacement surgery, joint replacement, ACL surgery, arthroscopy, and sports injury treatment. Top-rated orthopedic hospital for surgical knee replacement and robotics replacement surgeries.",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "E-1/709, near Saryu Apartment, Sector 1, Gomti Nagar",
                                "addressLocality": "Lucknow",
                                "addressRegion": "Uttar Pradesh",
                                "postalCode": "226010",
                                "addressCountry": "IN"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 26.8357,
                                "longitude": 81.0137
                            },
                            "url": "https://dravik.in",
                            "telephone": "+91-8303701980",
                            "openingHoursSpecification": [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                    "opens": "09:00",
                                    "closes": "20:00"
                                }
                            ],
                            "priceRange": "₹₹",
                            "medicalSpecialty": "Orthopedic Surgery",
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Orthopedic Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "MedicalProcedure",
                                            "name": "Knee Replacement Surgery",
                                            "alternateName": ["Full Knee Replacement Surgery", "Surgical Knee Replacement", "Total Knee Replacement"]
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "MedicalProcedure",
                                            "name": "Hip Replacement Surgery",
                                            "alternateName": ["Hip Joint Surgery", "Hip and Knee Replacement Surgery"]
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "MedicalProcedure",
                                            "name": "Joint Replacement Surgery"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "MedicalProcedure",
                                            "name": "ACL Surgery",
                                            "alternateName": ["ACL Surgery in Lucknow", "ACL Tear Treatment"]
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "MedicalProcedure",
                                            "name": "Arthroscopy"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "MedicalProcedure",
                                            "name": "Robotics Replacement Surgeries in Lucknow"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "MedicalProcedure",
                                            "name": "PCL Tear Treatment"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "MedicalProcedure",
                                            "name": "Trauma Surgery"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "MedicalTherapy",
                                            "name": "Orthopedic Knee Pain Treatment"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "MedicalTherapy",
                                            "name": "Ligament Injury Treatment"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "MedicalTherapy",
                                            "name": "Fracture Treatment"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "MedicalProcedure",
                                            "name": "Endoscopic Spine Surgery"
                                        }
                                    }
                                ]
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "reviewCount": "250"
                            }
                        })
                    }}
                />

                {/* Doctor Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Physician",
                            "name": "Dr. Avik Roy",
                            "image": "https://dravik.in/img/Avik_ROY.png",
                            "jobTitle": "Orthopedic Surgeon",
                            "description": "Best orthopedic surgeon in Lucknow with 11+ years of experience. Top specialist for knee replacement surgery, hip replacement, ACL surgery, and joint replacement. Recognized as one of the top 10 orthopedic doctors in Lucknow and the best knee replacement surgeon in Lucknow.",
                            "worksFor": {
                                "@type": "MedicalOrganization",
                                "name": "AASRA Clinic"
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "E-1/709, Gomti Nagar",
                                "addressLocality": "Lucknow",
                                "addressRegion": "Uttar Pradesh",
                                "postalCode": "226010",
                                "addressCountry": "IN"
                            },
                            "telephone": "+91-8303701980",
                            "url": "https://dravik.in",
                            "medicalSpecialty": [
                                "Orthopedic Surgery",
                                "Joint Replacement Surgery",
                                "Knee Replacement Surgery",
                                "Hip Replacement Surgery",
                                "Arthroscopy",
                                "Sports Injury Treatment",
                                "Trauma Surgery"
                            ],
                            "alumniOf": "AIIMS Raipur",
                            "hasCredential": [
                                {
                                    "@type": "EducationalOccupationalCredential",
                                    "credentialCategory": "degree",
                                    "name": "MBBS MS Ortho"
                                },
                                {
                                    "@type": "EducationalOccupationalCredential",
                                    "credentialCategory": "degree",
                                    "name": "MCh Joint Replacement"
                                }
                            ],
                            "award": "MCh Joint Replacement and Reconstruction Award 2023",
                            "memberOf": [
                                {
                                    "@type": "Organization",
                                    "name": "Indian Orthopaedic Association"
                                },
                                {
                                    "@type": "Organization",
                                    "name": "Uttar Pradesh Orthopaedic Association"
                                }
                            ],
                            "yearsOfExperience": "11",
                            "knowsAbout": [
                                "Knee Replacement Surgery",
                                "Hip Joint Surgery",
                                "Joint Replacement Surgery",
                                "ACL Surgery in Lucknow",
                                "Full Knee Replacement Surgery",
                                "Surgical Knee Replacement",
                                "Robotics Replacement Surgeries",
                                "Arthroscopy",
                                "Sports Injury",
                                "Trauma Surgery",
                                "Bone Specialist",
                                "Joint Pain Treatment",
                                "Endoscopic Spine Surgery",
                                "Ligament Injuries",
                                "Fracture Treatment"
                            ],
                            "availableService": {
                                "@type": "MedicalBusiness",
                                "name": "24/7 Emergency Orthopedic Care"
                            }
                        })
                    }}
                />

                {/* FAQ Schema for Knee Replacement Surgery */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "What is the cost of knee replacement surgery in Lucknow?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "The cost of knee replacement surgery in Lucknow varies based on the type of procedure (partial or total), hospital facilities, and implant quality. Dr. Avik Roy at AASRA Clinic provides cost-effective knee replacement surgery with transparent pricing and flexible payment options."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Who is the best knee replacement surgeon in Lucknow?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Dr. Avik Roy is recognized as one of the best knee replacement surgeons in Lucknow with 11+ years of experience, MCh in Joint Replacement, and hundreds of successful surgeries. He specializes in full knee replacement, partial knee replacement, and robotics-assisted knee surgeries."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What types of knee replacement surgery are available?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "AASRA Clinic offers total knee replacement surgery, partial knee replacement, revision knee replacement, and robotics-assisted knee replacement surgeries. Dr. Avik Roy determines the best approach based on individual patient needs and condition."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Which is the best knee replacement hospital in Lucknow?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "AASRA Clinic in Gomti Nagar, Lucknow is recognized as one of the top orthopedic hospitals for knee replacement surgery. The clinic is equipped with modern facilities and led by Dr. Avik Roy, an expert orthopedic surgeon."
                                    }
                                }
                            ]
                        })
                    }}
                />

                {/* Breadcrumb Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://dravik.in"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Orthopedic Surgeon Lucknow",
                                    "item": "https://dravik.in"
                                }
                            ]
                        })
                    }}
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`} suppressHydrationWarning={true}>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
