import React from 'react';
import { TrendingUp, Sparkles } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-gradient-bg"></div>
      <div className="hero-content">
        <div className="hero-text fade-in-up">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Premium Digital Course</span>
          </div>
          <h1 className="heading-1">
            Master Trading & Digital Income with Wildanibnthaha
          </h1>
          <p className="body-large hero-subtitle">
            Panduan langkah demi langkah menghasilkan income dari internet. Mulai dari nol hingga mahir.
          </p>
          <div className="hero-cta-group">
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('pricing')}
            >
              <TrendingUp size={20} />
              Mulai Sekarang
            </button>
            <button 
              className="btn-secondary"
              onClick={() => scrollToSection('community')}
            >
              Lihat Komunitas Gratis
            </button>
          </div>
        </div>
        <div className="hero-image fade-in-up">
          <img 
            src="https://images.unsplash.com/photo-1629963918958-1b62cfe3fe92?w=800&q=80" 
            alt="Trading Dashboard"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;