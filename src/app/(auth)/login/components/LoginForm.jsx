"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginForm() {
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    toast("Please Wait...");

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/products",
      });

      if (res?.ok) {
        router.push("/products");
        form.reset();

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: res?.error || "Something went wrong",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 lg:p-8">
      <h1 className="text-xl lg:text-3xl text-center font-extrabold mb-6">
        Login Your Account
      </h1>
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
