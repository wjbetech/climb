import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Mantra from "./components/Mantra";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex flex-col w-screen">
        {/* pt-16 to offset fixed navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/mantra" element={<Mantra />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
