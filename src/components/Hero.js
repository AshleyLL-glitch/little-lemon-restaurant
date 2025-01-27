import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-text">
        <h1 id="hero-title">Little Lemon</h1>
        <h2 aria-label="Located in Chicago">Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button
          className="hero-button"
          aria-label="Book a table now at Little Lemon"
        >
          Book Now
        </button>
      </div>
      <div className="hero-image">
        <img
          src="/assets/restauranfood.jpg"
          alt="Delicious Mediterranean food served at Little Lemon"
        />
      </div>
    </section>
  );
}

export default Hero;


