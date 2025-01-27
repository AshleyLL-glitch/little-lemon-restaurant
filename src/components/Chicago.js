import React from "react";
import "./Chicago.css";

export default function Chicago() {
  return (
    <section className="chicago-section" aria-labelledby="chicago-title">
      <div className="chicago-text">
        <h1 id="chicago-title" className="chicago-title">Little Lemon</h1>
        <h2 className="chicago-subtitle">Chicago</h2>
        <p className="chicago-description">
          Little Lemon is a family-owned Mediterranean restaurant founded by
          Mario and Antonio. With a passion for fresh ingredients and
          traditional recipes, they’ve created a dining experience that blends
          modern charm with timeless flavors.
        </p>
      </div>
      <div className="chicago-images">
        <figure>
          <img
            src="/assets/Mario and Adrian A.jpg"
            alt="Mario and Antonio working in the kitchen"
            className="chicago-image"
          />
          <figcaption>Mario and Antonio preparing dishes</figcaption>
        </figure>
        <figure>
          <img
            src="/assets/Mario and Adrian b.jpg"
            alt="Mario and Antonio smiling together"
            className="chicago-image"
          />
          <figcaption>Mario and Antonio smiling in their restaurant</figcaption>
        </figure>
      </div>
    </section>
  );
}
