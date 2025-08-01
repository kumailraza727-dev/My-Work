import React, { useState } from "react";
import "./style.css"; // Link to the CSS file below

const mobNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mobNavbar">
      {/* Logo */}
      <div className="nav-left">
        <img
          src="https://rogarcomm.com/wp-content/uploads/2025/04/rOGER-Communication.webp"
          alt="site-logo"
        />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Menu Items */}
      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="https://rogarcomm.com/">Home</a></li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default mobNavbar;
