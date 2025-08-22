"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-orange-500 font-semibold" : "text-gray-200"
          } hover:text-orange-500 transition-colors text-lg`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/products"
          className={`${
            pathname.startsWith("/products")
              ? "text-orange-500 font-semibold"
              : "text-gray-200"
          } hover:text-orange-500 transition-colors text-lg`}
        >
          Products
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-base-300 shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link href="/login">
            <button className="bg-orange-500 py-2 px-4 rounded-lg cursor-pointer hover:bg-orange-600 transition-all duration-200 font-semibold">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
