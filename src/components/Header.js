import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header" aria-label="Main Header">
      <div className="header-content">
        <h1 className="header-title">Welcome to Little Lemon</h1>
        <p className="header-subtitle">
          A family-owned Mediterranean restaurant bringing traditional recipes to Chicago with a modern twist.
        </p>
        <button className="header-button" aria-label="Explore our menu">
          Explore Menu
        </button>
      </div>
      <div className="header-image-container">
        <img
          src="/assets/lemon.png"
          alt="Delicious Mediterranean dishes on a table"
          className="header-image"
        />
      </div>
    </header>
  );
}

export default Header;
