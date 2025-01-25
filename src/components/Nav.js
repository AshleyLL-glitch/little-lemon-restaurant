import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const location = useLocation();

  return (
    <nav className="navbar" aria-label="Main Navigation">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img
          src="/assets/Logo.png"
          alt="Little Lemon restaurant logo"
          className="logo-image"
        />
        <h1 className="logo-title">Little Lemon</h1>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/booking"
            className={`nav-link ${
              location.pathname === "/booking" ? "active" : ""
            }`}
            aria-current={location.pathname === "/booking" ? "page" : undefined}
          >
            Book a Table
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;



