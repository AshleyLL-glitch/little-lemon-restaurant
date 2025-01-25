import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!date) newErrors.date = "Please select a date.";
    if (new Date(date) < new Date()) newErrors.date = "Date cannot be in the past.";
    if (!time) newErrors.time = "Please select a time.";
    if (guests < 1 || guests > 10)
      newErrors.guests = "Guests must be between 1 and 10.";
    if (!occasion) newErrors.occasion = "Please select an occasion.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      const formData = { date, time, guests, occasion };
      submitForm(formData, navigate);
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
    if (errors.date) validateForm();
  };

  const handleFieldChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (errors[field]) validateForm();
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        min={new Date().toISOString().split("T")[0]}
        aria-describedby="date-error"
        className={errors.date ? "error-input" : ""}
        required
      />
      {errors.date && (
        <p id="date-error" className="error-message" aria-live="polite">
          {errors.date}
        </p>
      )}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={handleFieldChange(setTime, "time")}
        aria-describedby="time-error"
        className={errors.time ? "error-input" : ""}
        required
      >
        <option value="">Select time</option>
        {availableTimes.length > 0 ? (
          availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))
        ) : (
          <option disabled>No times available</option>
        )}
      </select>
      {errors.time && (
        <p id="time-error" className="error-message" aria-live="polite">
          {errors.time}
        </p>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={handleFieldChange((value) => setGuests(Number(value)), "guests")}
        aria-describedby="guests-error"
        className={errors.guests ? "error-input" : ""}
        required
      />
      {errors.guests && (
        <p id="guests-error" className="error-message" aria-live="polite">
          {errors.guests}
        </p>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleFieldChange(setOccasion, "occasion")}
        aria-describedby="occasion-error"
        className={errors.occasion ? "error-input" : ""}
        required
      >
        <option value="">Select occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {errors.occasion && (
        <p id="occasion-error" className="error-message" aria-live="polite">
          {errors.occasion}
        </p>
      )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Make Your Reservation"}
      </button>
    </form>
  );
}

export default BookingForm;

