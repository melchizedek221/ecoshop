import React from 'react';
import { ShoppingCart } from 'lucide-react';

// ProductCard Component
const ProductCard = ({ product, addToCart }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative">
        <img src={product.image} alt={product.title} className="w-full h-48 object-contain p-4" />
        {Math.random() > 0.5 && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
            {Math.floor(Math.random() * 30) + 10}% OFF
          </span>
        )}
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-sm mb-2 h-10 overflow-hidden">{product.title}</h2>
        <p className="text-xs text-gray-600 mb-2 capitalize">{product.category}</p>
        <div className="flex justify-between items-center">
          <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
          <button 
            onClick={() => addToCart(product)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-1.5 transition duration-300"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );

export default ProductCard;