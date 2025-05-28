"use client"; // Indique que ce composant est côté client

import { useEffect, useRef } from "react";
import RevolutCheckout from "@revolut/checkout";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


export default function RevolutCardField({ token, onSubmit }) {

  const router = useRouter();
  const instanceRef = useRef(null);

  useEffect(() => {
    // Initialiser le widget Revolut sandbox prod
    RevolutCheckout(token, "prod").then((instance) => {
      instanceRef.current = instance;

      // Créer le champ de carte avec personnalisation
      const card = instance.createCardField({
        target: document.getElementById("card-field"), // Cible le div pour le champ de carte
        styles: {
          default: {
            color: "#000", // Couleur par défaut du texte
            fontSize: "16px", // Taille de la police
          },
          focused: {
            color: "#7222db", // Couleur du texte lorsque le champ est focus
          },
        },
        classes: {
          default: "rc-card-field", // Classe CSS par défaut
          focused: "rc-card-field--focused", // Classe CSS lorsque le champ est focus
        },
        onSuccess() {
         // console.log("Paiement réussi !"); // Log pour débogage
          const formData = onSubmit();
          //const formData1 = JSON.parse(formData);
          sendEmail(formData);
          sendData(formData);

          // Déclenche l'événement de succès de paiement dans Facebook Pixel
          if (window.fbq) {
            fbq('track', 'Purchase', {
              value: formData.mount,   // Montant de la transaction (par exemple formData.mount)
              currency: 'EUR'          // Devise de la transaction, peut être modifié en fonction de votre besoin (ex: EUR, USD)
            });
          }
          
          toast.success("Paiement réussi !");
          router.push("/remerciement");
          
        },
        onError(message) {
          toast.error(`Erreur de paiement : ${message}`);
        },
      });
      document.getElementById("button-submit").addEventListener("click", function () {
        const formData = onSubmit();
        const formData1 = JSON.parse(formData);
        console.log("Données du formulaire :", formData1);

        card.submit(formData1);
      })
    });

    // Nettoyer l'instance lors du démontage du composant
    return () => {
      if (instanceRef.current) {
        instanceRef.current.destroy();
      }
    };
  }, [token, onSubmit]);

  return null; // Le widget est géré par Revolut, donc aucun rendu JSX n'est nécessaire
}

async function sendData(formData) {
  try {
    const response = await fetch('/api/sendDataToBrevo', {  // Assurez-vous que ce chemin correspond à votre API
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Réponse de l\'API:', responseData);

    return responseData; // Retourner les données ou gérer la réponse comme nécessaire

  } catch (error) {
    console.error('Erreur lors de l\'envoi des données:', error);
    return { error: error.message };
  }
}

async function sendEmail(formData) {
  try {
    // Envoi de la requête à l'API pour envoyer l'email
    const response = await fetch('/api/payment-received', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Vérification du statut de la réponse
    if (response.ok) {
      // Si la requête a réussi, vous mettez à jour le status
      console.log('Votre paiement a été reçu et un e-mail de confirmation a été envoyé.');
    } else {
      // Si la réponse du serveur n'est pas correcte, vous affichez un message d'erreur
      const errorData = await response.json(); // On peut essayer de récupérer un message d'erreur plus détaillé depuis la réponse
      console.log(errorData?.message || 'Une erreur est survenue lors de l\'envoi de l\'email.');
    }
  } catch (error) {
    // En cas d'erreur de connexion ou autre problème
    console.error('Erreur lors de l\'envoi de l\'email :', error);
    console.log('Une erreur est survenue lors de l\'envoi de l\'email.');
  }
}
