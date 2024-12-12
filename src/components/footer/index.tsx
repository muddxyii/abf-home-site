'use client';

import React from "react";

const FacebookIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
        <title>Facebook</title>
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
    </svg>
);

const AreasServed = () => (
    <div className="space-y-4">
        <h3 className="text-lg font-bold">Areas Served</h3>
        <div className="divider mt-2"></div>
        <p className="text-sm" itemProp="areaServed">
            Metro Phoenix area including Apache Junction, Avondale, Buckeye, Care Free,
            Cave Creek, Chandler, Cottonwood, El Mirage, Flagstaff, Gilbert, Glendale, Globe, Goodyear,
            Litchfield Park, Maricopa, Mesa, Peoria, Phoenix, Queen Creek, Safford, Scottsdale, Surprise,
            Tempe, and Wickenburg.
        </p>
        <p className="text-sm">
            Serving: Epcor Water, Arizona Water, Gila River Indian Community, Global Water,
            Graham County Utilities, Johnson Utilities, Liberty Utilities, Pima Utility,
            Salt River Pima Maricopa Indian Community, and Sunrise Water.
        </p>
    </div>
);

const CompanyInfo = () => (
    <div className="text-left">
        <h3 className="text-lg font-bold" itemProp="name">AnyBackflow.com Inc.</h3>
        <div className="space-x-2">
            <a href="mailto:info@anybackflow.com" className="link link-hover" itemProp="email">
                info@anybackflow.com
            </a>
            <a href="tel:+16022282923" className="link link-hover" itemProp="telephone">
                (602) 228-2923
            </a>
        </div>
        <p className="text-sm" itemProp="license">ROC 252348 C-37; ROC 334105 CR-16</p>
    </div>
);

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