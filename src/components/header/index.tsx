'use client'

import React from "react";
import {Phone} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header
            className="navbar bg-base-100 flex flex-wrap items-center justify-between px-2"
            itemScope
            itemType="http://schema.org/PlumbingService"
        >
            <div className="hidden">
                <meta itemProp="description"
                      content="Professional backflow testing and certification services in Phoenix, AZ"/>
                <meta itemProp="areaServed" content="Phoenix Metropolitan Area"/>
                <link itemProp="image" href="/ABFLogo.jpg"/>
            </div>

            <Link href="/" className="h-10 md:h-16" aria-label="Go to homepage">
                <Image
                    src="/ABFLogo.jpg"
                    width={227}
                    height={42}
                    alt="AnyBackflow.com Inc"
                    className="h-full w-auto"
                    itemProp="logo"
                />
            </Link>

            <nav className="flex-none flex flex-wrap items-center gap-2 justify-end">
                <a href="tel:+16022282923"
                   className="btn btn-primary flex items-center gap-2"
                   itemProp="telephone"
                   content="+16022282923"
                   aria-label="Call us at (602) 228-2923">
                    <Phone size={20} aria-hidden="true"/>
                    <span className="sr-only">Call Us</span>
                </a>
                <a href="#contact"
                   className="btn btn-primary"
                   itemProp="potentialAction"
                   itemScope
                   itemType="http://schema.org/BookAction"
                   aria-label="Contact us for booking">
                    <span itemProp="name">Book Now</span>
                </a>
            </nav>
        </header>
    );
};

export default Header;