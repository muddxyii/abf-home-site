import React from "react";

const Header = () => {
    return (
        <header className="navbar bg-base-100" itemScope itemType="http://schema.org/Organization">
            <div className="flex-1">
                <a href="/" itemProp="name" className="btn btn-ghost text-xl">AnyBackflow</a>
            </div>
            <div className="flex-none">
                <a href="tel:6022282923" itemProp="telephone" className="btn btn-ghost" aria-label="Call us at (602) 228-2923">(602) 228-2923</a>
                <a href="#contact" className="btn btn-primary" aria-label="Contact us for booking">Book Now</a>
            </div>
        </header>
    )
}

export default Header