import React from "react";
import "./Specials.css";

export default function Specials() {
  const specials = [
    {
      title: "Greek Salad",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: "$12.99",
      image: "/assets/greek-salad.jpg",
    },
    {
      title: "Bruschetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: "$5.99",
      image: "/assets/bruchetta.jpg",
    },
    {
      title: "Lemon Dessert",
      description:
        "This comes straight from Grandma's recipe book; every last ingredient has been sourced and is as authentic as can be imagined.",
      price: "$5.00",
      image: "/assets/lemon-dessert.jpg",
    },
  ];

  return (
    <div className="specials-container">
      {specials.map((special, index) => (
        <div key={index} className="special-card">
          <img
            src={special.image}
            alt={special.title}
            className="special-image"
          />
          <div className="special-details">
            <h3 className="special-title">{special.title}</h3>
            <p className="special-description">{special.description}</p>
            <div className="special-footer">
              <span className="special-price">{special.price}</span>
              <button className="special-order-button">Order A Delivery</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
