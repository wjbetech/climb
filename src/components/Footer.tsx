import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 bg-white border-t text-center">
      <div className="w-full max-w-5xl md:w-[70%] mx-auto px-2 sm:px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and brand name */}
        <div className="text-xl font-montserrat font-bold underline underline-offset-6">
          Climb<span className="text-primary">.</span>
        </div>
        {/* Social links placeholder */}
        <div className="flex gap-4 justify-center">
          <a href="#" className="text-gray-500 hover:text-black" aria-label="Instagram">
            {/* Instagram icon placeholder */}
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-instagram">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
            </svg>
          </a>
        </div>
        <div className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Climb.</div>
      </div>
    </footer>
  );
};

export default Footer;
