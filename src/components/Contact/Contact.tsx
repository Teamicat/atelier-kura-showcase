import { useState } from 'react';
import type { FormEvent } from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('Merci ! Votre message a bien été envoyé.');
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact-container">
        <h2 className="contact-title">Parlons de votre projet</h2>
        <p className="contact-intro">Une question, une commande spéciale ou simplement envie de dire bonjour ? Écrivez-nous.</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Nom complet" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Votre message" rows={5} required></textarea>
          </div>
          <button type="submit" className="btn-primary">Envoyer le message</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
