import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">GSI NEXT</Link>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search for Products..." className="search-bar" />
        <button className="search-button">🔍</button>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="nav-icon">👤<span>Login/Register</span></Link>
        <Link to="/wishlist" className="nav-icon">❤️<span>Wishlist</span></Link>
        <Link to="/cart" className="nav-icon">🛒<span>Cart</span></Link>
      </div>
    </nav>
  );
};

export default Navbar;