import React from 'react';
import '../css/footer.css';
import '../css/style.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Perfiles React.com.</p>
      <div className="footer-links">
      <div>    
        <a href="/about">Acerca de</a>
        <a href="/contact">Contacto</a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
