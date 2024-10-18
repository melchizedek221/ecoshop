import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="pt-20 p-4">
        <h1>Bienvenue sur ÉcoShop</h1>
        <p>Votre destination pour des produits écologiques.</p>
      </main>
    </div>
  );
}

export default App;
