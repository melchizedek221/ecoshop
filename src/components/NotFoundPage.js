import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './Seo';

const NotFoundPage = () => {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center justify-center text-center font-arima">
      <SEO
        title="Page non trouvée - 404"
        description="Cette page est introuvable sur ÉcoShop."
        keywords="404, page non trouvée, erreur"
      />
      <h1 className="text-6xl font-bold text-green-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Oups ! La page que vous recherchez n'existe pas.
      </p>
      {/* GIF humoristique */}
      <img 
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG1qcXJmNjV1djlpN21qOWhteGQwaXA1YjZwNGlxaXdnaGI4MGdsMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VwoJkTfZAUBSU/giphy.gif" 
        alt="GIF drôle pour 404" 
        className="w-80 h-auto mb-8" 
        aria-hidden="true"
      />
      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        aria-label="Retourner à la page d'accueil"
      >
        Retourner à l'accueil
      </Link>
    </div>
  );
};

export default NotFoundPage;
