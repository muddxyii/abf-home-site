import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Red_Hat_Display } from "next/font/google";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const redHat = Red_Hat_Display({ subsets: ['latin'] })

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
        <html lang="en" className={redHat.className}>
        <body className={`min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    )
}
