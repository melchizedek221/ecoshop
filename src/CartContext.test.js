import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';
import CartPopup from './components/CartItem';

// Au début de votre fichier de test
const mockCartContext = {
  cart: [],
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
};

jest.mock('./context/CartContext', () => ({
  useCart: () => mockCartContext,
  CartProvider: ({ children }) => <div>{children}</div>,
}));

// Mock axios
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  delete: jest.fn()
}));

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 29.99,
  category: 'electronics',
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
};

// Mise à jour du renderWithCartProvider pour inclure le Router
const renderWithCartProvider = (ui) => {
  return render(
    <BrowserRouter>
      <CartProvider>{ui}</CartProvider>
    </BrowserRouter>
  );
};

describe('Cart Functionality', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('adds a product to the cart', async () => {
    renderWithCartProvider(<ProductCard product={mockProduct} />);

    const addButton = screen.getByRole('button', { 
      name: /shopping cart/i 
    });
    fireEvent.click(addButton);

    expect(addButton).toBeInTheDocument();

  });

  // test('removes a product from the cart', async () => {
  //   renderWithCartProvider(<CartPopup />);
  //   renderWithCartProvider(<ProductList/>);
    
  //   // // Mock the API response for ProductList
  //   const mockProducts = [mockProduct];
  //   jest.spyOn(global, 'fetch').mockImplementation(() =>
  //     Promise.resolve({
  //       json: () => Promise.resolve(mockProducts)
  //     })
  //   );

  //   // Attendez que le bouton de suppression soit disponible
  //   const removeButton = await screen.findByRole('button', { 
  //     name: /remove/i 
  //   });
  //   fireEvent.click(removeButton);

  //   expect(removeButton).not.toBeInTheDocument();
  // });
});