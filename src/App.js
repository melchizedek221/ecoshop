import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import EcoLandingPage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="App" role="main" aria-label="Main content">
        <Routes>
          <Route path="/" element={<EcoLandingPage />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
