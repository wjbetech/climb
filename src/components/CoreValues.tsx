import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    title: "Obsess",
    description:
      "Fall in love with yourself and your goals. Obsess over the future you",
  },
  {
    title: "Pursue",
    description: "Pursue your goals, your dreams, your ideal you",
  },
  {
    title: "Climb",
    description:
      "Climb that mountain every damn day. One more rep, one more line, one more dose of self-love",
  },
];

const CoreValues: React.FC = () => {
  return (
    <section
      id="values"
      className="py-20 px-4 bg-white min-h-screen flex items-center"
    >
      <div className="w-full max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-montserrat font-bold text-center mb-16 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="artistic-streak">Our Values</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white border border-gray-100 rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-montserrat font-bold mb-4 text-black">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed font-light tracking-wide">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
