import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingCart, Loader } from 'lucide-react';
import ProductCard from './ProductCard';
import CartPopup from './CartItem';
import Navbar from './Navbar';
import SEO from './Seo';
import { useCart } from '../context/CartContext';

const Sidebar = ({ categories, selectedCategory, setSelectedCategory, isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <aside className={`
    fixed md:relative 
    ${isMobileMenuOpen ? 'bottom-0' : '-bottom-full'} 
    left-0 right-0 
    md:bottom-auto
    bg-white shadow-sm rounded-lg p-4 
    transition-all duration-300
    z-30
    md:w-48 md:sticky md:top-24 
    font-arima
  `}>
    <div className="flex justify-between items-center mb-4">
      <h2 id="sidebar-title" className="font-bold text-lg">Categories</h2>
      <button 
        className="md:hidden text-gray-500"
        onClick={() => setIsMobileMenuOpen(false)}
        aria-label="Fermer le menu des catégories"
      >
        ✕
      </button>
    </div>
    {categories.map((category) => (
      <button
        key={category.name}
        onClick={() => {
          setSelectedCategory(category.name);
          setIsMobileMenuOpen(false);
        }}
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

const ProductList = () => {
  const { totalItems } = useCart();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setCurrentPage(1);
  }, [selectedCategory, products]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  if (loading) return (
    <div className="flex justify-center items-center mt-60">
      <Navbar />
      <Loader className="animate-spin text-green-500" size={64} />
    </div>
  );
  if (error) return <p className="text-center text-xl mt-10 text-red-500">{error}</p>;

  return (
    <div className="bg-green-100 min-h-screen p-4 md:p-8 relative font-arima" role="main" aria-label="Product List Page">
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
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
  
          <main className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" aria-labelledby="product-grid-title">
              <h2 id="product-grid-title" className="sr-only">Product List</h2>
              {currentProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="flex justify-between mt-4 mb-20 md:mb-4">
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

      {/* Mobile category toggle button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed bottom-24 right-4 md:hidden bg-green-500 text-white p-3 rounded-full shadow-lg z-40"
        aria-label="Ouvrir les catégories"
      >
        <span className="text-xl">🏷️</span>
      </button>

      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg z-40"
        aria-label="Ouvrir le panier"
        aria-expanded={isCartOpen}
      >
        <ShoppingCart size={24} />
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      </button>

      <CartPopup
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
};

export default ProductList;