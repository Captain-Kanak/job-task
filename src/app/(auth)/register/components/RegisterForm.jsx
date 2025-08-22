"use client";

import { registerUser } from "@/app/actions/auth/registerUser";
import React from "react";

export default function RegisterForm() {
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const payload = { name, email, password };

    await registerUser(payload);
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
          Register Now
        </button>
      </form>
    </div>
  );
}
