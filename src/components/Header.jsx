import React from "react";
import { NavLink } from "react-dom";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 p-0">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Menu Icon (Hamburger) */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          {/* Header */}
          <a className="btn btn-ghost normal-case text-xl flex lg:hidden">
            PEM
          </a>
          <a className="btn btn-ghost normal-case text-xl hidden lg:flex">
            Philip Englund Mathieu
          </a>
        </div>
        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="border-2 border-transparent hover:border-black">
              <a>Photo/Video</a>
            </li>
            <li
              tabIndex={0}
              className="border-2 border-transparent hover:border-black"
            >
              <details>
                <summary>Programming Projects</summary>
                <ul className="p-2">
                  <li>
                    <a>Outdoor Access</a>
                  </li>
                  <li>
                    <a>Maine Bills</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="border-2 border-transparent hover:border-black">
              <a href="https://blog.philipmathieu.com">Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Header;
