import React from "react";

export default async function ProductDetailsPage({ params }) {
  const id = (await params).id;
  const res = await fetch(
    `http://job-task-git-main-captain-kanaks-projects.vercel.app/${id}`,
    {
      cache: "no-store", // ensures fresh data
    }
  );
  const product = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="bg-white shadow-md rounded-2xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          {/* Title & Brand */}
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-orange-500 font-semibold mt-2">
              {product.brand}
            </p>
          </div>

          {/* Price */}
          <div>
            <p className="text-2xl font-bold text-orange-500">
              ${product.price}
            </p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="leading-relaxed">
              {product.description ||
                "No description available for this product."}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition duration-300 cursor-pointer">
              Add to Cart
            </button>
            <button className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 py-3 rounded-lg font-medium transition duration-300 cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
