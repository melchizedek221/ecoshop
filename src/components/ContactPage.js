import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SEO from './Seo';
import Navbar from './Navbar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const ContactInfo = ({ icon: Icon, title, content }) => (
    <div className="flex items-start p-4 bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg font-arima">
      <Icon size={24} className="text-green-600 mr-4 mt-1 flex-shrink-0" />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 min-h-screen py-16 font-arima" role="main" aria-label="Main content">
      <SEO
        title="Contactez-nous - ÉcoShop"
        description="Contactez ÉcoShop pour toute question ou information complémentaire."
        keywords="contact, écologie, éco-responsable, support client"
        siteURL="https://www.ecoshop.com/contact"
        twitterHandle="@ecoshop"
        imagePreview="https://images.unsplash.com/photo-1601066522540-52dbd3107477?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <Navbar />
      <div className="container mx-auto px-4 mt-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-800 mb-4">Nous contacter</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vous avez des questions ? Nous sommes là pour vous aider. Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <section className="space-y-8">
            <ContactInfo 
              icon={Mail} 
              title="Email" 
              content="contact@ecoshop.com" 
            />
            <ContactInfo 
              icon={Phone} 
              title="Téléphone" 
              content="+221 111 11 11" 
            />
            <ContactInfo 
              icon={MapPin} 
              title="Adresse" 
              content="430 Thionakh, Thies" 
            />
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Nos heures d'ouverture</h2>
              <ul className="space-y-2 text-gray-600">
                <li>Lundi - Vendredi : 9h00 - 18h00</li>
                <li>Samedi : 10h00 - 16h00</li>
                <li>Dimanche : Fermé</li>
              </ul>
            </div>
          </section>

          <section className="bg-white shadow-2xl rounded-lg p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-bold text-green-800 mb-6">Envoyez-nous un message</h2>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
                  aria-label="Envoyer le message"
                >
                  <Send size={20} className="mr-2" />
                  Envoyer le message
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-3xl font-bold text-green-600 mb-4">Merci pour votre message !</h3>
                <p className="text-xl text-gray-600">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;