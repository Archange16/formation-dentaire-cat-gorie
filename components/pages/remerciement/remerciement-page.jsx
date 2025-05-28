// components/ThankYouPage.js
import React from "react";

const RemerciementPage = ({ orderId }) => {
  return (
    <div className="thank-you-page section-padding">
      <h1>Merci pour votre achat !</h1>
      <p>Votre paiement a été traité avec succès.</p>
      {orderId && (
        <p>
          Votre numéro de commande est : <strong>{orderId}</strong>
        </p>
      )}
      <p>Nous vous enverrons un email de confirmation sous peu.</p>
      <a href="/" className="home-link">
        Retour à la page d'accueil
      </a>
    </div>
  );
};

export default RemerciementPage;