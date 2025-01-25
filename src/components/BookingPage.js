import React from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css";

function BookingPage() {
  return (
    <main className="booking-page" aria-labelledby="booking-page-heading">
      <h1 id="booking-page-heading">Book Your Table at Little Lemon</h1>
      <p>
        Reserve your table at Little Lemon and enjoy a memorable dining experience with your loved ones. Our Mediterranean dishes are crafted with the finest ingredients and served in a warm, welcoming atmosphere.
      </p>
      <BookingForm />
    </main>
  );
}

export default BookingPage;

