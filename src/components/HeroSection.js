import React from "react";
import "../styles/home.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="text-box">
          <h1 className="main-heading mh-1">we are</h1>
          <h1 className="main-heading mh-2">valorant!</h1>
          <h1 className="main-heading mh-3">we are</h1>
          <h1 className="main-heading mh-4">fighters!</h1>
        </div>
        <div className="image-box">
          <img src="../images/hero-image.png" alt="hero" className="hero-img" />
        </div>
      </div>
      <button className="btn-hero">Become an agent &darr;</button>
    </section>
  );
}
