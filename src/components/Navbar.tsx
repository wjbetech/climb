import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import climbLogoTextless from "../assets/climb-logo-textless.png";

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.getElementById("navbar");
      if (
        navbar &&
        !navbar.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 font-light tracking-wide"
    >
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

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-700 hover:text-black focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transition-transform duration-300 ${
                  isMobileMenuOpen ? "transform rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-transform duration-300 ${
                  isMobileMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg"
          >
            <div className="px-8 py-6 space-y-4">
              {isHomePage ? (
                <>
                  <button
                    onClick={() => scrollToSection("mantra")}
                    className="block w-full text-left text-gray-700 hover:text-black font-light tracking-wide py-2 transition-colors duration-200"
                  >
                    Our Story
                  </button>
                  <button
                    onClick={() => scrollToSection("values")}
                    className="block w-full text-left text-gray-700 hover:text-black font-light tracking-wide py-2 transition-colors duration-200"
                  >
                    Values
                  </button>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="block w-full text-left text-gray-700 hover:text-black font-light tracking-wide py-2 transition-colors duration-200"
                  >
                    Products
                  </button>
                  <button
                    onClick={() => scrollToSection("connect")}
                    className="block w-full text-left text-gray-700 hover:text-black font-light tracking-wide py-2 transition-colors duration-200"
                  >
                    Connect
                  </button>
                </>
              ) : (
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-black font-light tracking-wide py-2 transition-colors duration-200"
                >
                  Home
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
