import React from "react";
import { Link, useLocation } from "react-router-dom";
import climbLogoTextless from "../assets/climb-logo-textless.png";

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="w-full px-8 md:px-16 mx-auto flex items-center justify-between h-16">
        {/* Brand/Logo */}
        <Link to="/" className="flex h-full items-center">
          <img
            src={climbLogoTextless}
            alt="Climb."
            className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-200"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-sm font-light tracking-wide">
          {isHomePage ? (
            // Smooth scroll navigation for home page
            <>
              <button
                onClick={() => scrollToSection("mantra")}
                className="cursor-pointer transition-colors duration-200 text-gray-700 hover:text-gray-900 hover:underline underline-offset-4"
              >
                Our Story
              </button>
              <button
                onClick={() => scrollToSection("values")}
                className="cursor-pointer transition-colors duration-200 text-gray-700 hover:text-gray-900 hover:underline underline-offset-4"
              >
                Values
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="cursor-pointer transition-colors duration-200 text-gray-700 hover:text-gray-900 hover:underline underline-offset-4"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("connect")}
                className="cursor-pointer transition-colors duration-200 text-gray-700 hover:text-gray-900 hover:underline underline-offset-4"
              >
                Connect
              </button>
            </>
          ) : (
            // Link back to home from other pages
            <Link
              to="/"
              className="transition-colors duration-200 text-gray-700 hover:text-gray-900 hover:underline underline-offset-4"
            >
              Home
            </Link>
          )}
        </div>

        {/* Mobile menu placeholder */}
        <div className="md:hidden">
          {/* Future: hamburger menu for mobile */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
