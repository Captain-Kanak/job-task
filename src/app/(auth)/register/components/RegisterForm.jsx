"use client";

import React from "react";

export default function RegisterForm() {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleRegister} className="space-y-5">
        {/* Name Field */}
        <div>
          <label className="font-bold">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="font-bold">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="font-bold">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full btn bg-orange-500 text-white rounded-lg font-bold"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
