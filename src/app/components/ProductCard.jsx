import Link from "next/link";
import React from "react";

export default function ProductCard({ product }) {
  const { _id, brand, name, image, price } = product;

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
      {/* Product Image */}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
          {brand}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-orange-500 font-bold text-xl mt-2">${price}</p>

        {/* Button */}
        <Link href={`/products/${_id}`}>
          <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition duration-300 cursor-pointer">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
