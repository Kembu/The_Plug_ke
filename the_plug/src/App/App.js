import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import BodySection from '../BodySection/BodySection';
import Footer from '../Footer/Footer';
import { Routes } from '../pages/routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <BodySection />
      <Footer />
      <Routes />
    </div>
  );
}

export default App;
