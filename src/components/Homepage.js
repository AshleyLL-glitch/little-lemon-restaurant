import React from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";
import Footer from "./Footer";
import "./Homepage.css";

function Homepage() {
  return (
    <main className="homepage">
      {/* Hero Section */}
      <Hero />

      {/* Specials Section */}
      <section className="specials-section" aria-label="Specials" role="region">
        <Specials />
      </section>

      {/* Testimonials Section */}
      <section
        className="testimonials-section"
        aria-labelledby="testimonials-title"
        role="region"
      >
        <h2 id="testimonials-title" className="section-title">
          Testimonials
        </h2>
        <CustomersSay />
      </section>

      {/* Chicago Section */}
      <section
        className="chicago-section"
        aria-labelledby="chicago-title"
        role="region"
      >
        <h2 id="chicago-title" className="visually-hidden">
          About Little Lemon in Chicago
        </h2>
        <Chicago />
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}

export default Homepage;



