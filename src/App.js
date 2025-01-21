import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import BookingForm from "./components/BookingForm";
import Nav from "./components/Nav";

// Function to initialize available times
function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"]; // Initial times
}

// Reducer function for updating times
function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return initializeTimes(); // For now, return the same times
    default:
      return state;
  }
}

function App() {
  // Manage available times using useReducer
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

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
              <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


