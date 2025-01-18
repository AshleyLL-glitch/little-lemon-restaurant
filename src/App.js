import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage"; // Store pages in a `pages` folder for clarity

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;

