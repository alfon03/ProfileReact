// components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../css/sidebar.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? (
          <span className="material-symbols-outlined">close</span>
        ) : (
          <span className="material-symbols-outlined">menu</span>
        )}
      </button>
      <div className="logo">
        <img src="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png" alt="image" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Servicios</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
