import React from "react";
import { motion } from "framer-motion";

const MissionStatement: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white min-h-screen flex items-center">
      <div className="w-full max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-montserrat font-bold mb-12 text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="artistic-streak-angled">Our Mission</span>
        </motion.h2>{" "}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
            We believe in growth, momentum, and the beauty of self-betterment.
          </p>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
            <span className="font-bold text-black">Climb.</span> exists to
            inspire you to reach new heights—inside and out.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionStatement;
