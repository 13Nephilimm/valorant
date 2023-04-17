import React from "react";
import "../styles/calculator.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RatingCalc from "../components/RatingCalc";

export default function Calculator() {
  return (
    <div>
      <Navbar />
      <RatingCalc />
      <Footer />
    </div>
  );
}
