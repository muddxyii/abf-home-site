import React from "react";

const CompanyInfo = () => (
    <div className="text-left">
        <h2 className="text-lg font-bold" itemProp="name">AnyBackflow.com Inc.</h2>
        <div className="space-x-2">
            <a
                href="mailto:info@anybackflow.com"
                className="link link-hover"
                itemProp="email"
                aria-label="Email us"
            >
                info@anybackflow.com
            </a>
            <a
                href="tel:+16022282923"
                className="link link-hover"
                itemProp="telephone"
                aria-label="Call us"
            >
                (602) 228-2923
            </a>
        </div>
        <div>
            <p className="text-sm">
                <span itemProp="license">ROC 252348 C-37; ROC 334105 CR-16</span>
            </p>
            <meta itemProp="sameAs" content="https://www.facebook.com/anybackflow"/>
        </div>
    </div>
);

export default CompanyInfo;