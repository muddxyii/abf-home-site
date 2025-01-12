import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next"
import React from "react";

export const metadata: Metadata = {
    title: "AnyBackflow.com Inc.",
    description: 'Backflow Inspection, Repair, and Installation Services in Phoenix Metro Area',
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
            {children}
            <SpeedInsights/>
            <Analytics/>
        </main>
        <Footer/>
        </body>
        </html>
    )
}
