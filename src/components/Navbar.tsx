"use client"
import React, { useState } from "react";
const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = ["ABOUT ME", "PORTFOLIO", "SKILLS", "SERVICES", "TESTIMONIALS"];

    return (
        <nav className="bg-black text-gray-300 font-extralight">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Left - Name */}
                    <div className="text-lg font-bold">ERICA JAMES</div>

                    {/* Center - Links (desktop) */}
                    <div className="hidden md:flex space-x-8">
                        {links.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="hover:text-gray-300 text-sm tracking-wide"
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Right - Button (desktop) */}
                    <div className="hidden md:block">
                        <button className="bg-white text-black font-light px-4 py-2 rounded-3xl">
                            GET IN TOUCH
                        </button>
                    </div>

                    {/* Mobile menu toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(true)} aria-label="Open menu">
                            <span className="text-2xl">&#9776;</span> {/* Hamburger icon */}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile full-screen menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-black text-white z-50 flex flex-col">
                    {/* Top bar with name & close */}
                    <div className="flex items-center justify-between h-16 px-4">
                        <div className="text-lg font-bold">ERICA JAMES</div>
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                            className="text-3xl"
                        >
                            &times;
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex-1 flex flex-col justify-center items-start m-10 space-y-12">
                        {links.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-lg hover:text-gray-300 tracking-wide"
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Button at bottom */}
                    <div className="px-4 pb-6">
                        <button className="bg-white text-black font-light px-4 py-2 w-full rounded-3xl">
                            GET IN TOUCH
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
