import React from "react";

const MissionStatement: React.FC = () => {
  return (
    <section className="h-[600px] py-16 px-4 bg-white text-center place-content-center">
      <div className="w-full max-w-5xl md:w-[70%] mx-auto px-2 sm:px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-montserrat font-bold mb-4 underline underline-offset-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We believe in growth, momentum, and the beauty of self-betterment. <br />
          Climb. exists to inspire you to reach new heights—inside and out.
        </p>
      </div>
    </section>
  );
};

export default MissionStatement;
