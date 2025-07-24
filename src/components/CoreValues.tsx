import React from "react";

const values = [
  { title: "Obsess", description: "Fall in love with yourself and your goals. Obsess over the future you" },
  { title: "Pursue", description: "Pursue your goals, your dreams, your ideal you" },
  {
    title: "Climb",
    description: "Climb that mountain every damn day. One more rep, one more line, one more dose of self-love"
  }
];

const CoreValues: React.FC = () => {
  return (
    <section className="py-16 h-[600px] px-4 bg-white place-content-center">
      <div className="w-full max-w-5xl md:w-[70%] mx-auto px-2 sm:px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-center mb-8">Our Values</h2>
        <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto justify-center">
          {values.map((value) => (
            <div key={value.title} className="flex-1 bg-gray-50 rounded-lg shadow p-6 text-center">
              <h3 className="text-xl font-montserrat font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
