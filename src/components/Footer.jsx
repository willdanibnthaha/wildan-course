import React from 'react';
import { Heart } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="heading-3">Wildanibnthaha</h3>
            <p className="body-medium footer-tagline">
              Mengubah passion menjadi income dengan ilmu yang tepat.
            </p>
          </div>
          <div className="footer-bottom">
            <p className="body-small">
              © 2025 Wildanibnthaha. Made with <Heart size={14} fill="#3b82f6" color="#3b82f6" /> for aspiring traders.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;