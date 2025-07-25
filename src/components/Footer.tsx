import React from "react";
import { FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-8 md:px-20 bg-white border-t">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-0">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-center md:justify-start mb-4 md:mb-0">
          <div className="text-xl font-montserrat font-bold underline underline-offset-6">
            Climb<span className="text-primary">.</span>
          </div>
        </div>
        {/* Center: Social icons */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <div className="flex gap-8 mb-2">
            <a
              href="#"
              className="text-gray-500 hover:text-black"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              aria-label="Twitter"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-red-600"
              aria-label="Pinterest"
            >
              <FaPinterest size={28} />
            </a>
          </div>
          {/* Footer links */}
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-500">
            <a href="#about" className="hover:text-black">
              About
            </a>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
            <a href="#privacy" className="hover:text-black">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-black">
              Terms
            </a>
          </div>
        </div>
        {/* Right: Copyright */}
        <div className="flex-1 flex justify-center md:justify-end items-center mt-6 md:mt-0">
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Climb.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
