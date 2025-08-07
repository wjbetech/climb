import React from "react";
import { motion } from "framer-motion";
import tshirtImage from "../assets/merchandise/climb-logo-small-tshirt-black.png";
import buttonImage from "../assets/merchandise/climb-logo-notext-button-white.png";
import stickerImage from "../assets/merchandise/climb-logo-sticker-white.png";
import capImage from "../assets/merchandise/climb-logo-notext-cap-black.png";

const products = [
  {
    name: "Stickers",
    image: stickerImage,
    purpose: "Share your journey",
  },
  {
    name: "T-Shirts",
    image: tshirtImage,
    purpose: "Wear your values",
  },
  {
    name: "Caps",
    image: capImage,
    purpose: "Carry your purpose",
  },
  {
    name: "Buttons",
    image: buttonImage,
    purpose: "Express your climb",
  },
];

const ProductShowcase: React.FC = () => {
  return (
    <section
      id="products"
      className="py-20 px-4 bg-gray-50 min-h-screen flex items-center"
    >
      <div className="w-full max-w-6xl mx-auto px-4 text-center">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6 text-black">
            <span className="artistic-streak-angled">
              More Than Merchandise
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            Every piece tells your story. Every item carries your commitment to
            growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="bg-white rounded-lg border border-gray-100 shadow-sm px-6 py-10 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-contain mx-auto"
                  loading="lazy"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2 text-black">
                {product.name}
              </h3>
              <p className="text-sm text-gray-700 font-light tracking-wide italic">
                {product.purpose}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-gray-600 mt-12 font-light tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Coming soon - join our mailing list to be the first to know
        </motion.p>
      </div>
    </section>
  );
};

export default ProductShowcase;
