import { useState } from 'react';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import Modal from './components/Modal/Modal';
import Contact from './components/Contact/Contact';
import Social from './components/Social/Social';
import Reviews from './components/Reviews/Reviews'; /* Importer le nouveau composant */
import { Product } from './data';
import './index.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="app">
      <nav className="main-nav">
        <div className="nav-container">
          <div className="logo">Atelier Kura</div>
          <div className="nav-links">
            <a href="#home">Histoire</a>
            <a href="#gallery">Collection</a>
            <a href="#reviews">Avis Clients</a> {/* Lien vers la nouvelle section */}
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <Gallery onProductClick={openModal} />
        <Reviews /> {/* Intégration du composant Avis Clients */}
        <Contact />
        <Social />
      </main>

      <footer className="footer">
        <p>&copy; 2026 Atelier Kura. Tous droits réservés.</p>
      </footer>

      <Modal product={selectedProduct} onClose={closeModal} />
    </div>
  );
}

export default App;
