import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next"
import React from "react";
import {ReCaptchaProvider} from "next-recaptcha-v3";

export const metadata = {
    title: 'Backflow Testing & Repair Services Phoenix | AnyBackflow',
    description: 'Licensed backflow prevention specialists serving Phoenix. Annual testing, repairs & installation. Same-day emergency service available. Free quotes.',
    keywords: 'backflow testing phoenix, backflow repair, backflow installation, backflow prevention, water safety',
    robots: 'index, follow',
    openGraph: {
        title: 'Phoenix Backflow Testing & Repair | AnyBackflow',
        description: 'Professional backflow testing, repairs & installation in Phoenix. Licensed specialists, same-day service available.',
        type: 'website',
        url: 'https://anybackflow.com',
        siteName: 'AnyBackflow',
        locale: 'en_US',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'AnyBackflow Services'
            }
        ]
    }
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`min-h-screen flex flex-col`}>
        <Header/>
        <main className="flex-grow">
            <ReCaptchaProvider
                reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}>
                {children}
            </ReCaptchaProvider>
            <SpeedInsights/>
            <Analytics/>
        </main>
        <Footer/>
        </body>
        </html>
    )
}
