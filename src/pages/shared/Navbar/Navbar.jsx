import React from "react";
import { NavLink } from "react-router";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold border-b-2 border-primary"
      : "hover:text-primary transition";

  const navItems = (
    <>
      <li>
        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/programs" className={navLinkStyle}>
          Programs
        </NavLink>
      </li>

      <li>
        <NavLink to="/about" className={navLinkStyle}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navLinkStyle}>
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div
      className="navbar top-0 left-0 w-full z-50 
    bg-base-100/70 backdrop-blur-md shadow-sm">
      {/* Left side: Logo */}
      <div className="navbar-start">
        <Logo/>
      </div>

      {/* Right side (lg+): menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-6 text-sm font-semibold">
          {navItems}
        </ul>
      </div>

      {/* Small screen dropdown */}
      <div className="navbar-end  lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-base-100/70 backdrop-blur-md rounded-2xl 
            w-52 text-sm font-semibold border border-base-200">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
