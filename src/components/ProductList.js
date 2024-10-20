import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingCart} from 'lucide-react';
import ProductCard from './ProductCard';
import CartPopup from './CartItem';


// Sidebar Component
const Sidebar = ({ categories, selectedCategory, setSelectedCategory }) => (
  <aside className="w-48 bg-white shadow-sm rounded-lg p-4 h-fit sticky top-8">
    <h2 className="font-bold text-lg mb-4">Categories</h2>
    {categories.map((category) => (
      <button
        key={category.name}
        onClick={() => setSelectedCategory(category.name)}
        className={`flex items-center w-full p-2 mb-2 rounded-md text-left text-sm ${
          selectedCategory === category.name ? 'bg-green-100 text-green-800' : 'hover:bg-gray-100'
        }`}
      >
        <span className="mr-2">{category.icon}</span>
        {category.label}
      </button>
    ))}
  </aside>
);


// Main ProductList Component
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    { name: 'all', icon: '🛒', label: 'All' },
    { name: 'electronics', icon: '🖥️', label: 'Electronics' },
    { name: 'jewelery', icon: '💍', label: 'Jewelry' },
    { name: "men's clothing", icon: '👔', label: "Men's" },
    { name: "women's clothing", icon: '👗', label: "Women's" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error loading products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (loading) return <p className="text-center text-xl mt-10">Loading products...</p>;
  if (error) return <p className="text-center text-xl mt-10 text-red-500">{error}</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <main className="flex-1">
            <h1 className="text-2xl font-bold mb-6">
              {categories.find(cat => cat.name === selectedCategory)?.label || 'All Products'}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          </main>
        </div>
      </div>

      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
      >
        <ShoppingCart size={24} />
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      </button>

      <CartPopup
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default ProductList;