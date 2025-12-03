import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="p-3 bg-gray-900 rounded-full text-white hover:bg-brand-orange transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 bg-gray-900 rounded-full text-white hover:bg-brand-orange transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 bg-gray-900 rounded-full text-white hover:bg-brand-orange transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © 2024 La Mamma Pizzeria. Todos os direitos reservados.
        </p>
        <p className="text-gray-700 text-xs mt-2">
          Imagens meramente ilustrativas.
        </p>
      </div>
    </footer>
  );
};

export default Footer;