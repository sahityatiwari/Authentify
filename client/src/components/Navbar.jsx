// Navbar.jsx
import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Authentify</div>
   
      <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
