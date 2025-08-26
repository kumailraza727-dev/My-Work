import React, { useState } from "react";
import "./style.css"; // Link to the CSS file below
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

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
        <ul className='flex gap-[30px]'>
            <li><Link to="/">Home</Link></li>
           <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><HashLink smooth to="/#testimonials">Testimonials</HashLink></li>
            {/* <li><a href="">Refund Policy</a></li>
            <li><a>Terms and Conditions</a></li> */}
          </ul>
      </div>
    </div>
  );
};

export default mobNavbar;
