import React from "react";
import { Link, useLocation } from "react-router-dom";
import climbLogoTextless from "../assets/climb-logo-textless.png";

const Navbar: React.FC = () => {
  const location = useLocation();
  const isMantraPage = location.pathname === "/mantra";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="w-full px-16 mx-auto flex items-center justify-between h-16">
        {/* Brand/Logo */}
        <div className="flex h-full items-center">
          <img
            src={climbLogoTextless}
            alt="Climb Logo"
            className="h-16 w-auto object-contain"
            style={{ maxHeight: "5rem" }}
          />
        </div>
        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-lg font-medium font-helvetica">
          {isMantraPage ? (
            <Link
              to="/"
              className="transition-colors duration-200 text-black hover:text-orange-900 hover:underline underline-offset-4"
            >
              Home
            </Link>
          ) : (
            <Link
              to="/mantra"
              className="transition-colors duration-200 text-black hover:text-orange-900 hover:underline underline-offset-4"
            >
              Our Mantra
            </Link>
          )}
          <Link
            to="/products"
            className="transition-colors duration-200 text-black hover:text-green-700 hover:underline underline-offset-4"
          >
            Products
          </Link>
          <Link
            to="/signup"
            className="transition-colors duration-200 text-black hover:text-blue-800 hover:underline underline-offset-4"
          >
            Sign Up
          </Link>
        </div>
        {/* Mobile menu placeholder */}
        <div className="md:hidden">
          {/* Hamburger icon or mobile menu can go here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
