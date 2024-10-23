
# EcoShop

**EcoShop** est une application web de e-commerce dédiée à la promotion des produits durables et éco-responsables. Le site permet aux utilisateurs de parcourir différentes catégories de produits et de faire des achats en ligne de manière intuitive et respectueuse de l'environnement.

## Tableau de gestion des tâches

Vous pouvez suivre l'avancement des tâches et des fonctionnalités du projet sur le tableau GitHub Projects dédié au projet :  
[GitHub Projects - EcoShop](https://github.com/users/melchizedek221/projects/1)

## Fonctionnalités à implémenter

1. **Page d'accueil** :
    - Présentation générale de la boutique avec un focus sur les produits écologiques.
    - Affichage des catégories principales de produits.
    
2. **Page Produit** :
    - Liste des produits récupérés via l'API Fake Store.
    - Filtrage par catégorie.
    - Affichage détaillé d'un produit sélectionné.

3. **Panier** :
    - Possibilité d'ajouter des produits au panier.
    - Affichage du récapitulatif des produits dans le panier.
    - Option pour modifier les quantités et finaliser l'achat.

4. **Formulaire de contact** :
    - Formulaire de contact pour les utilisateurs.
    - Validation des champs et soumission des informations.

## Structure des composants

Le projet est organisé en plusieurs composants réutilisables :

- **ProductCard** : Affiche les informations d'un produit (image, nom, prix) dans la liste des produits.
- **ProductList** : Conteneur principal pour l'affichage de la liste des produits, avec la possibilité de filtrer par catégorie.
- **CartPopup** : Composant affichant le contenu du panier et permettant de modifier les quantités.
- **Sidebar** : Permet de naviguer entre les différentes catégories de produits.
- **Navbar** : Composant pour la navigation principale.
- **CartContext** : Composant ayant le context React pour les donnees.
- **Footer** : Composant global pour le pied de page du site.
- **Notfound** : Composant pour gerer l'erreur 404.


## Demo

[Lien vers la version déployée](https://eco-shop-sn.vercel.app)

## Table des matières

- [EcoShop](#ecoshop)
- [Tableau de gestion des tâches](#tableau-de-gestion-des-tâches)
- [Fonctionnalités à implémenter](#fonctionnalités-à-implémenter)
- [Structure des composants](#structure-des-composants)
- [Demo](#demo)
- [Installation](#installation)
  - [Prérequis](#prérequis)
  - [Étapes d'installation](#étapes-dinstallation)
- [Technologies](#technologies)
- [API Produits](#api-produits)
- [Accessibilité](#accessibilité)
- [Approche responsive](#approche-responsive)
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

### Récupération des données et utilisation de l'API Fake Store

Les données des produits sont récupérées depuis l'API Fake Store à l'aide de `axios`. Voici comment cela fonctionne :

- **Appel à l'API** : Nous utilisons la méthode `useEffect` pour déclencher un appel API lors du chargement de la page produit ou du changement de catégorie.
- **Gestion d'état** : Les produits récupérés sont stockés dans un état local avec `useState` et affichés dynamiquement dans le composant `ProductList`.
- **Filtrage des produits** : Une fonctionnalité de filtre par catégorie permet de n'afficher que les produits d'une catégorie spécifique.

Exemple d'appel API dans le projet :
```javascript
useEffect(() => {
  axios.get('https://fakestoreapi.com/products')
    .then(response => setProducts(response.data))
    .catch(error => console.error('Erreur lors de la récupération des produits:', error));
}, []);

```

## Accessibilité

Nous avons pris soin de respecter les bonnes pratiques en matière d'accessibilité afin de rendre le site utilisable pour le plus grand nombre, notamment :

- **WAI-ARIA** : Utilisation des rôles et des attributs ARIA pour améliorer l'accessibilité des composants et permettre une meilleure compatibilité avec les technologies d'assistance.
- **Contraste** : Respect des critères de contraste des couleurs pour assurer une lisibilité optimale, en particulier pour les utilisateurs souffrant de déficiences visuelles.
- **Navigation au clavier** : Toutes les interactions sur le site sont accessibles via le clavier, en garantissant une navigation fluide et intuitive pour les utilisateurs qui ne peuvent pas utiliser une souris.
- **Étiquetage des formulaires** : Utilisation de balises `label` associées aux champs de formulaire pour une meilleure compréhension et accessibilité par les lecteurs d'écran.
- **Focus visible** : Gestion et mise en évidence des éléments en focus pour améliorer la navigation et l'expérience utilisateur au clavier.

## Approche responsive

Le design du site a été développé en adoptant une approche **mobile first**, garantissant ainsi une expérience utilisateur fluide sur tous les appareils, quelle que soit la taille de l'écran.

- **Mobile first** : Les styles sont d'abord définis pour les petits écrans, puis étendus à l'aide de media queries pour les écrans plus larges.
- **Flexbox et Grid** : Ces technologies sont utilisées pour structurer les éléments de la page et assurer une mise en page flexible et adaptable sur les appareils mobiles, tablettes et ordinateurs de bureau.
- **Breakpoints Tailwind CSS** : Le projet utilise Tailwind CSS pour définir des points de rupture (`breakpoints`) qui ajustent le design selon la taille de l'écran.
- **Images adaptatives** : Les images sont optimisées et redimensionnées en fonction de la résolution de l'écran pour améliorer les performances sur mobile.

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer, veuillez suivre ces étapes :

1. Forker le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/NouvelleFeature`)
3. Commitez vos modifications (`git commit -m 'Ajout de NouvelleFeature'`)
4. Poussez votre branche (`git push origin feature/NouvelleFeature`)
5. Ouvrez une Pull Request

---

© 2024 EcoShop. Tous droits réservés.
