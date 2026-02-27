import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

const businessDetails = {
  name: "Neopolitan Pizza",
  address: "First Floor, Gravity Complex, Shop#201, College Rd, opp. Ambamata Mandir, Nadiad, Gujarat 387370, India",
  cuisine: [
    "Pizza",
    "Italian"
  ],
  description: "Relaxed restaurant featuring pizza, fries & noodle dishes, plus desserts & a buffet.",
  summary: "Serves a variety of Neapolitan-style pizzas with classic and modern toppings."
};

function App() {
  return (
    <>
      <Header businessName={businessDetails.name} />
      <main>
        <Hero 
          businessName={businessDetails.name} 
          description={businessDetails.description} 
        />
        <About 
          businessName={businessDetails.name} 
          summary={businessDetails.summary}
        />
        <Menu />
        <Contact address={businessDetails.address} />
      </main>
      <Footer businessName={businessDetails.name} />
    </>
  );
}

export default App;
