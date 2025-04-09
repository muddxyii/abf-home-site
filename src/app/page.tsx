import Head from 'next/head'
import ContactForm from '@/components/contact-form'
import Schema from "@/components/Schema";
import {FileCheck, Shield, Wrench} from "lucide-react";

export default function Home() {
    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "AnyBackflow",
        "description": "Professional backflow testing, repair, and installation services in Arizona",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Phoenix",
            "addressRegion": "AZ",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.4484",
            "longitude": "-112.0740"
        },
        "url": "https://anybackflow.com",
        "telephone": "(602) 228-2923",
        "areaServed": "Phoenix Metropolitan Area"
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Backflow Testing",
        "provider": {
            "@type": "LocalBusiness",
            "name": "AnyBackflow"
        },
        "areaServed": {
            "@type": "City",
            "name": "Phoenix"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Backflow Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Annual Certification Testing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Emergency Repairs"
                    }
                }
            ]
        }
    };

    return (
        <>
            <Head>
                <title>Backflow Testing & Repair Services Phoenix | AnyBackflow</title>
                <meta name="description"
                      content="Licensed backflow prevention specialists serving Phoenix. Annual testing, repairs & installation. Same-day emergency service available. Free quotes."/>
                <meta name="keywords"
                      content="backflow testing phoenix, backflow repair, backflow installation, backflow prevention, water safety"/>
                <meta name="robots" content="index, follow"/>
                <link rel="canonical" href="https://anybackflow.com"/>
                <meta property="og:title" content="Phoenix Backflow Testing & Repair | AnyBackflow"/>
                <meta property="og:description"
                      content="Professional backflow testing, repairs & installation in Phoenix. Licensed specialists, same-day service available."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://anybackflow.com"/>
            </Head>

            <Schema data={[businessSchema, serviceSchema]}/>

            <main className="bg-base-300 min-h-screen">
                <div className="container mx-auto px-4 py-12">

                    {/* Hero Section */}
                    <section className="hero min-h-[30vh] rounded-box mb-12 max-w-4xl mx-auto">
                        <div className="hero-content text-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">Licensed Backflow Testing & Repair
                                    in
                                    Phoenix and Surrounding Cities, Counties and Communities</h1>
                                <p className="text-lg mb-8 max-w-2xl mx-auto">Certified specialists providing
                                    annual backflow
                                    testing, repairs, and replacements. Protect your water supply with AnyBackflow.com
                                    Inc.</p>
                                <div className="flex gap-6 justify-center flex-col sm:flex-row items-center">
                                    <a href="#contact"
                                       className="btn btn-primary btn-lg shadow-md hover:shadow-lg transition-shadow min-w-64">
                                        Schedule Your Service Today
                                    </a>
                                    <div
                                        className="flex flex-col sm:flex-row items-center gap-4 px-6 py-4 bg-base-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <Shield className="text-primary w-8 h-8"/>
                                        <div className="flex flex-col items-center sm:items-start">
                                            <span className="font-semibold text-base">ROC C37 252348</span>
                                            <span className="font-semibold text-base">ROC CR16 334105</span>
                                            <span className="text-sm text-base-content/80">Licensed & Insured</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="grid md:grid-cols-2 gap-8 mb-16" aria-label="Our Services">
                        {/* Expert Backflow Testing */}
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                            <div className="card-body">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <FileCheck className="text-primary" size={24}/>
                                    </div>
                                    <div>
                                        <h2 className="card-title text-2xl mb-2">Expert Backflow Testing</h2>
                                        <p>Licensed specialists for all backflow testing
                                            needs: domestic, irrigation, fire systems, and temporary connections.</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {['Annual Certification Testing', 'City Compliance Reports', 'Electronic Documentation'].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Professional Repair & Installation */}
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                            <div className="card-body">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Wrench className="text-primary" size={24}/>
                                    </div>
                                    <div>
                                        <h2 className="card-title text-2xl mb-2">Professional Repair & Installation</h2>
                                        <p>Complete backflow prevention service and security solutions with repair
                                            certified
                                            technicians.</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {['Repairs', 'Replacements', 'Security Cage Installations'].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Contact Form */}
                    <section id="contact" className="max-w-2xl mx-auto mb-16">
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body p-8">
                                <h2 className="card-title text-3xl text-center justify-center">Schedule Your
                                    Backflow Service</h2>
                                <ContactForm/>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}