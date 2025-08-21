"use client";

import React from "react";
import auth_lottie from "../../../public/lotties/auth_lotties.json";
import Lottie from "lottie-react";

export default function AuthLayout({ children }) {
  return (
    <div className="max-w-7xl mx-auto flex items-center">
      <div className="flex-1">
        <Lottie animationData={auth_lottie} loop={true} />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
