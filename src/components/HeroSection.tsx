import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-50 text-center p-8">
      <div className="w-full max-w-5xl md:w-[70%] mx-auto px-2 sm:px-4 text-center">
        {/* Logo/Title with Montserrat */}
        <div className="mb-4 text-[64px] font-montserrat font-bold tracking-tight underline underline-offset-6">
          Climb<span className="text-primary">.</span>
        </div>
        {/* One-liner */}
        <p className="text-xl text-gray-600 max-w-xl mx-auto">Obsess · Pursue · Climb</p>
      </div>
    </section>
  );
};

export default HeroSection;
