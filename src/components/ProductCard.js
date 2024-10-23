import React, { useState } from 'react';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart, removeItem } = useCart();

  const handleCartClick = () => {
    if (isAdded) {
      removeItem(product.id);
    } else {
      addToCart(product);
    }
    setIsAdded(!isAdded); 
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden font-arima">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover p-4"
        />
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-sm mb-2 h-10 overflow-hidden">
          {product.title}
        </h2>
        <p className="text-xs text-gray-600 mb-2 capitalize">
          {product.category}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
          <button
            aria-label="Add to shopping cart"
            onClick={handleCartClick}
            className={`${
              isAdded ? 'bg-green-600' : 'bg-green-500'
            } hover:bg-green-700 text-white rounded-full p-1.5 transition duration-300 transform ${
              isAdded ? 'scale-110' : 'scale-100'
            }`}
          >
            {isAdded ? (
              <CheckCircle size={16} />
            ) : (
              <ShoppingCart size={16} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
