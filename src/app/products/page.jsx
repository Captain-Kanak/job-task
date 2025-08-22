import React from "react";
import ProductCard from "../components/ProductCard";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;

  console.log(NEXT_PUBLIC_SERVER_ADDRESS);

  const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`, {
    cache: "force-cache",
  });
  const products = await res.json();

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
            All <span className="text-orange-500">Products</span>
          </h3>
          <p className="text-gray-600 mt-2">
            Browse our complete collection of quality items and find the perfect
            product for you.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
