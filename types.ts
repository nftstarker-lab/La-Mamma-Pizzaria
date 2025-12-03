export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'tradicional' | 'especial' | 'drink' | 'dessert';
  imageUrl: string;
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}