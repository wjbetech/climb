import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import CartSidebar from "../components/CartSidebar";
import tshirtImage from "../assets/merchandise/climb-logo-small-tshirt-black.png";
import buttonImage from "../assets/merchandise/climb-logo-notext-button-white.png";
import stickerImage from "../assets/merchandise/climb-logo-sticker-white.png";
import capImage from "../assets/merchandise/climb-logo-notext-cap-black.png";

interface Product {
  id: string;
  name: string;
  image: string;
  purpose: string;
  price: number;
  sizes?: string[];
  colors?: string[];
  description: string;
}

const products: Product[] = [
  {
    id: "stickers",
    name: "Climb. Stickers",
    image: stickerImage,
    purpose: "Share your journey",
    price: 5,
    description:
      "Premium vinyl stickers perfect for laptops, water bottles, and anywhere you want to share your climb.",
  },
  {
    id: "tshirt",
    name: "Climb. T-Shirt",
    image: tshirtImage,
    purpose: "Wear your values",
    price: 28,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Gray"],
    description:
      "Soft, comfortable cotton blend tee that represents your commitment to growth and authentic living.",
  },
  {
    id: "cap",
    name: "Climb. Cap",
    image: capImage,
    purpose: "Carry your purpose",
    price: 22,
    colors: ["Black", "Navy", "White"],
    description:
      "Classic adjustable cap with embroidered logo. Perfect for any adventure or daily wear.",
  },
  {
    id: "button",
    name: "Climb. Pin",
    image: buttonImage,
    purpose: "Express your climb",
    price: 8,
    description:
      "Enamel pin with secure backing. Add meaning to your jacket, bag, or collection.",
  },
];

const Products: React.FC = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: { size?: string; color?: string };
  }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (productId: string) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
      } else {
        newWishlist.add(productId);
      }
      return newWishlist;
    });
  };

  const updateOption = (productId: string, option: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [option]: value,
      },
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getCartItems = () => {
    return Object.entries(cart)
      .map(([productId, quantity]) => {
        const product = products.find((p) => p.id === productId);
        const options = selectedOptions[productId];
        return {
          id: productId,
          name: product?.name || "",
          price: product?.price || 0,
          quantity,
          size: options?.size,
          color: options?.color,
        };
      })
      .filter((item) => item.quantity > 0);
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => {
        const newCart = { ...prev };
        delete newCart[productId];
        return newCart;
      });
    } else {
      setCart((prev) => ({
        ...prev,
        [productId]: quantity,
      }));
    }
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[productId];
      return newCart;
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-16 px-8 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 text-black">
            <span className="artistic-streak-angled">Climb. Collection</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-light tracking-wide leading-relaxed">
            Every piece tells your story. Every item carries your commitment to
            authentic growth.
          </p>
        </motion.div>

        {/* Cart Summary - Floating Button */}
        {getTotalItems() > 0 && (
          <motion.button
            onClick={() => setIsCartOpen(true)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed top-20 right-4 bg-black text-white p-4 rounded-full shadow-lg z-40 hover:bg-gray-800 transition-colors duration-200"
            aria-label="Open shopping cart"
          >
            <FaShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium">
              {getTotalItems()}
            </span>
          </motion.button>
        )}
      </section>

      {/* Products Grid */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Product Image */}
                <div className="relative p-6 bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain"
                    loading="lazy"
                  />
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
                    aria-label="Add to wishlist"
                  >
                    <FaHeart
                      className={`w-4 h-4 ${
                        wishlist.has(product.id)
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-montserrat font-semibold text-lg mb-2 text-black">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 italic mb-3 font-light tracking-wide">
                    {product.purpose}
                  </p>
                  <p className="text-sm text-gray-700 mb-4 font-light leading-relaxed">
                    {product.description}
                  </p>

                  {/* Size Selection */}
                  {product.sizes && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Size
                      </label>
                      <select
                        value={selectedOptions[product.id]?.size || ""}
                        onChange={(e) =>
                          updateOption(product.id, "size", e.target.value)
                        }
                        className="w-full p-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      >
                        <option value="">Select size</option>
                        {product.sizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Color Selection */}
                  {product.colors && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Color
                      </label>
                      <select
                        value={selectedOptions[product.id]?.color || ""}
                        onChange={(e) =>
                          updateOption(product.id, "color", e.target.value)
                        }
                        className="w-full p-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      >
                        <option value="">Select color</option>
                        {product.colors.map((color) => (
                          <option key={color} value={color}>
                            {color}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-montserrat font-semibold text-black">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 font-light tracking-wide"
                    >
                      <FaShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>

                  {/* Cart quantity indicator */}
                  {cart[product.id] && (
                    <div className="mt-3 text-sm text-green-600 font-medium">
                      {cart[product.id]} in cart
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-16 text-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-8"
        >
          <p className="text-gray-600 font-light tracking-wide">
            Our collection is launching soon. Items shown are for preview - join
            our mailing list to be the first to know when they're available.
          </p>
        </motion.div>
      </section>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={getCartItems()}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
};

export default Products;
