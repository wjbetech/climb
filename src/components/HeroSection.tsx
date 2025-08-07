import React from "react";
import { motion } from "framer-motion";
import climbLogo from "../assets/climb-logo.png";

const HeroSection: React.FC = () => {
  const scrollToMantra = () => {
    const element = document.getElementById("mantra");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-white text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <motion.img
          src={climbLogo}
          alt="Climb."
          className="object-contain mb-8 max-h-64 md:max-h-80 lg:max-h-96 xl:max-h-[28rem] 2xl:max-h-[32rem] w-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
        <motion.p
          className="text-xl md:text-2xl text-gray-700 tracking-wide font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Obsess · Pursue · Climb
        </motion.p>
      </motion.div>

      {/* Clickable Scroll indicator - moved higher up */}
      <motion.button
        onClick={scrollToMantra}
        className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform duration-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center hover:border-gray-600 transition-colors duration-200"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
