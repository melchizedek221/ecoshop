import React, { useEffect, useState } from 'react';
import { Leaf, ShoppingBag, Recycle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from './Seo';
import backgroundImage from '../assets/images/bg_homepage.webp'; 
import Footer from './Footer';

const EcoLandingPage = () => {
  const [scrollDown, setScrollDown] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/products');
  };

  useEffect(() => {
    document.title = "EcoShop"; 
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollDown(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-green-50 min-h-screen font-arima" role="main" aria-label="Main content">
    <SEO
        title="Accueil - ÉcoShop"
        description="Découvrez les meilleurs produits éco-responsables chez ÉcoShop"
        keywords="écologie, produits durables, éco-responsable, shopping"
        siteURL="https://www.ecoshop.com/"
        twitterHandle="@ecoshop"
        imagePreview="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2013&q=80"
    />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          role="img"
          aria-label="Beautiful landscape showcasing eco-friendly products"
        ></div>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="z-20 text-center text-white animate-fade-in">
          <h1 className="text-5xl font-bold font-arima mb-4 transition-all duration-700 ease-in-out transform hover:scale-105">
            Bienvenu(e) chez EcoShop
          </h1>
          <p className="text-xl mb-8 font-arima">Votre destination pour un mode de vie durable</p>
          <button 
            onClick={handleButtonClick} 
            className="bg-green-600 font-arima hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 animate-pulse"
            aria-label="Découvrir nos produits"
          >
            Découvrir nos produits
          </button>
        </div>
        {/* Flèche vers le bas */}
        <div className={`absolute bottom-10 z-20 animate-bounce ${scrollDown ? 'hidden' : ''}`}>
          <a href="#features" aria-label="Scroll down to features section">
            <svg className="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white font-arima" aria-labelledby="features-title">
        <div className="container mx-auto px-4">
          <h2 id="features-title" className="text-3xl font-arima font-bold text-center text-green-800 mb-12 animate-slide-in">
            Pourquoi choisir ÉcoShop ?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center transition duration-500 ease-in-out transform hover:scale-110" role="article" aria-labelledby="eco-products">
              <Leaf size={48} className="mx-auto text-green-600 mb-4 animate-fade-in" />
              <h3 id="eco-products" className="text-xl font-semibold mb-2">Produits Écologiques</h3>
              <p className="text-gray-600">
                Tous nos produits sont sélectionnés pour leur faible impact environnemental.
              </p>
            </div>
            <div className="text-center transition duration-500 ease-in-out transform hover:scale-110" role="article" aria-labelledby="minimal-packaging">
              <ShoppingBag size={48} className="mx-auto text-green-600 mb-4 animate-fade-in" />
              <h3 id="minimal-packaging" className="text-xl font-semibold mb-2">Emballage Minimal</h3>
              <p className="text-gray-600">
                Nous réduisons les déchets en utilisant un emballage minimal et recyclable.
              </p>
            </div>
            <div className="text-center transition duration-500 ease-in-out transform hover:scale-110" role="article" aria-labelledby="circular-economy">
              <Recycle size={48} className="mx-auto text-green-600 mb-4 animate-fade-in" />
              <h3 id="circular-economy" className="text-xl font-semibold mb-2">Économie Circulaire</h3>
              <p className="text-gray-600">Nous encourageons le recyclage et la réutilisation de nos produits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-green-100 font-arima">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Prêt à faire la différence ?</h2>
          <p className="text-xl text-gray-600 mb-8">Rejoignez notre communauté d'éco-consommateurs aujourd'hui !</p>
          <button 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            aria-label="S'inscrire maintenant"
          >
            S'inscrire maintenant
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EcoLandingPage;
