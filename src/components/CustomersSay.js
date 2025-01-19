import React from "react";
import "./CustomersSay.css";

export default function CustomersSay() {
  const testimonials = [
    {
      name: "Emily Jenkins",
      image: "/assets/Emily.jpg",
      rating: 5,
      review: "Review",
    },
    {
      name: "Simon Mitchell",
      image: "/assets/Simon.jpg",
      rating: 4,
      review: "Review",
    },
    {
      name: "Anya Lewis",
      image: "/assets/Anya.jpeg",
      rating: 5,
      review: "Review",
    },
  ];

  return (
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-image"
          />
          <h3 className="testimonial-name">{testimonial.name}</h3>
          <p className="testimonial-rating">Rating {Array(testimonial.rating).fill("⭐").join("")}</p>
          <p className="testimonial-review">{testimonial.review}</p>
        </div>
      ))}
    </div>
  );
}
