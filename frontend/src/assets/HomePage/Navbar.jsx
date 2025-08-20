// src/components/Navbar.jsx
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";



const Navbar = () => (
<nav
  style={{ width: '80%' }}
  className="mx-auto top-10 z-10 backdrop-filter backdrop-blur-lg  border-gray-200  bg-white/30 rounded-full"
>        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Left: Logo + Nav links */}
             <div className="text-green-600 font-bold text-2xl">QuickDoc</div>
            <div className="flex items-center space-x-10">
               
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <a href="#" className="hover:text-green-600">Features</a>
                    <a href="#" className="hover:text-green-600">Pricing</a>
                    <a href="#" className="hover:text-green-600">Reviews</a>
                </nav>
            </div>

            {/* CTA Button */}


            <button className="flex items-center bg-black text-white px-6 py-2 rounded-full hover:opacity-90 transition">
                Get Mintro App
                <span className="ml-3 flex items-center justify-center w-6 h-6 bg-white rounded-full">
                    <GoArrowUpRight className="text-black" />
                </span>
            </button>

        </div>
    </nav>
);

export default Navbar;
