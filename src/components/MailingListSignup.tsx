import React, { useState } from "react";

const MailingListSignup: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 px-4 bg-gray-100 text-center">
      <div className="w-full max-w-5xl md:w-[70%] mx-auto px-2 sm:px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-montserrat font-bold mb-4">Join Our Mailing List</h2>
        <p className="text-gray-700 mb-6">Get inspiration, updates, and exclusive offers.</p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-auto"
          />
          <button
            type="button"
            className="px-6 py-2 rounded font-semibold bg-green-500 text-white cursor-pointer hover:bg-green-600/80 transition">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default MailingListSignup;
