// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // body scroll lock + ESC to close
    useEffect(() => {
        const onEsc = (e) => e.key === "Escape" && setOpen(false);
        document.body.style.overflow = open ? "hidden" : "";
        window.addEventListener("keydown", onEsc);
        return () => {
            window.removeEventListener("keydown", onEsc);
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            {/* Top Navbar */}
            <header className="relative top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] z-40">
                <div className="flex items-center justify-between rounded-full border border-white/15 bg-white/10 backdrop-blur-xl px-6 py-3 shadow-lg">
                    {/* Logo */}
                    <div className="font-bold text-2xl">QuickDoc</div>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex gap-10 font-medium">
                        <a href="#" className="hover:text-green-400 transition">Features</a>
                        <a href="#" className="hover:text-green-400 transition">Pricing</a>
                        <a href="#" className="hover:text-green-400 transition">Reviews</a>
                    </nav>

                    {/* Desktop CTA */}
                    <button className="hidden md:flex items-center bg-black text-white px-6 py-2 rounded-full hover:opacity-90 transition">
                        Get Mintro App
                        <span className="ml-3 grid place-items-center w-6 h-6 bg-white rounded-full">
                            <GoArrowUpRight className="text-black" />
                        </span>
                    </button>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-3xl text-white"
                    >
                        <HiMenuAlt3 />
                    </button>
                </div>
            </header>

            {/* Drawer + Overlay */}
            <div
                className={`fixed inset-0 z-40 transition-opacity duration-200 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Overlay (click to close) */}
                <div
                    className="absolute inset-0 bg-black/50"
                    onClick={() => setOpen(false)}
                />

                {/* Drawer */}
                <aside
                    className={`absolute right-0 top-0 h-full w-72 bg-blue-500/20 backdrop-blur-2xl border-l border-white/30  text-gray-900 shadow-2xl transform transition-transform duration-300  ${open ? "translate-x-0" : "translate-x-full"}`}
                >
                    {/* Floating Close Button */}
                    <button
                        aria-label="Close menu"
                        onClick={() => setOpen(false)}
                        className="absolute top-4 right-4 text-3xl text-white hover:text-green-300 transition"
                    >
                        <HiX />
                    </button>

                    {/* Drawer content */}
                    <div className="flex flex-col gap-8 px-6 pt-16 text-white">
                        <a href="#" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-green-300 transition transform hover:translate-x-1">
                            Features
                        </a>
                        <a href="#" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-green-300 transition transform hover:translate-x-1">
                            Pricing
                        </a>
                        <a href="#" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-green-300 transition transform hover:translate-x-1">
                            Reviews
                        </a>

                        {/* CTA Button */}
                        <button className="mt-6 flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/30 hover:scale-105 transition">
                            Get Mintro App
                            <span className="ml-3 grid place-items-center w-6 h-6 bg-white rounded-full">
                                <GoArrowUpRight className="text-black" />
                            </span>
                        </button>
                    </div>
                </aside>

            </div>
        </>
    );
};

export default Navbar;
