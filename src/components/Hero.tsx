import React from 'react';
import './Hero.css';

interface HeroProps {
  businessName: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ businessName, description }) => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Welcome to {businessName}</h1>
        <p>{description}</p>
        <a href="#menu" className="btn">View Our Menu</a>
      </div>
    </section>
  );
};

export default Hero;