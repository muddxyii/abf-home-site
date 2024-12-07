import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="navbar bg-base-100" itemScope itemType="http://schema.org/Organization">
            <div className="flex-1">
                <Link href="/" itemProp="name" className="btn btn-ghost text-xl">AnyBackflow</Link>
            </div>
            <div className="flex-none">
                <Link href="tel:6022282923" itemProp="telephone" className="btn btn-ghost" aria-label="Call us at (602) 228-2923">(602) 228-2923</Link>
                <Link href="#contact" className="btn btn-primary" aria-label="Contact us for booking">Book Now</Link>
            </div>
        </header>
    )
}

export default Header