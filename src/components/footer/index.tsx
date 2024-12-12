'use client';

import React from "react";
import CompanyInfo from "@/components/footer/CompanyInfo";
import FacebookIcon from "@/components/footer/FacebookIcon";
import AreasServed from "@/components/footer/AreasServed";

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer p-10 bg-base-200 text-base-content" itemScope itemType="http://schema.org/Organization">
            <div className="max-w-7xl mx-auto w-full">
                <AreasServed />
                <div className="divider my-8"></div>
                <div className="flex flex-wrap items-center justify-center gap-8 w-full">
                    <CompanyInfo/>
                    <button
                        onClick={() => window.open('https://www.facebook.com/anybackflow', '_blank')}
                        className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
                        aria-label="Visit our Facebook page"
                    >
                        <FacebookIcon/>
                    </button>
                    <p className="text-sm">
                        <span itemProp="copyrightYear">{currentYear}</span> © AnyBackflow.com Inc. - All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer