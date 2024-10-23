import React from "react"; 

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 font-arima">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">À propos d'ÉcoShop</h4>
          <p className="text-sm">ÉcoShop est votre partenaire pour un mode de vie durable et écologique.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
          <ul className="text-sm">
            <li className="mb-2"><a href="/products" className="hover:text-green-300" aria-label="Nos produits">Nos produits</a></li>
            <li className="mb-2"><a href="#" className="hover:text-green-300" aria-label="À propos de nous">À propos de nous</a></li>
            <li className="mb-2"><a href="#" className="hover:text-green-300" aria-label="Blog">Blog</a></li>
            <li><a href="#" className="hover:text-green-300" aria-label="Contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Restez connecté</h4>
          <p className="text-sm mb-4">Inscrivez-vous à notre newsletter pour recevoir nos dernières offres et conseils écologiques.</p>
          <input 
            type="email" 
            placeholder="Votre email" 
            className="w-full p-2 rounded mb-2 text-gray-800" 
            aria-label="Saisissez votre adresse email"
          />
          <button 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            aria-label="S'abonner à la newsletter"
          >
            S'abonner
          </button>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2024 ÉcoShop. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer