import React from 'react';
import { Plus, Minus, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  
  return (
    <div className="flex items-center justify-between py-2 border-b font-arima">
      <div className="flex items-center">
        <img src={item.image} alt={item.title} className="w-12 h-12 object-cover mr-4" />
        <div>
          <h3 className="text-sm font-semibold">{item.title}</h3>
          <p className="text-xs text-gray-500">${item.price.toFixed(2)} each</p>
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1">
          <Minus size={16} />
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1">
          <Plus size={16} />
        </button>
        <button onClick={() => removeItem(item.id)} className="ml-2 text-red-500">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

const CartPopup = ({ isOpen, onClose }) => {
  const { cartItems, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50 font-arima">
      <div className="bg-green-100 w-full max-w-md p-6 overflow-y-auto h-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Ton panier</h2>
          <button onClick={onClose} className="text-gray-500">
            <X size={24} />
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p>Ton panier est vide.</p>
        ) : (
          <>
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
            <div className="mt-4 text-right">
              <p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
                Payer
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPopup;