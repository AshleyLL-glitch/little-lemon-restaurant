import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function TestRoutes() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </Router>
  );
}

export default TestRoutes;