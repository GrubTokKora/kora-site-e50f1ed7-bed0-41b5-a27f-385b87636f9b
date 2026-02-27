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
        <h1>Savor the True Taste of Naples</h1>
        <p>Welcome to {businessName}! {description}</p>
        <a href="#menu" className="btn">View Our Menu</a>
      </div>
    </section>
  );
};

export default Hero;