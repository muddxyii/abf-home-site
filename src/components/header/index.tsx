'use client'

import React from "react";
import {Phone} from "lucide-react";
import Link from "next/link";

const Header = () => {
    return (
        <header
            className="navbar bg-base-100 flex flex-wrap items-center justify-between px-4"
            itemScope
            itemType="http://schema.org/Organization"
        >
            <div className="flex-1">
                <Link href="/" itemProp="name" className="btn btn-ghost normal-case text-xl">
                    AnyBackflow.com Inc
                </Link>
            </div>

            <div className="flex-none flex flex-wrap items-center gap-2 justify-end">
                <a href="tel:+16022282923"
                   className="btn btn-primary flex items-center gap-2"
                   itemProp="telephone"
                   aria-label="Call us at (602) 228-2923">
                    <Phone size={20}/>
                </a>
                <a href="#contact"
                   className="btn btn-primary"
                   aria-label="Contact us for booking">
                    Book Now
                </a>
            </div>
        </header>
    );
};

export default Header;