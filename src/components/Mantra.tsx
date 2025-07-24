import React from "react";

const Mantra: React.FC = () => {
  return (
    <section id="values" className="py-16 px-4 bg-white text-center">
      <div className="w-full max-w-5xl md:w-[70%] mx-auto px-2 sm:px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-montserrat font-bold mb-16 underline underline-offset-6">
          Our Mantra
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-helvetica">
          We believe in the obsessed. The ones who pursue. The ones who <span className="font-bold">climb.</span>
        </p>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-helvetica">
          It's not about waking up at 7am or 10am. It's not about who can run the fastest kilometer. It's not about your
          age, your gender, your height, your income, or what you had for your last meal.
        </p>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-helvetica">
          It's about becoming who you were meant to be. Falling in love with your ugly side.{" "}
          <span className="font-bold">It's about the commitment you make to yourself to be the best that you can.</span>
        </p>
      </div>
    </section>
  );
};

export default Mantra;
