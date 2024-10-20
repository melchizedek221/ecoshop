import React, { useState } from 'react';
import { ShoppingCart, Leaf, User, Menu, X } from 'lucide-react';

const EcoNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-green-50 p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto">
        {/* Barre de navigation pour écrans larges */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf size={50} className="text-green-600" />
            <a href="/" className="text-3xl font-bold text-green-800 hover:text-green-600 transition-colors duration-300">
              EcoShop
            </a>
          </div>
          
          <ul className="flex space-x-4">
            <li><a href="#" className="text-green-700 hover:text-green-500 transition-colors duration-300">À propos</a></li>
            <li><a href="#" className="text-green-700 hover:text-green-500 transition-colors duration-300">Contact</a></li>
          </ul>
          
          <div className="flex items-center space-x-4">
            <button className="text-green-700 hover:text-green-500 transition-colors duration-300">
              <User size={24} />
            </button>
          </div>
        </div>

        {/* Barre de navigation pour mobiles */}
        <div className="md:hidden flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf size={24} className="text-green-600" />
            <a href="/" className="text-2xl font-bold text-green-800">
              EcoShop
            </a>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="space-y-2">
              <li>
                <a href="#" className="block py-2 text-green-700 hover:bg-green-100 rounded transition-colors duration-300">À propos</a>
              </li>
              <li>
                <a href="#" className="block py-2 text-green-700 hover:bg-green-100 rounded transition-colors duration-300">Contact</a>
              </li>
            </ul>
            <div className="mt-4 flex justify-between">
              <button className="text-green-700 hover:text-green-500 transition-colors duration-300">
                <User size={24} />
              </button>
              <button className="text-green-700 hover:text-green-500 transition-colors duration-300">
                <ShoppingCart size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EcoNavbar;