import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import BookingForm from "./components/BookingForm";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Nav from "./components/Nav";
import { fetchAPI, submitAPI } from "./api";

function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.payload);
    default:
      return state;
  }
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData, navigate) => {
    try {
      const success = submitAPI(formData);
      if (success) {
        navigate("/confirmed");
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("There was an error. Please try again.");
    }
  };

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <div>
              <h1>Reserve Your Table</h1>
              <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
            </div>
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;

