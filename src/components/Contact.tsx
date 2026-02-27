import React from 'react';
import './Contact.css';

interface ContactProps {
  address: string;
}

const Contact: React.FC<ContactProps> = ({ address }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="card">
          <h3>Our Location</h3>
          <p>{address}</p>
          <h3>Opening Hours</h3>
          <p>Monday - Sunday: 11:00 AM - 11:00 PM</p>
          <h3>Reservations</h3>
          <p>Call us at: +91 12345 67890</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;