import React from "react";
import "./CustomersSay.css";

export default function CustomersSay() {
  const testimonials = [
    {
      name: "Emily Jenkins",
      image: "/assets/Emily.jpg",
      rating: 5,
      review: "The food here is absolutely amazing! Highly recommend.",
    },
    {
      name: "Simon Mitchell",
      image: "/assets/Simon.jpg",
      rating: 4,
      review: "Great atmosphere and delicious meals. Will visit again!",
    },
    {
      name: "Anya Lewis",
      image: "/assets/Anya.jpeg",
      rating: 5,
      review: "The best dining experience I've had in a long time.",
    },
  ];

  return (
    <section
      className="testimonials-container"
      aria-labelledby="testimonials-title"
    >
      <h2 id="testimonials-title" className="testimonials-title">
        What Our Customers Say
      </h2>
      <div className="testimonials-cards">
        {testimonials.map((testimonial, index) => (
          <article
            key={index}
            className="testimonial-card"
            aria-label={`Testimonial from ${testimonial.name}`}
          >
            <img
              src={testimonial.image}
              alt={`Photo of ${testimonial.name}`}
              className="testimonial-image"
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p
              className="testimonial-rating"
              aria-label={`Rated ${testimonial.rating} out of 5 stars`}
            >
              {Array(testimonial.rating)
                .fill("⭐")
                .join("")}
            </p>
            <p className="testimonial-review">{testimonial.review}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

