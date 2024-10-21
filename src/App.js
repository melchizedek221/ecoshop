import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import EcoLandingPage from './components/HomePage';
import ContactPage from './components/ContactPage';
import NotFoundPage from './components/NotFoundPage';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <Router>
      <div className="App" role="main" aria-label="Main content">
        <Routes>
          <Route path="/" element={<EcoLandingPage />} />
          <Route path="/products" element={
                <CartProvider>
                  <ProductList />
                </CartProvider>
          } />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
