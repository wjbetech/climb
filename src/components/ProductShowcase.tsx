import React from "react";
import tshirtImage from "../assets/merchandise/climb-logo-small-tshirt-black.png";
import buttonImage from "../assets/merchandise/climb-logo-notext-button-white.png";
import stickerImage from "../assets/merchandise/climb-logo-sticker-white.png";
import capImage from "../assets/merchandise/climb-logo-notext-cap-black.png";

const products = [
  { name: "Stickers", image: stickerImage },
  { name: "T-Shirts", image: tshirtImage },
  { name: "Caps", image: capImage },
  { name: "Buttons", image: buttonImage },
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="min-h-screen *:py-16 px-4 bg-gray-100 place-content-center">
      <div className="w-full max-w-5xl md:w-[70%] mx-auto px-2 sm:px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-center mb-8">
          Get Ready to Climb.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col items-center bg-white rounded-lg shadow p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-48 h-48 object-contain mb-2"
              />
              <span className="font-medium text-gray-800">{product.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
