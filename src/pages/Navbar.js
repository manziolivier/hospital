// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/Multiform">Login</Link>
      <Link to="/aboutus">About Us</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contactus">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
