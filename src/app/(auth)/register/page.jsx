import React from "react";
import RegisterForm from "./components/RegisterForm";
import SocialLogin from "../components/SocialLogin";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center border border-orange-500 rounded-xl py-10">
      <h1 className="lg:text-3xl font-extrabold mb-10">
        Register Your Account
      </h1>
      <RegisterForm />
      <div className="mt-5 flex flex-col items-center gap-4">
        <p className="font-semibold">Or Continue With</p>
        <SocialLogin />
        <p>
          Don't have an account?{" "}
          <Link href={"/login"} className="text-orange-500 underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
