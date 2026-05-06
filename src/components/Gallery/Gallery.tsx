import type { Product } from '../../data';
import './Gallery.css';

const products: Product[] = [
  {
    id: 1,
    name: "Cocotte en Fonte",
    description: "L'art de la cuisson lente et homogène.",
    price: "180€",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=800&auto=format&fit=crop",
    details: "Une cocotte en fonte émaillée robuste, idéale pour les ragoûts et les cuissons longues. Son design intemporel passe directement de la cuisine à la table."
  },
  {
    id: 2,
    name: "Spatule en Bois",
    description: "Douceur et précision pour vos poêles.",
    price: "15€",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop",
    details: "Fabriquée artisanalement en bois de hêtre, cette spatule respecte les surfaces antiadhésives tout en offrant une prise en main chaleureuse."
  },
  {
    id: 3,
    name: "Planche à Découper en Bois",
    description: "Un billot naturel et résistant.",
    price: "45€",
    image: "https://images.unsplash.com/photo-1594794112450-b50a2569ef5c?q=80&w=800&auto=format&fit=crop",
    details: "Une planche épaisse en bois de chêne, traitée aux huiles naturelles. Sa surface auto-cicatrisante protège le tranchant de vos couteaux."
  },
  {
    id: 4,
    name: "Porte-Couteaux Design",
    description: "L'élégance de l'acier pour vos lames.",
    price: "60€",
    image: "https://images.unsplash.com/photo-1593611664162-ef9f6111f196?q=80&w=800&auto=format&fit=crop",
    details: "Un support minimaliste qui maintient vos couteaux en sécurité et à portée de main. Un gain de place esthétique pour toute cuisine moderne."
  }
];

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
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x800?text=Image+Chargement...";
                }}
              />
              <div className="product-overlay">
                <span>Détails</span>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
