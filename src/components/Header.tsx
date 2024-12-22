﻿import React from "react";
import Link from "next/link";
import {Phone} from "lucide-react";

const Header = () => {
    return (
        <header className="navbar bg-base-100" itemScope itemType="http://schema.org/Organization">
            <div className="flex-1">
                <Link href="/" itemProp="name" className="btn btn-ghost text-xl">AnyBackflow</Link>
            </div>
            <div className="flex-none">
                <a href="tel:+16022282923"
                   className="flex items-center gap-2 text-primary hover:text-primary/80"
                   itemProp="telephone"
                   aria-label="Call us at (602) 228-2923">
                    <Phone size={20}/>
                    <span className="font-semibold">(602) 228-2923</span>
                </a>
                <Link href="#contact" className="btn btn-primary ml-4" aria-label="Contact us for booking">
                    Book Now
                </Link>
            </div>
        </header>
    )
}

export default Header