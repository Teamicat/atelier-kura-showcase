import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <h1 className="hero-title">Cuisine & Artisanat</h1>
        <p className="hero-subtitle">
          Une sélection rigoureuse d'ustensiles japonais alliant design minimaliste et fonctionnalité absolue. 
          Sublimez votre quotidien culinaire.
        </p>
        <div className="hero-cta">
          <a href="#gallery" className="btn-primary">Découvrir la Collection</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="visual-circle"></div>
      </div>
    </section>
  );
};

export default Hero;
