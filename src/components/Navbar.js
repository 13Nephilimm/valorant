import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/agents" className="link">
        Agents
      </Link>
      <Link to="/calculator" className="link">
        Calculator
      </Link>
    </nav>
  );
}
