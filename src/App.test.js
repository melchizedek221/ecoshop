import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EcoLandingPage from '../src/components/HomePage';

// Mock des dépendances
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

jest.mock('../src/components/Seo', () => {
  return function DummySEO() {
    return <div data-testid="seo-component"></div>;
  };
});

describe('EcoLandingPage', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  test('renders main components', () => {
    render(
      <Router>
        <EcoLandingPage />
      </Router>
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByText('Bienvenu(e) chez EcoShop')).toBeInTheDocument();
    expect(screen.getByText('Votre destination pour un mode de vie durable')).toBeInTheDocument();
    expect(screen.getByText('Découvrir nos produits')).toBeInTheDocument();
    expect(screen.getByText('Pourquoi choisir ÉcoShop ?')).toBeInTheDocument();
    expect(screen.getByText('Prêt à faire la différence ?')).toBeInTheDocument();
  });

  test('renders SEO component', () => {
    render(
      <Router>
        <EcoLandingPage />
      </Router>
    );

    expect(screen.getByTestId('seo-component')).toBeInTheDocument();
  });

  test('renders features section', () => {
    render(
      <Router>
        <EcoLandingPage />
      </Router>
    );

    expect(screen.getByText('Produits Écologiques')).toBeInTheDocument();
    expect(screen.getByText('Emballage Minimal')).toBeInTheDocument();
    expect(screen.getByText('Économie Circulaire')).toBeInTheDocument();
  });

  test('renders footer', () => {
    render(
      <Router>
        <EcoLandingPage />
      </Router>
    );

    expect(screen.getByText('Liens rapides')).toBeInTheDocument();
    expect(screen.getByText('Restez connecté')).toBeInTheDocument();
    expect(screen.getByText('© 2024 ÉcoShop. Tous droits réservés.')).toBeInTheDocument();
  });

  test('handles button click', () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockImplementation(() => mockNavigate);

    render(
      <Router>
        <EcoLandingPage />
      </Router>
    );

    fireEvent.click(screen.getByText('Découvrir nos produits'));
    expect(mockNavigate).toHaveBeenCalledWith('/products');
  });

  test('handles scroll event', () => {
    render(
      <Router>
        <EcoLandingPage />
      </Router>
    );
  
    const scrollArrow = screen.getByRole('link', { name: /Scroll down to features section/i });
    expect(scrollArrow).toBeInTheDocument();
  
    fireEvent.scroll(window, { target: { scrollY: 400 } });
  
    expect(scrollArrow).toBeVisible();
  });

  test('updates document title', () => {
    render(
      <Router>
        <EcoLandingPage />
      </Router>
    );

    expect(document.title).toBe('EcoShop');
  });
});

