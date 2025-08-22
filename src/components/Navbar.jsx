"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-orange-500" : "text-gray-700"
          } hover:text-orange-500 transition-colors font-semibold text-lg`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/products"
          className={`${
            pathname === "/products" ? "text-orange-500" : "text-gray-700"
          } hover:text-orange-500 transition-colors font-semibold text-lg`}
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          href="/products/add"
          className={`${
            pathname === "/products/add" ? "text-orange-500" : "text-gray-700"
          } hover:text-orange-500 transition-colors font-semibold text-lg`}
        >
          Add Product
        </Link>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50/90 backdrop-blur shadow-md z-50">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-0">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center">
          {/* Mobile dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden mr-2">
              <HiMenu className="h-6 w-6 text-gray-700" />
            </label>
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

        {/* Navbar Center - Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
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
