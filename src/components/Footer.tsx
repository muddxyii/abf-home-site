import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content" itemScope itemType="http://schema.org/Organization">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto justify-center items-center">
                <div className="text-left">
                    <h3 className="text-lg font-bold" itemProp="name">AnyBackflow.com Inc.</h3>
                    <div className="space-x-1">
                        <a href="mailto:info@anybackflow.com" className="link link-hover"
                           itemProp="email">info@anybackflow.com</a>
                        <a href="tel:+16022282923" className="link link-hover" itemProp="telephone">(602) 228-2923</a>
                    </div>
                    <p className="text-sm" itemProp="license">ROC 252348 C-37; ROC 334105 CR-16</p>
                </div>
                <div className="text-left">
                    <h3 className="text-lg font-bold">Areas Served</h3>
                    <p itemProp="areaServed">Metro Phoenix area including Apache Junction, Avondale, Buckeye, Care Free,
                        Cave Creek, Chandler, and more.</p>
                </div>
            </div>
            <div className="divider"></div>
            <p><span itemProp="copyrightYear">{currentYear}</span> © AnyBackflow.com Inc. - All Rights Reserved.</p>
        </footer>
    )
}
export default Footer