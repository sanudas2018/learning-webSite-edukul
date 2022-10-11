import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-sky-800 text-white">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case md:text-3xl text-2xl"
          >
            EduKul
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 nav-bar">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "active" : undefined;
              }}
              to="/"
            >
              Home
            </NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
