import { MenuItem, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Margherita Napolitana',
    description: 'Molho de tomate San Marzano, mozzarella de búfala fresca, manjericão orgânico e azeite extravirgem.',
    price: 68.00,
    category: 'tradicional',
    imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop',
    popular: true,
    vegetarian: true
  },
  {
    id: '2',
    name: 'Pepperoni Diavola',
    description: 'Nossa massa de longa fermentação, molho rústico, mozzarella e fatias generosas de pepperoni levemente picante.',
    price: 74.00,
    category: 'tradicional',
    imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop',
    popular: true,
    spicy: true
  },
  {
    id: '3',
    name: 'Quatro Queijos Supremo',
    description: 'Base de gorgonzola dolce, mozzarella, parmesão capa preta e catupiry original, finalizado com orégano fresco.',
    price: 78.00,
    category: 'tradicional',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    vegetarian: true
  },
  {
    id: '4',
    name: 'Trufada com Cogumelos',
    description: 'Mix de cogumelos salteados na manteiga, azeite trufado, mozzarella fiordilatte e tomilho fresco.',
    price: 89.00,
    category: 'especial',
    imageUrl: 'https://images.unsplash.com/photo-1514477917009-389c76a86b68?q=80&w=800&auto=format&fit=crop' // Imagem corrigida
  },
  {
    id: '5',
    name: 'Parma & Rúcula',
    description: 'Presunto de Parma maturado 12 meses, rúcula selvagem, tomate seco e lascas de grana padano.',
    price: 92.00,
    category: 'especial',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Calabresa Artesanal',
    description: 'Calabresa curada artesanalmente, cebola roxa caramelizada e azeitonas pretas azapa.',
    price: 72.00,
    category: 'tradicional',
    imageUrl: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '7',
    name: 'Pizza de Nutella & Morango',
    description: 'Massa fina crocante coberta com muita Nutella, morangos frescos e raspas de chocolate branco.',
    price: 55.00,
    category: 'dessert',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '8',
    name: 'Vinho Chianti Clássico',
    description: 'Garrafa 750ml. Vinho tinto italiano seco, perfeito para harmonizar com massas e carnes.',
    price: 120.00,
    category: 'drink',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '9',
    name: 'Soda Italiana',
    description: 'Água com gás e xarope artesanal (Maçã Verde, Frutas Vermelhas ou Limão Siciliano).',
    price: 18.00,
    category: 'drink',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop'
  }
];

export const REVIEWS: Review[] = [
  { id: 1, author: 'Giulia Bianchi', rating: 5, text: "A massa é incrivelmente leve, igualzinha a que comi em Nápoles!" },
  { id: 2, author: 'Roberto Santos', rating: 5, text: "Melhor pizza da cidade. O ambiente é super acolhedor e o vinho excelente." },
  { id: 3, author: 'Ana Costa', rating: 4, text: "A pizza trufada é uma experiência à parte. Recomendo muito!" }
];