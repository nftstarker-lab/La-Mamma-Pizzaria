import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import { Flame, Star, ShoppingBag, Check, Leaf } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Menu: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'tradicional' | 'especial' | 'drink'>('all');

  const filteredItems = filter === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => {
        if (filter === 'tradicional') return item.category === 'tradicional';
        if (filter === 'especial') return item.category === 'especial';
        if (filter === 'drink') return item.category === 'drink' || item.category === 'dessert';
        return true;
      });

  return (
    <section id="menu" className="py-20 bg-brand-gray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-brand-orange font-bold tracking-wider uppercase mb-2">Nosso Cardápio</h3>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">FATIAS DO PARAÍSO</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'Todas' },
            { id: 'tradicional', label: 'Tradicionais' },
            { id: 'especial', label: 'Especiais & Gourmet' },
            { id: 'drink', label: 'Vinhos & Doces' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                filter === cat.id 
                  ? 'bg-brand-orange border-brand-orange text-white shadow-lg shadow-red-500/20' 
                  : 'bg-transparent border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addToCart(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group bg-brand-dark rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-orange/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/50 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden shrink-0">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
        
        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {item.popular && (
            <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <Star className="w-3 h-3 fill-current" /> Favorita
            </span>
          )}
          {item.spicy && (
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <Flame className="w-3 h-3 fill-current" /> Picante
            </span>
          )}
          {item.vegetarian && (
            <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <Leaf className="w-3 h-3 fill-current" /> Veggie
            </span>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
           <span className="text-2xl font-display text-white drop-shadow-md">R$ {item.price.toFixed(2)}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">{item.name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{item.description}</p>
        
        <button 
          onClick={handleAdd}
          className={`w-full py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
            isAdded 
              ? 'bg-green-600 text-white border border-green-600'
              : 'border border-gray-700 text-gray-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-5 h-5" /> Adicionado!
            </>
          ) : (
            <>
              <ShoppingBag className="w-5 h-5" /> Adicionar à Comanda
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Menu;