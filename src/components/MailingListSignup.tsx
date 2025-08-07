import React, { useState } from "react";
import { motion } from "framer-motion";

const MailingListSignup: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="connect" className="py-20 px-4 bg-white text-center">
      <div className="w-full max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6 text-black">
            <span className="paint-stroke">Climb. with us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Be part of the journey. Get inspiration, updates, and early access
            to our community.
          </p>
        </motion.div>

        <motion.form
          className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent w-full md:flex-1 font-light"
          />
          <motion.button
            type="button"
            className="px-8 py-3 rounded-lg font-semibold bg-black text-white hover:bg-gray-800 transition-colors duration-200 font-montserrat"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default MailingListSignup;
