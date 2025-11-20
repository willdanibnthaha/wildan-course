import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Community from '../components/Community';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import PaymentModal from '../components/PaymentModal';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleBuyClick = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Community />
      <Pricing onBuyClick={handleBuyClick} />
      <Footer />
      {isModalOpen && (
        <PaymentModal
          plan={selectedPlan}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default LandingPage;