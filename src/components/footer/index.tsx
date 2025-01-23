'use client';

import React from "react";
import CompanyInfo from "@/components/footer/CompanyInfo";
import FacebookIcon from "@/components/footer/FacebookIcon";
import AreasServed from "@/components/footer/AreasServed";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const displayYear = currentYear === 2024 ? "2024" : `2024-${currentYear}`;

    return (
        <footer className="footer p-10 bg-base-200 text-base-content" itemScope
                itemType="http://schema.org/PlumbingService">
            <div className="max-w-7xl mx-auto w-full">
                {/* Hidden SEO-focused content */}
                <div className="hidden">
                    <meta itemProp="priceRange" content="$$"/>
                    <time itemProp="openingHours" content="Mo-Fr 07:00-17:00"/>
                    <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                        <meta itemProp="addressRegion" content="AZ"/>
                        <meta itemProp="addressCountry" content="US"/>
                    </div>
                    <div itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <meta itemProp="ratingValue" content="4.8"/>
                        <meta itemProp="ratingCount" content="127"/>
                    </div>
                </div>

                <AreasServed/>
                <div className="divider my-8"></div>

                <div className="flex flex-wrap items-center justify-center gap-8 w-full">
                    <CompanyInfo/>

                    <nav className="social-links" aria-label="Social Media Links">
                        <a
                            href="https://www.facebook.com/anybackflow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
                            aria-label="Visit our Facebook page"
                        >
                            <FacebookIcon/>
                        </a>
                    </nav>

                    <p className="text-sm">
                        <span itemProp="copyrightYear">{displayYear}</span> © <span itemProp="legalName">AnyBackflow.com Inc.</span>
                        {" - All Rights Reserved."}
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer