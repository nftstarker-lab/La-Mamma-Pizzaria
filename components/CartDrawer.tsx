import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    items, 
    updateQuantity, 
    removeFromCart, 
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    const phoneNumber = "59177850023"; // Número atualizado
    
    let message = "🍕 *Novo Pedido - La Mamma Pizzeria*\n\n";
    items.forEach(item => {
      message += `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\n💰 *Total: R$ ${cartTotal.toFixed(2)}*`;
    message += `\n\n📍 *Endereço de entrega:* (Por favor, digite seu endereço)`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-brand-gray h-full shadow-2xl flex flex-col transform transition-transform animate-in slide-in-from-right duration-300 border-l border-gray-800">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-brand-dark">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-brand-orange" />
            <h2 className="text-xl font-display text-white tracking-wide">SEU PEDIDO</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
              <ShoppingBag className="w-16 h-16 opacity-20" />
              <p className="text-lg">Sua comanda está vazia.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-brand-orange hover:underline font-bold"
              >
                Voltar ao Cardápio
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-brand-dark p-3 rounded-xl border border-gray-800/50">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-white text-sm">{item.name}</h3>
                    <p className="text-brand-orange font-bold text-sm">R$ {item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3 bg-brand-gray rounded-full px-2 py-1 border border-gray-700">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 text-gray-400 hover:text-white transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-bold text-white w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 text-gray-400 hover:text-white transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="p-6 bg-brand-dark border-t border-gray-800 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Taxa de Entrega</span>
                <span className="text-green-500 font-medium">Grátis</span>
              </div>
              <div className="flex justify-between text-white text-xl font-bold pt-4 border-t border-gray-800">
                <span>Total</span>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-[1.02] shadow-lg shadow-red-500/20 flex items-center justify-center gap-2"
            >
              <span>Enviar Pedido (WhatsApp)</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-center text-xs text-gray-500">
              O pedido será encaminhado para o nosso WhatsApp.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;