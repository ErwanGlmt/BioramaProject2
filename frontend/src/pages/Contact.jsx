import React, { useState } from "react";
import "../App.css";
import "../styles/Contact.css";

function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="title">
        <h1 className="contactTitle">Nous contacter</h1>
      </div>
      <div className="paragraph">
        <p className="pContact">
          Si vous avez une demande particulière ou voulez souhaitez etre
          référencé sur notre site, voici un petit formulaire pour nous joindre.
          Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            className="inputContact"
            type="text"
            minLength={8}
            placeholder="Votre nom ou raison sociale"
            required
          />
          <input
            className="inputContact"
            type="text"
            min={5}
            placeholder="Objet de la demande"
            required
          />
          <input
            className="inputContact"
            type="email"
            placeholder="exemple@email.fr"
            required
          />
          <textarea
            name="message"
            minLength="16"
            cols="30"
            rows="10"
            required
          />
          <input
            onClick={() => setMessage(!message)}
            className="submit"
            type="submit"
            value="Envoyer"
          />
          {message && (
            <p className="message">Nous avons bien reçu votre message</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
