import React from 'react';
import { MessageCircle, Users, ExternalLink } from 'lucide-react';
import '../styles/Community.css';

const Community = () => {
  const communityChannels = [
    {
      id: 1,
      title: 'WhatsApp Trading Channel',
      description: 'Dapatkan update trading signals, analisis pasar, dan tips trading harian secara gratis.',
      icon: <MessageCircle size={32} />,
      link: 'https://whatsapp.com/channel/0029Vb13VzA5a240v2NLge16',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&q=80'
    },
    {
      id: 2,
      title: 'Digital Income & AI Channel',
      description: 'Pelajari cara menghasilkan income digital dengan memanfaatkan AI dan teknologi terkini.',
      icon: <Users size={32} />,
      link: 'https://whatsapp.com/channel/0029VarCtD39Bb5wda2WQo2e',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80'
    }
  ];

  const handleChannelClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="community" className="community-section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-2">Bergabung di Komunitas Gratis</h2>
          <p className="body-large section-subtitle">
            Akses konten edukatif gratis dan bergabung dengan ribuan member yang sudah berkembang bersama.
          </p>
        </div>
        <div className="community-grid">
          {communityChannels.map((channel) => (
            <div
              key={channel.id}
              className="card community-card"
              onClick={() => handleChannelClick(channel.link)}
            >
              <div className="community-card-image">
                <img src={channel.image} alt={channel.title} />
                <div className="community-card-overlay">
                  {channel.icon}
                </div>
              </div>
              <div className="community-card-content">
                <h3 className="heading-3">{channel.title}</h3>
                <p className="body-medium">{channel.description}</p>
                <div className="community-card-link">
                  <span>Gabung Sekarang</span>
                  <ExternalLink size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;