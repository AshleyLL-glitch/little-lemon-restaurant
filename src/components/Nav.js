import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src="/assets/Logo.png" alt="Little Lemon Logo" />
        <h1 className="logo-title">Little Lemon</h1>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/booking" className="nav-link">Book a Table</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;


