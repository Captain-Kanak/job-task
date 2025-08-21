"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
  const handleSocialLogin = () => {};

  return (
    <div className="flex items-center gap-5">
      <button type="button" onClick={() => handleSocialLogin("google")}>
        <FcGoogle size={30} className="cursor-pointer" />
      </button>
      <button type="button" onClick={() => handleSocialLogin("github")}>
        <FaGithub size={30} className="cursor-pointer" />
      </button>
    </div>
  );
}
