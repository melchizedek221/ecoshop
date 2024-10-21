
# EcoShop

**EcoShop** est une application web de e-commerce dédiée à la promotion des produits durables et éco-responsables. Le site permet aux utilisateurs de parcourir différentes catégories de produits et de faire des achats en ligne de manière intuitive et respectueuse de l'environnement.

## Demo

[Lien vers la version déployée](https://eco-shop-sn.vercel.app)

## Table des matières

- [Installation](#installation)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [API Produits](#api-produits)
- [Contribuer](#contribuer)

## Installation

### Prérequis

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Étapes d'installation

1. Clonez le dépôt GitHub sur votre machine locale :

   ```bash
   git clone https://github.com/melchizedek221/ecoshop.git
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd ecoshop
   ```

3. Installez les dépendances nécessaires :

   Avec npm :

   ```bash
   npm install
   ```

   Ou avec yarn :

   ```bash
   yarn install
   ```

4. Lancer le serveur de développement :

   Avec npm :

   ```bash
   npm start
   ```

   Ou avec yarn :

   ```bash
   yarn start
   ```

L'application sera disponible à l'adresse : `http://localhost:3000/`.

## Fonctionnalités

- Affichage dynamique des produits par catégories.
- Système de panier avec possibilité d'ajouter et de retirer des produits.
- Filtres par catégories pour affiner la recherche des produits.
- Interface responsive pour une utilisation optimale sur mobile.

## Technologies

- **React** : Bibliothèque JavaScript pour la création d'interfaces utilisateur.
- **Axios** : Client HTTP utilisé pour récupérer les données des produits depuis l'API.
- **Tailwind CSS** : Framework CSS pour un style rapide et performant.
- **React Router** : Permet la navigation entre les différentes pages de l'application.

## API Produits

L'application utilise l'[API Fake Store](https://fakestoreapi.com/) pour récupérer les informations sur les produits.

### Points de terminaison utilisés

- **Récupérer tous les produits** : 
  ```bash
  GET https://fakestoreapi.com/products
  ```

- **Récupérer un produit par ID** : 
  ```bash
  GET https://fakestoreapi.com/products/{id}
  ```

- **Récupérer les catégories de produits** : 
  ```bash
  GET https://fakestoreapi.com/products/categories
  ```

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer, veuillez suivre ces étapes :

1. Forker le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/NouvelleFeature`)
3. Commitez vos modifications (`git commit -m 'Ajout de NouvelleFeature'`)
4. Poussez votre branche (`git push origin feature/NouvelleFeature`)
5. Ouvrez une Pull Request

---

© 2024 EcoShop. Tous droits réservés.
