import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="w-full px-16 mx-auto flex items-center justify-between h-16">
        {/* Brand/Logo */}
        <div className="text-2xl font-montserrat font-bold underline underline-offset-4">
          Climb<span className="text-primary">.</span>
        </div>
        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-lg font-medium font-helvetica">
          <Link
            to="/mantra"
            className="transition-colors duration-200 text-black hover:text-orange-900 hover:underline underline-offset-4">
            Our Mantra
          </Link>
          <a
            href="#products"
            className="transition-colors duration-200 text-black hover:text-green-700 hover:underline underline-offset-4">
            Products
          </a>
          <a
            href="#signup"
            className="transition-colors duration-200 text-black hover:text-blue-800 hover:underline underline-offset-4">
            Sign Up
          </a>
        </div>
        {/* Mobile menu placeholder */}
        <div className="md:hidden">{/* Hamburger icon or mobile menu can go here */}</div>
      </div>
    </nav>
  );
};

export default Navbar;
