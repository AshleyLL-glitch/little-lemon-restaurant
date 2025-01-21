import React from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css";

function BookingPage() {
  return (
    <div className="booking-page">
      <h1>Book Your Table</h1>
      <p>
        Reserve your table at Little Lemon and enjoy a memorable dining experience with your loved ones.
      </p>
      <BookingForm />
    </div>
  );
}

export default BookingPage;
