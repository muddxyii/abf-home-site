import Head from 'next/head'
import ContactForm from '@/components/ContactForm'
import Schema from "@/components/Schema";

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

    return (
        <>
            <Head>
                <title>Backflow Testing & Repair Services Phoenix | AnyBackflow</title>
                <meta name="description" content="Licensed backflow prevention specialists serving Phoenix. Annual testing, repairs & installation. Same-day emergency service available. Free quotes." />
                <meta name="keywords" content="backflow testing phoenix, backflow repair, backflow installation, backflow prevention, water safety" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://anybackflow.com" />
                <meta property="og:title" content="Phoenix Backflow Testing & Repair | AnyBackflow" />
                <meta property="og:description" content="Professional backflow testing, repairs & installation in Phoenix. Licensed specialists, same-day service available." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://anybackflow.com" />
            </Head>

            <Schema data={businessSchema} />

            <main className="container mx-auto px-4 py-12">
                <section className="hero min-h-[30vh] bg-base-200 rounded-box mb-12">
                    <div className="hero-content text-center">
                        <div>
                            <h1 className="text-5xl font-bold">Licensed Backflow Testing & Repair in Phoenix</h1>
                            <p className="py-6 text-lg">State-certified specialists providing annual backflow testing, repairs, and installations. Protect your water supply with Arizona&apos;s trusted experts.</p>
                            <a href="#contact" className="btn btn-primary">Get Your Free Quote Today</a>
                        </div>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-8 mb-12" aria-label="Our Services">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Expert Backflow Testing</h2>
                            <p>Licensed specialists for all backflow testing needs: domestic, irrigation, fire systems, and hydrants. City-approved testers with same-day service available.</p>
                            <ul className="list-disc pl-5 mt-3">
                                <li>Annual Certification Testing</li>
                                <li>City Compliance Reports</li>
                                <li>Electronic Documentation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Professional Repair & Installation</h2>
                            <p>Complete backflow prevention solutions including repairs, new installations, and security measures. Emergency services available 24/7.</p>
                            <ul className="list-disc pl-5 mt-3">
                                <li>Security Cage Installation</li>
                                <li>Emergency Repairs</li>
                                <li>New System Installation</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="contact" className="card bg-base-200 shadow-xl w-full">
                    <div className="card-body">
                        <h2 className="card-title justify-center mb-4">Schedule Your Backflow Service</h2>
                        <ContactForm/>
                    </div>
                </section>
            </main>
        </>
    )
}