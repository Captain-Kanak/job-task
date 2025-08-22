import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default async function FeaturedProducts() {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "no-store", // ensure fresh data in Next.js
  });
  const products = await res.json();
  const firstEight = products.slice(0, 8);

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
            Featured <span className="text-orange-500">Products</span>
          </h3>
          <p className="text-gray-600 mt-2">
            Discover our top picks of high-quality products, handpicked just for
            you.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {firstEight.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-8">
          <Link href={"/products"}>
            <button className="bg-orange-500 py-2 px-4 rounded-lg cursor-pointer hover:bg-orange-600 transition-all duration-200">
              All Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
