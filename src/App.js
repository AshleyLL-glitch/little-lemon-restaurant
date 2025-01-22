import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import BookingForm from "./components/BookingForm";
import Nav from "./components/Nav";

function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return initializeTimes();
    default:
      return state;
  }
}

function App() {
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


