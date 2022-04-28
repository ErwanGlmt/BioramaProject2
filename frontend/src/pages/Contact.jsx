import React from "react";
import "../App.css";
import "../styles/Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="title">
        <h1>Nous contacter</h1>
      </div>
      <div className="paragraph">
        <p>
          Si vous avez une demande particulière ou voulez souhaitez etre
          référencé sur notre site, voici un petit formulaire pour nous joindre.
          Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            minLength={8}
            placeholder="Votre nom ou raison sociale"
            required
          />
          <input
            type="text"
            min={5}
            placeholder="Objet de la demande"
            required
          />
          <input type="email" placeholder="exemple@email.fr" required />
          <textarea
            name="message"
            minLength="16"
            cols="30"
            rows="10"
            required
          />
          <input className="submit" type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
