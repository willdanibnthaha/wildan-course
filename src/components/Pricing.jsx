import React from 'react';
import { Check, Star } from 'lucide-react';
import '../styles/Pricing.css';

const Pricing = ({ onBuyClick }) => {
  const plans = [
    {
      id: 'monthly',
      name: 'Monthly Plan',
      price: '50.000',
      period: 'per bulan',
      description: 'Akses penuh ke semua materi dengan pembayaran bulanan.',
      features: [
        'Akses ke semua video course',
        'Update materi terbaru',
        'Support via WhatsApp',
        'Akses grup private',
        'Live trading session'
      ],
      highlighted: false
    },
    {
      id: 'lifetime',
      name: 'Lifetime Plan',
      price: '500.000',
      period: 'sekali bayar',
      description: 'Investasi terbaik untuk akses selamanya tanpa biaya bulanan.',
      features: [
        'Akses SELAMANYA ke semua course',
        'Update materi selamanya',
        'Priority support',
        'Akses grup VIP',
        'Live trading session',
        'Bonus template & tools',
        'Konsultasi 1-on-1 (2x)'
      ],
      highlighted: true,
      badge: 'Hemat Banyak'
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-2">Pilih Paket yang Sesuai</h2>
          <p className="body-large section-subtitle">
            Investasi kecil untuk skill yang menghasilkan income jangka panjang.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`card pricing-card ${plan.highlighted ? 'pricing-card-highlighted' : ''}`}
            >
              {plan.highlighted && (
                <div className="pricing-badge">
                  <Star size={16} fill="currentColor" />
                  <span>{plan.badge}</span>
                </div>
              )}
              <div className="pricing-card-header">
                <h3 className="heading-3">{plan.name}</h3>
                <div className="pricing-price">
                  <span className="price-currency">IDR</span>
                  <span className="price-amount">{plan.price}</span>
                </div>
                <p className="pricing-period">{plan.period}</p>
                <p className="body-medium pricing-description">{plan.description}</p>
              </div>
              <div className="pricing-features">
                {plan.features.map((feature, index) => (
                  <div key={index} className="pricing-feature">
                    <Check size={20} className="feature-check" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button
                className={plan.highlighted ? 'btn-primary' : 'btn-secondary'}
                onClick={() => onBuyClick(plan)}
              >
                Beli Sekarang
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;