import React from "react";
import ThemeToggoler from "../ThemeToggoler/ThemeToggoler";
import { NavLink } from "react-router";
const Navbar = () => {
  const menu = (
    <>
      <NavLink to="/" className="mr-4">
        Home
      </NavLink>
      <NavLink to="products" className="mr-4">
        Product
      </NavLink>
      <NavLink to="cart" className="mr-4">
        Cart
      </NavLink>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar  mx-auto max-w-6xl">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menu}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn">Button</a>
          <ThemeToggoler />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
