"use client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function ProductAddForm() {
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_SERVER_ADDRESS;

  console.log(API_URL);

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const form = e.target;
    const brand = form.brand.value;
    const name = form.name.value;
    const image = form.image.value;
    const description = form.description.value;
    const price = form.price.value;

    const payload = { brand, name, image, description, price };

    try {
      const res = await fetch(`${API_URL}/api/items`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        toast.success("Product added successfully!");
        router.push("/products");
        form.reset();
      } else {
        toast.error("Failed to add product. Try again.");
      }
    } catch (error) {
      toast.error("⚠️ Something went wrong.");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
      <form onSubmit={handleAddProduct} className="space-y-5">
        {/* Brand Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Brand Name
          </label>
          <input
            type="text"
            name="brand"
            placeholder="Enter brand name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition text-gray-600"
            required
          />
        </div>

        {/* Product Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition text-gray-600"
            required
          />
        </div>

        {/* Product Image */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Product Image URL
          </label>
          <input
            type="url"
            name="image"
            placeholder="Enter image URL"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition text-gray-600"
            required
          />
        </div>

        {/* Product Description */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter product description"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none text-gray-600"
            rows={4}
          />
        </div>

        {/* Product Price */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="Enter product price"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition text-gray-600"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition cursor-pointer"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
