'use client'

import React, {useState} from "react";
import {Menu, Phone, X} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={`relative bg-base-100 ${isMenuOpen ? 'mb-16' : ''}`} itemScope
                itemType="http://schema.org/Organization">
            <div className="flex items-center justify-between px-4 py-2">
                <Link href="/" itemProp="name" className="h-12 md:h-16">
                    <Image
                        src="/images/logo.svg"
                        width={250}
                        height={60}
                        alt="AnyBackflow.com Inc"
                        className="h-full w-auto invert dark:invert-0"
                    />
                </Link>

                <div className="hidden md:flex items-center gap-4">
                    <a href="tel:+16022282923"
                       className="flex items-center gap-2 text-primary hover:text-primary/80"
                       itemProp="telephone"
                       aria-label="Call us at (602) 228-2923">
                        <Phone size={20}/>
                        <span className="font-semibold">(602) 228-2923</span>
                    </a>
                    <a href="#contact"
                       className="btn btn-primary"
                       aria-label="Contact us for booking">
                        Book Now
                    </a>
                </div>

                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu">
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-base-100 shadow-lg md:hidden">
                    <div className="flex flex-col p-4 gap-4">
                        <a href="tel:+16022282923"
                           className="flex items-center gap-2 text-primary hover:text-primary/80"
                           itemProp="telephone">
                            <Phone size={20}/>
                            <span className="font-semibold">(602) 228-2923</span>
                        </a>
                        <a href="#contact"
                           className="btn btn-primary w-full"
                           aria-label="Contact us for booking">
                            Book Now
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;