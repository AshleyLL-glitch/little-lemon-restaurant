import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Logo Section */}
      <div className="footer-logo">
        <img src="/assets/Logo.png" alt="Little Lemon Logo" className="logo-image" />
        <h2 className="footer-title">LITTLE LEMON</h2>
      </div>

      {/* Navigation Links */}
      <div className="footer-links">
        <div className="footer-column">
          <h3 className="footer-heading">Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li>About</li>
            <li>Menu</li>
            <li><a href="/booking">Book a Table</a></li>
            <li>Order Online</li>
            <li>Log In</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact</h3>
          <ul>
            <li>Phone Number</li>
            <li>Address</li>
            <li>Email</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Social Media Links</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
