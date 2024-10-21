import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingCart } from 'lucide-react';
import ProductCard from './ProductCard';
import CartPopup from './CartItem';
import Navbar from './Navbar';
import SEO from './Seo';
import DraggableCartButton from './DraggableButton';

// Sidebar Component
const Sidebar = ({ categories, selectedCategory, setSelectedCategory }) => (
  <aside className="w-full md:w-48 bg-white shadow-sm rounded-lg p-4 h-fit sticky mt-20 font-arima" aria-labelledby="sidebar-title">
    <h2 id="sidebar-title" className="font-bold text-lg mb-4">Categories</h2>
    {categories.map((category) => (
      <button
        key={category.name}
        onClick={() => setSelectedCategory(category.name)}
        className={`flex items-center w-full p-2 mb-2 rounded-md text-left text-sm ${
          selectedCategory === category.name ? 'bg-green-100 text-green-800' : 'hover:bg-gray-100'
        }`}
        aria-pressed={selectedCategory === category.name}
        aria-label={`Filtrer par catégorie: ${category.label}`}
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
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

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
        localStorage.setItem('products', JSON.stringify(response.data));
        setLoading(false);
      } catch (err) {
        setError('Error loading products');
        setLoading(false);
      }
    };

    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
      setFilteredProducts(JSON.parse(storedProducts));
      setLoading(false);
    } else {
      fetchProducts();
    }
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
    setCurrentPage(1); // Reset to the first page when category changes
  }, [selectedCategory, products]);

  const storedCartItems = localStorage.getItem('cartItems');
  useEffect(() => {
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  if (loading) return <p className="text-center text-xl mt-10">Loading products...</p>;
  if (error) return <p className="text-center text-xl mt-10 text-red-500">{error}</p>;

  return (
    <div className="bg-green-100 min-h-screen p-4 md:p-8 relativ font-arima" role="main" aria-label="Product List Page">
      <SEO
        title="Produits - ÉcoShop"
        description="Parcourez notre sélection de produits durables et éco-responsables"
        keywords="produits, durables, écologiques, éco-responsable, shopping"
        siteURL="https://www.ecoshop.com/products"
        twitterHandle="@ecoshop"
        imagePreview="https://www.ecoshop.com/images/products-preview.jpg"
      />
      <Navbar />
      <div className="max-w-7xl mx-auto mt-20">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
  
          <main className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" aria-labelledby="product-grid-title">
              <h2 id="product-grid-title" className="sr-only">Product List</h2>
              {currentProducts.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="bg-green-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
              >
                Previous
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="bg-green-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </main>
        </div>
      </div>
  
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-40 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
        aria-label="Ouvrir le panier"
        aria-expanded={isCartOpen}
      >
        <ShoppingCart size={24} />
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center" aria-label={`Nombre total d'articles dans le panier: ${totalItems}`}>
          {totalItems}
        </span>
      </button>
      {/* <DraggableCartButton /> */}
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
