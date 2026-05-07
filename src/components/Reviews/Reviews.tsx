import './Reviews.css';

const StarIcon = ({ fill }: { fill: 'full' | 'half' | 'empty' }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`star-svg ${fill}`}>
      {fill === 'full' && (
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
      )}
      {fill === 'empty' && (
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      )}
      {fill === 'half' && (
        <>
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#halfGrad)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
};

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.3 && rating - fullStars <= 0.7;
  const actualFullStars = rating - fullStars > 0.7 ? fullStars + 1 : fullStars;
  
  for (let i = 1; i <= 5; i++) {
    if (i <= actualFullStars) {
      stars.push(<StarIcon key={i} fill="full" />);
    } else if (hasHalfStar && i === fullStars + 1) {
      stars.push(<StarIcon key={i} fill="half" />);
    } else {
      stars.push(<StarIcon key={i} fill="empty" />);
    }
  }
  return <div className="stars-container">{stars}</div>;
};

const Reviews = () => {
  const adjustedReviews = [
    { id: 1, name: "Alice Dubois", rating: 5.0, comment: "Magnifique travail artisanal, chaque pièce est unique et apporte une touche de sérénité à ma cuisine." },
    { id: 2, name: "Bernard Petit", rating: 4.8, comment: "Très belle sélection d'ustensiles. Le service client est réactif et efficace." },
    { id: 3, name: "Chloé Martin", rating: 5.0, comment: "L'esthétique japonaise rencontre le design français. Parfait !" },
    { id: 4, name: "David Moreau", rating: 5.0, comment: "La qualité des matériaux est exceptionnelle. Je suis ravi de mes achats chez Yamasaki." },
    { id: 5, name: "Émilie Lefevre", rating: 4.7, comment: "Produits superbes, conformes à la description. La livraison a été un peu longue mais le résultat en valait l'attente." },
  ];

  const averageRating = 4.9;

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
