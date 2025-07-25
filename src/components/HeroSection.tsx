import React from "react";
import climbLogo from "../assets/climb-logo.png";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] bg-white text-center">
      <img src={climbLogo} alt="Climb Logo" className="object-contain mb-6" />
      <p className="text-2xl text-gray-700 tracking-wide">
        Obsess · Pursue · Climb
      </p>
    </section>
  );
};

export default HeroSection;
