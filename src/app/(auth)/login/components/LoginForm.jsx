"use client";

import React from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    await signIn("credentials", { email, password });
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="space-y-5">
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
