"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
  const router = useRouter();

  const handleSocialLogin = async (providerName) => {
    const res = await signIn(providerName, {
      redirect: false,
      callbackUrl: "/products",
    });
    if (res?.ok) {
      router.push("/products");
    }
  };

  return (
    <div className="flex items-center gap-5">
      <button type="button" onClick={() => handleSocialLogin("google")}>
        <FcGoogle size={30} className="cursor-pointer" />
      </button>
    </div>
  );
}
