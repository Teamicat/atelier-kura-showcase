import type { Product } from '../../data';
import './Modal.css';

interface ModalProps {
  product: Product | null;
  onClose: () => void;
}

const Modal = ({ product, onClose }: ModalProps) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-body">
          <div className="modal-image-container">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="modal-details">
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-price">{product.price}</p>
            <p className="modal-description">{product.details}</p>
            <button className="btn-secondary" onClick={() => alert('Fonctionnalité d\'achat bientôt disponible !')}>
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
