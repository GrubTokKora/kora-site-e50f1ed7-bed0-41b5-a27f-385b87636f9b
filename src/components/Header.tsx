import React from 'react';
import './Header.css';

interface HeaderProps {
  businessName: string;
}

const Header: React.FC<HeaderProps> = ({ businessName }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">{businessName}</div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;