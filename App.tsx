import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Location from './components/Location';
import Footer from './components/Footer';
import AiSommelier from './components/AiSommelier';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-brand-dark selection:bg-brand-orange selection:text-white">
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Location />
        <Footer />
        <AiSommelier />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;