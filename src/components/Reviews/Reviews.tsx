import './Reviews.css';

// Fonction pour générer les étoiles (simplifié avec des caractères)
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  let stars = '';
  for (let i = 0; i < fullStars; i++) stars += '★';
  if (halfStar) stars += '½';
  for (let i = 0; i < emptyStars; i++) stars += '☆';
  return stars;
};

const Reviews = () => {
  // Données simulées pour atteindre une moyenne de 4.9
  const adjustedReviews = [
    { id: 1, name: "Alice Dubois", rating: 5.0, comment: "Magnifique travail artisanal, chaque pièce est unique et apporte une touche de sérénité à ma cuisine." },
    { id: 2, name: "Bernard Petit", rating: 4.8, comment: "Très belle sélection d'ustensiles. Le service client est réactif et efficace." },
    { id: 3, name: "Chloé Martin", rating: 5.0, comment: "L'esthétique japonaise rencontre le design français. Parfait !" },
    { id: 4, name: "David Moreau", rating: 5.0, comment: "La qualité des matériaux est exceptionnelle. Je suis ravi de mes achats chez Yamasaki." },
    { id: 5, name: "Émilie Lefevre", rating: 4.7, comment: "Produits superbes, conformes à la description. La livraison a été un peu longue mais le résultat en valait l'attente." },
  ];
  // Calcul: (5.0 + 4.8 + 5.0 + 5.0 + 4.7) / 5 = 24.5 / 5 = 4.9

  const averageRating = 4.9; // Valeur fixe demandée

  return (
    <section id="reviews" className="reviews section">
      <div className="reviews-container">
        <h2 className="reviews-title">Ce que nos clients disent</h2>
        <div className="average-rating">
          <span className="stars">{renderStars(averageRating)}</span>
          <span className="rating-value">{averageRating}</span>
          <span className="rating-label">/5 étoiles</span>
        </div>
        <div className="reviews-grid">
          {adjustedReviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <span className="stars">{renderStars(review.rating)}</span>
                <span className="review-name">{review.name}</span>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
