import React from 'react';
import '../styles/navbar.css';
import logo from '../assets/logo.png'; // path to logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#developer">Developer</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
