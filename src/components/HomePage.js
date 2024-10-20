import React from 'react';
import { Leaf, ShoppingBag, Recycle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const EcoLandingPage = () => {
  const [scrollDown, setScrollDown] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/products');
  };

  useEffect(() => {
    const onScroll = () => setScrollDown(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2013&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="z-20 text-center text-white animate-fade-in">
          <h1 className="text-5xl font-bold font-playfair mb-4 transition-all duration-700 ease-in-out transform hover:scale-105">
            Bienvenue chez ÉcoShop
          </h1>
          <p className="text-xl mb-8">Votre destination pour un mode de vie durable</p>
          <button onClick={handleButtonClick} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 animate-pulse">
            Découvrir nos produits
          </button>
        </div>
        {/* Flèche vers le bas */}
        <div className={`absolute bottom-10 z-20 animate-bounce ${scrollDown ? 'hidden' : ''}`}>
          <a href="#features">
            <svg className="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12 animate-slide-in">
            Pourquoi choisir ÉcoShop ?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center transition duration-500 ease-in-out transform hover:scale-110">
              <Leaf size={48} className="mx-auto text-green-600 mb-4 animate-fade-in" />
              <h3 className="text-xl font-semibold mb-2">Produits Écologiques</h3>
              <p className="text-gray-600">
                Tous nos produits sont sélectionnés pour leur faible impact environnemental.
              </p>
            </div>
            <div className="text-center transition duration-500 ease-in-out transform hover:scale-110">
              <ShoppingBag size={48} className="mx-auto text-green-600 mb-4 animate-fade-in" />
              <h3 className="text-xl font-semibold mb-2">Emballage Minimal</h3>
              <p className="text-gray-600">
                Nous réduisons les déchets en utilisant un emballage minimal et recyclable.
              </p>
            </div>
            <div className="text-center transition duration-500 ease-in-out transform hover:scale-110">
              <Recycle size={48} className="mx-auto text-green-600 mb-4 animate-fade-in" />
              <h3 className="text-xl font-semibold mb-2">Économie Circulaire</h3>
              <p className="text-gray-600">Nous encourageons le recyclage et la réutilisation de nos produits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-green-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Prêt à faire la différence ?</h2>
          <p className="text-xl text-gray-600 mb-8">Rejoignez notre communauté d'éco-consommateurs aujourd'hui !</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            S'inscrire maintenant
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">À propos d'ÉcoShop</h4>
              <p className="text-sm">ÉcoShop est votre partenaire pour un mode de vie durable et écologique.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
              <ul className="text-sm">
                <li className="mb-2"><a href="/products" className="hover:text-green-300">Nos produits</a></li>
                <li className="mb-2"><a href="#" className="hover:text-green-300">À propos de nous</a></li>
                <li className="mb-2"><a href="#" className="hover:text-green-300">Blog</a></li>
                <li><a href="#" className="hover:text-green-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Restez connecté</h4>
              <p className="text-sm mb-4">Inscrivez-vous à notre newsletter pour recevoir nos dernières offres et conseils écologiques.</p>
              <input type="email" placeholder="Votre email" className="w-full p-2 rounded mb-2 text-gray-800" />
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                S'abonner
              </button>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2024 ÉcoShop. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcoLandingPage;
