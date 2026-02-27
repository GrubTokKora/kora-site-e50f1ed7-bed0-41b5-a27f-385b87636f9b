import React from 'react';
import './Menu.css';

const menuItems = [
  { name: 'Margherita', description: 'Classic tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.', price: '₹350' },
  { name: 'Pepperoni', description: 'Spicy pepperoni, tomato sauce, and mozzarella cheese.', price: '₹450' },
  { name: 'Quattro Formaggi', description: 'A blend of four cheeses: mozzarella, gorgonzola, parmesan, and ricotta.', price: '₹500' },
  { name: 'Veggie Supreme', description: 'Bell peppers, onions, olives, mushrooms, and mozzarella.', price: '₹420' },
  { name: 'Spicy Diavola', description: 'Spicy salami, chili flakes, tomato sauce, and mozzarella.', price: '₹480' },
  { name: 'Garlic Bread', description: 'Toasted bread with garlic butter and herbs.', price: '₹150' },
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Our Menu</h2>
        <div className="menu-grid">
          {menuItems.map(item => (
            <div className="card menu-item" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;