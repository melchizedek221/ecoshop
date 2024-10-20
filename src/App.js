
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="pt-20 p-4">
          <ProductList />
      </main>

    </div>
  );
}

export default App;
