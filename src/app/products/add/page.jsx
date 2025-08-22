import React from "react";
import ProductAddForm from "./components/ProductAddForm";

export default function ProductAddPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Add a <span className="text-orange-500">New Product</span>
          </h3>
          <p className="text-gray-600 mt-2">
            Fill in the details below to add a new product to your store.
          </p>
        </div>

        {/* Form Card */}
        <div>
          <ProductAddForm />
        </div>
      </div>
    </div>
  );
}
