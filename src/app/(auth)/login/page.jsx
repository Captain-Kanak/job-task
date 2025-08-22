import React from "react";
import LoginForm from "./components/LoginForm";
import SocialLogin from "../components/SocialLogin";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="border border-orange-500 rounded-xl py-10">
      <LoginForm />
      <div className="mt-5 flex flex-col items-center gap-4">
        <p className="font-semibold">Or Continue With</p>
        <SocialLogin />
        <p>
          Don't have an account?{" "}
          <Link href={"/register"} className="text-orange-500 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
