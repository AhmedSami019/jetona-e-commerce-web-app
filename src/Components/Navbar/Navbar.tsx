import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li className="text-lg font-medium mx-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg font-medium mx-2">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="text-lg font-medium mx-2">
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li className="text-lg font-medium mx-2">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
   <div className="bg-base-300">
     <div className="navbar w-11/12 mx-auto">
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
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        {/* lest section of navbar */}
        <NavLink to="/" className="text-4xl text-primary-main  font-story-script font-black">
          jeTona
        </NavLink>
      </div>

      {/* middle section of navbar */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* right section of navbar */}
      <div className="navbar-end gap-5 md:gap-8">
        <label className="flex items-center gap-2 border min-w-5 px-4 py-2 rounded-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="focus-within:outline-none" required placeholder="Search" />
        </label>
        <div className="avatar">
          <div className="ring-primary-main ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Navbar;
