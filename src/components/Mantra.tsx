import React from "react";
import { motion } from "framer-motion";

const Mantra: React.FC = () => {
  return (
    <section
      id="mantra"
      className="py-20 px-4 bg-white text-center min-h-screen flex items-center"
    >
      <div className="w-full max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-montserrat font-bold mb-16 text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="paint-stroke">Our Mantra</span>
        </motion.h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We believe in the obsessed. The ones who pursue. The ones who{" "}
            <span className="font-bold text-black">climb.</span>
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            It's not about waking up at 7am or 10am. It's not about who can run
            the fastest kilometer. It's not about your age, your gender, your
            height, your income, or what you had for your last meal.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            It's about becoming who you were meant to be. Falling in love with
            your ugly side.{" "}
            <span className="font-bold text-black">
              It's about the commitment you make to yourself to be the best that
              you can.
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Mantra;
