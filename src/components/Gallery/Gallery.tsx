import { products } from '../../data';
import type { Product } from '../../data';
import './Gallery.css';

interface GalleryProps {
  onProductClick: (product: Product) => void;
}

const Gallery = ({ onProductClick }: GalleryProps) => {
  return (
    <section id="gallery" className="gallery section">
      <h2 className="gallery-title">Notre Collection</h2>
      <div className="gallery-grid">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => onProductClick(product)}
          >
            <div className="product-image-wrapper">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/800x800/f7f9f7/2d3436?text=${encodeURIComponent(product.name)}`;
                }}
              />
              <div className="product-overlay">
                <span>Détails</span>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button 
                className="btn-buy"
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Ajouté au panier : ${product.name}`);
                }}
              >
                Acheter
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
