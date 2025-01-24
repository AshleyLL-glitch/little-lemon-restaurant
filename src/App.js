import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import BookingForm from "./components/BookingForm";
import Nav from "./components/Nav";
import { fetchAPI } from "./api";


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
              {/* Pass availableTimes and dispatch to BookingForm */}
              <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;



