import React from "react";

const products = [
  { name: "Stickers", image: "https://via.placeholder.com/150" },
  { name: "T-Shirts", image: "https://via.placeholder.com/150" },
  { name: "Caps", image: "https://via.placeholder.com/150" },
  { name: "Water Bottles", image: "https://via.placeholder.com/150" },
  { name: "Stationery", image: "https://via.placeholder.com/150" }
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="h-[600px] *:py-16 px-4 bg-gray-100 place-content-center">
      <div className="w-full max-w-5xl md:w-[70%] mx-auto px-2 sm:px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-center mb-8">Get Ready to Climb.</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {products.map((product) => (
            <div key={product.name} className="flex flex-col items-center bg-white rounded-lg shadow p-4">
              <img src={product.image} alt={product.name} className="w-48 h-48 object-contain mb-2" />
              <span className="font-medium text-gray-800">{product.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
