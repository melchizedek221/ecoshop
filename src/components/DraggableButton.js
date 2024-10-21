import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { ShoppingCart } from 'lucide-react';

const DraggableCartButton = ({ totalItems, setIsCartOpen, isCartOpen }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const savedPosition = localStorage.getItem('cartButtonPosition');
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartButtonPosition', JSON.stringify(position));
  }, [position]);

  const handleDrag = (e, ui) => {
    const { x, y } = ui;
    setPosition({ x, y });
  };

  return (
    <Draggable
      position={position}
      onDrag={handleDrag}
      bounds="parent"
    >
      <div className="fixed bottom-40 right-4" style={{ touchAction: 'none' }}>
        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg cursor-move"
          aria-label="Ouvrir le panier"
          aria-expanded={isCartOpen}
        >
          <ShoppingCart size={24} />
          <span 
            className="absolute -top-2 -right-2 bg-red-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center" 
            aria-label={`Nombre total d'articles dans le panier: ${totalItems}`}
          >
            {totalItems}
          </span>
        </button>
      </div>
    </Draggable>
  );
};

export default DraggableCartButton;