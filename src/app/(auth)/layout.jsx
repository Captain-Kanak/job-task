"use client";

import React from "react";
import auth_lottie from "../../../public/lotties/auth_lotties.json";
import Lottie from "lottie-react";

export default function AuthLayout({ children }) {
  return (
    <div className="py-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-70">
      <div className="flex-1">
        <Lottie animationData={auth_lottie} loop={true} />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-1 px-4 lg:px-0">{children}</div>
      </div>
    </div>
  );
}
