import React from "react";
import HeroSection from "../components/HeroSection";
import Mantra from "../components/Mantra";
import MissionStatement from "../components/MissionStatement";
import CoreValues from "../components/CoreValues";
import ProductShowcase from "../components/ProductShowcase";
import MailingListSignup from "../components/MailingListSignup";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <Mantra />
      <MissionStatement />
      <CoreValues />
      <ProductShowcase />
      <MailingListSignup />
      <Footer />
    </div>
  );
};

export default Home;
