import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1920&auto=format&fit=crop" 
          alt="Forno a lenha pizzaria" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-brand-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-4 text-sm md:text-base animate-pulse">
          Tradição Italiana • Desde 1985
        </h2>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-xl">
          A VERDADEIRA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">
            PIZZA NAPOLITANA
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
          Massa de longa fermentação (48h), ingredientes importados da Itália e a magia do forno a lenha.
          Uma fatia da Itália no seu prato.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToMenu}
            className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
          >
            Ver Cardápio
          </button>
          <a 
            href="#location"
            className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Reservar Mesa
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="text-white/50 w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;