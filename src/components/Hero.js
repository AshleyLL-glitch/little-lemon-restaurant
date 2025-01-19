import React from "react";
import "./Hero.css"; // Import CSS for styling

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="hero-button">Book Now</button>
      </div>
      <div className="hero-image">
        <img
          src="/assets/restauranfood.jpg" // Absolute path relative to public folder
          alt="Delicious Mediterranean food"
        />
      </div>
    </section>
  );
}

export default Hero;

