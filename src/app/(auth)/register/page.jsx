import React from "react";
import RegisterForm from "./components/RegisterForm";
import SocialLogin from "../components/SocialLogin";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="border border-orange-500 rounded-xl py-4 lg:py-8">
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
