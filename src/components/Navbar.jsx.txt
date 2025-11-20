import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <span className="logo-text">Wildanibnthaha</span>
        </div>
        <button 
          className="btn-primary navbar-cta"
          onClick={() => scrollToSection('pricing')}
        >
          Gabung Kelas
        </button>
      </div>
    </nav>
  );
};

export default Navbar;