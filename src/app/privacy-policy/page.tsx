'use client';
import React from 'react';
import {Shield} from 'lucide-react';
import PDFViewer from "@/components/pdf-viewer";

export default function PrivacyPolicy() {
    const pdfUrl = '/privacy-policy.pdf';

    return (
        <main className="bg-base-300 min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <div className="card bg-base-100 shadow-xl mb-8 max-w-4xl mx-auto">
                    <div className="card-body text-center">
                        <div className="flex justify-center mb-4">
                            <Shield className="w-16 h-16 text-primary"/>
                        </div>
                        <h1 className="card-title text-4xl md:text-5xl font-bold justify-center mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-lg max-w-2xl mx-auto">
                            Last updated: February 07, 2025
                        </p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl max-w-4xl mx-auto">
                    <div className="card-body">
                        <h2 className="card-title text-2xl mb-4">
                            Full Privacy Policy Document
                        </h2>
                        <div className="bg-base-200 rounded-lg p-4">
                            <PDFViewer url={pdfUrl}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}