import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <p className="uppercase tracking-wide text-sm font-semibold text-blue-600">
            Your One-Stop Shop
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Discover the Best <span className="text-blue-600">Products</span>{" "}
            <br />
            at Unbeatable Prices
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Shop from our wide collection of high-quality products tailored for
            your needs. Get the best deals, fast delivery, and top-notch
            service—all in one place.
          </p>
          {/* 
          <div className="flex justify-center md:justify-start gap-4">
            <button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg"
            >
              <FaShoppingCart /> Start Shopping
            </button>

            <button
              whileHover={{ scale: 1.05 }}
              className="border border-gray-400 hover:border-blue-600 hover:text-blue-600 transition-all px-6 py-3 rounded-2xl text-gray-700"
            >
              Learn More
            </button>
          </div> */}
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/4jXQp7y/shopping-bags.png"
            alt="Shopping illustration"
            className="w-full max-w-md drop-shadow-xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
