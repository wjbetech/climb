import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MissionStatement from "../components/MissionStatement";
import ProductShowcase from "../components/ProductShowcase";
import CoreValues from "../components/CoreValues";
import MailingListSignup from "../components/MailingListSignup";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col pt-16 w-screen">
      {/* pt-16 to offset fixed navbar height */}
      <Navbar />
      <HeroSection />
      <MissionStatement />
      <ProductShowcase />
      <CoreValues />
      <MailingListSignup />
      <Footer />
    </div>
  );
};

export default Home;
