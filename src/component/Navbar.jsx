import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../component/css/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // CLOSE MENU ON PAGE CHANGE
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Nexu Logo" />
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/program">Programs</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/schools">Schools</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/stores">Store</NavLink>

        <button className="contact-btn mobile-btn">
          Contact
        </button>
      </nav>

      <div className="nav-actions">
        <input type="text" placeholder="Search 🔍" />

        <NavLink to="/contactus">
          <button className="contact-btn desktop-btn">
            Contact
          </button>
        </NavLink>

        <div
          className={menuOpen ? "menu-toggle open" : "menu-toggle"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}