import type { Product } from '../../data';
import './Gallery.css';

const products: Product[] = [
  {
    id: 1,
    name: "Cocotte en Fonte",
    description: "L'art de la cuisson lente et homogène.",
    price: "180€",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
    details: "Une cocotte en fonte émaillée robuste, idéale pour les ragoûts et les cuissons longues. Son design intemporel passe directement de la cuisine à la table."
  },
  {
    id: 2,
    name: "Spatule en Bois",
    description: "Douceur et précision pour vos poêles.",
    price: "15€",
    image: "https://images.unsplash.com/photo-1594793012214-e5788d929497?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1593611664162-f79aa73a14d3?q=80&w=800&auto=format&fit=crop",
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
