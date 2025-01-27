import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-title">
      {/* Logo Section */}
      <div className="footer-logo">
        <img
          src="/assets/Logo.png"
          alt="Little Lemon Logo"
          className="logo-image"
        />
        <h2 id="footer-title" className="footer-title">
          LITTLE LEMON
        </h2>
      </div>

      {/* Navigation Links */}
      <div className="footer-links">
        <div className="footer-column">
          <h3 className="footer-heading">Navigation</h3>
          <ul>
            <li>
              <a href="/" aria-label="Navigate to Home Page">
                Home
              </a>
            </li>
            <li>
              <a href="/about" aria-label="Navigate to About Page">
                About
              </a>
            </li>
            <li>
              <a href="/menu" aria-label="Navigate to Menu Page">
                Menu
              </a>
            </li>
            <li>
              <a href="/booking" aria-label="Navigate to Book a Table Page">
                Book a Table
              </a>
            </li>
            <li>
              <a href="/order" aria-label="Navigate to Order Online Page">
                Order Online
              </a>
            </li>
            <li>
              <a href="/login" aria-label="Navigate to Log In Page">
                Log In
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact</h3>
          <ul>
            <li aria-label="Phone Number">Phone Number: 123-456-7890</li>
            <li aria-label="Restaurant Address">
              Address: 123 Main Street, Chicago
            </li>
            <li>
              <a href="mailto:info@littlelemon.com" aria-label="Send email">
                Email: info@littlelemon.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Social Media Links</h3>
          <ul>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}


