"use client";

import React from "react";
import shopingLottie from "../../../public/lotties/Shopping.json";
import Lottie from "lottie-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <p className="uppercase tracking-wide text-sm font-semibold text-orange-500">
            Your One-Stop Shop
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Discover the Best <span className="text-orange-500">Products</span>{" "}
            <br />
            at Unbeatable Prices
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Shop from our wide collection of high-quality products tailored for
            your needs. Get the best deals, fast delivery, and top-notch
            service—all in one place.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Lottie animationData={shopingLottie} loop={true} />
        </div>
      </div>
    </section>
  );
}
