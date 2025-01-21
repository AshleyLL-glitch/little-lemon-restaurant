import React from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";
import Footer from "./Footer"; // Import the Footer component
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <Hero />

      {/* Specials Section */}
      <section className="specials-section">
        <h2 className="section-title">This Week's Specials!</h2>
        <Specials />
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">Testimonials</h2>
        <CustomersSay />
      </section>

      {/* Chicago Section */}
      <section className="chicago-section">
        <Chicago />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Homepage;

