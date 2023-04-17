import React from "react";
import "../styles/home.css";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="footer section" id="contact">
      <div className="footer-container">
        <div className="footer-container-logo">
          <h1 className="footer-heading">Contact Me</h1>
          <div className="footer-logo-box">
            <img
              src="../images/logo.jpg"
              alt="Logo image"
              className="my-logo"
            />
          </div>
        </div>
        <div className="footer-container-info">
          <div className="contact-info">
            <p className="phone">Phone Number: +995 599 10 00 69</p>
            <p className="mail">E-Mail: jekokharabadze@gmail.com</p>
          </div>
          <div className="footer-box">
            <p className="copyright">
              Copyright &copy; <span className="year">{date}</span> by Nephilim,
              Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
