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
        default: 'Dr. Avik Roy - Best Orthopedic Surgeon in Lucknow | AASRA Clinic'
    },
    description: 'Dr. Avik Roy is a leading orthopedic surgeon in Lucknow with 11+ years of experience. Specializing in joint replacement, arthroscopy, ACL/PCL tear treatment, and sports injury management at AASRA Clinic, Gomti Nagar.',
    keywords: [
        'Dr. Avik Roy',
        'orthopedic surgeon Lucknow',
        'AASRA Clinic',
        'joint replacement surgery',
        'hip replacement Lucknow',
        'knee replacement Lucknow',
        'arthroscopy',
        'ACL tear treatment',
        'PCL tear treatment',
        'sports injury Lucknow',
        'Gomti Nagar orthopedic',
        'best orthopedic surgeon',
        'trauma surgery',
        'bone specialist Lucknow',
        'joint pain treatment',
        'orthopedic doctor Lucknow',
        'MBBS MS Ortho',
        'MCh Joint Replacement',
        'AIIMS Raipur',
        'Indian Orthopaedic Association',
        '24/7 emergency orthopedic care'
    ],
    authors: [{ name: 'Dr. Avik Roy' }],
    creator: 'Triangle Mind',
    publisher: 'AASRA Clinic',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Dr. Avik Roy - Best Orthopedic Surgeon in Lucknow | AASRA Clinic',
        description: 'Expert orthopedic care with 11+ years of experience. Specializing in joint replacement, arthroscopy, and sports injury treatment in Lucknow.',
        url: 'https://dravik.in',
        siteName: 'Dr. Avik Roy - AASRA Clinic',
        images: [
            {
                url: '/img/Avik_ROY.png',
                width: 1200,
                height: 630,
                alt: 'Dr. Avik Roy - Orthopedic Surgeon',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dr. Avik Roy - Best Orthopedic Surgeon in Lucknow',
        description: 'Expert orthopedic care with 11+ years of experience in joint replacement and sports injury treatment.',
        images: ['/img/Avik_ROY.png'],
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
                            "image": "https://dravik.in/img/Avik_ROY.png",
                            "description": "Leading orthopedic clinic in Lucknow specializing in joint replacement, arthroscopy, and sports injury treatment",
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
                            "availableService": [
                                {
                                    "@type": "MedicalProcedure",
                                    "name": "Joint Replacement Surgery"
                                },
                                {
                                    "@type": "MedicalProcedure",
                                    "name": "Hip Replacement Surgery"
                                },
                                {
                                    "@type": "MedicalProcedure",
                                    "name": "Knee Replacement Surgery"
                                },
                                {
                                    "@type": "MedicalProcedure",
                                    "name": "Arthroscopy"
                                },
                                {
                                    "@type": "MedicalProcedure",
                                    "name": "ACL Tear Treatment"
                                },
                                {
                                    "@type": "MedicalProcedure",
                                    "name": "PCL Tear Treatment"
                                }
                            ]
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
                            "image": "https://dravik.in/images/team-1.jpg",
                            "jobTitle": "Orthopedic Surgeon",
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
                            "medicalSpecialty": "Orthopedic Surgery",
                            "alumniOf": "AIIMS Raipur",
                            "award": "MCh Joint Replacement and Reconstruction Award 2023",
                            "memberOf": [
                                "Indian Orthopaedic Association",
                                "Uttar Pradesh Orthopaedic Association"
                            ],
                            "yearsOfExperience": "11"
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
