import React from 'react';
import './Footer.css';

interface FooterProps {
  businessName: string;
}

const Footer: React.FC<FooterProps> = ({ businessName }) => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} {businessName}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;