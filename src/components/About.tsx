import React from 'react';
import './About.css';

interface AboutProps {
  businessName: string;
  summary: string;
}

const About: React.FC<AboutProps> = ({ businessName, summary }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="card">
          <h2>About {businessName}</h2>
          <p>{summary}</p>
          <p>We are passionate about crafting authentic Neapolitan-style pizzas using only the freshest, highest-quality ingredients. Our dough is made daily and fermented for 48 hours to create a light, airy crust with the perfect chew. Come and taste the tradition!</p>
        </div>
      </div>
    </section>
  );
};

export default About;