"use client";

import { useState, useEffect } from "react";
import RevolutCardField from "./paiement-formation";
import image1 from "@/public/assets/img/visamastercard.png";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PaymentPage() {
  const [token, setToken] = useState(null);
  const [amount, setAmount] = useState(null);
  const [description, setDescription] = useState(null);
  const [orderResponse, setOrderResponse] = useState(null);

  // Récupérer la réponse de la commande depuis localStorage au chargement de la page
  useEffect(() => {
    const storedResponse = localStorage.getItem("orderResponse");
    if (storedResponse) {
      const parsedResponse = JSON.parse(storedResponse);
      setOrderResponse(parsedResponse);
      setToken(parsedResponse?.token); // Mettre à jour le token
      setAmount(parsedResponse?.amount); // Mettre à jour le montant
      setDescription(parsedResponse?.description); // Mettre à jour le montant
      console.log("local :" + storedResponse)
    }
  }, []);

  // Fonction pour récupérer les données du formulaire
  const handleSubmit = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mount = amount;
    const formation = description;
    const countryCode = "FR";
    const phone = document.getElementById("phone").value;
    const region = document.getElementById("region").value;
    const city = document.getElementById("city").value;
    const streetLine1 = document.getElementById("streetLine1").value;
    const postcode = document.getElementById("postcode").value;
    
    if (!name) {
      toast.error("Nom est obligatoire.");
      return null;
    }
  
    if (!email) {
      toast.error("Email est obligatoire.");
      return null;
    }
  
    if (!countryCode) {
      toast.error("Code pays est obligatoire.");
      //return null;
    }
  
    if (!city) {
      toast.error("Ville est obligatoire.");
      //return null;
    }
  
    if (!streetLine1) {
      toast.error("Adresse est obligatoire.");
      //return null;
    }
  
    if (!postcode) {
      toast.error("Code postal est obligatoire.");
      //return null;
    }
    
     const formData ={
      name: name,
      email: email,
      phone: phone, // Numéro de téléphone formaté en France
      cardholderName: name,
      mount: mount,
      formation: formation,
      billingAddress: {
          countryCode: countryCode,  // Code pays pour la France
          region: region,  // Exemple de région en France
          city: city,  // Exemple de ville en France
          postcode: postcode,  // Code postal pour Paris
          streetLine1: streetLine1,  // Exemple d'adresse
          streetLine2: streetLine1  // Ligne d'adresse complémentaire
      }
  }
  if (window.fbq) {
    fbq("track", "AddPaymentInfo");
  }
    //console.log("Données du formulaire :", formData); // À des fins de débogage
    return JSON.stringify(formData); // Retourner les données pour RevolutCardField
  };

  return (
    <div className="section-padding container">
     <div class="container Formulaire_de_paiement">
        <div class="row">
            <div class="col-12 col-md-6"> 
            <div className=" mr-md-10 formulaire-gauche">
              <form>
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <label htmlFor="name">Nom complet</label>
                      <input id="name" type="text" placeholder="John Doe" required />
                    </div>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email">E-mail</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="john.doe@example.com"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="countryCode">Téléphone</label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+33612345678"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="city">Ville</label>
                        <input id="city" type="text" placeholder="Paris" required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="region">Région</label>
                        <input id="region" type="text" placeholder="Île-de-France" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="streetLine1">Adresse ligne 1</label>
                        <input
                          id="streetLine1"
                          type="text"
                          placeholder="1 Rue de la Paix"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="postcode">Code postal</label>
                        <input id="postcode" type="text" placeholder="75002" required />
                      </div>
                    </div>
                  </div>
              </form>
            </div>
            </div>
            <div class="col-12 col-md-6"> 
            <div className="pl-20 align-items-center formulaire-droit">
                <div className="project-info mb-5">
                    <ul>
                      <li>Formation: <span>{orderResponse?.description}</span></li>
                      <li>Prix: <span className="value">{orderResponse?.amount / 100} €</span></li>
                      <li><span></span></li>
                    </ul>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12 mb-1">
                      {/* Champ de carte Revolut (uniquement pour le mode de paiement par carte) */}
                      <div id="card-field"></div>
                    </div>
                    <button id="button-submit" type="button" /* onClick={handleSubmit} */ >
                      Payer
                    </button>
                    <div className="mt-5">
                      <img src={image1?.src} alt="Visa MasterCard" />
                    </div>
                    {/* Composant RevolutCardField (uniquement pour le mode de paiement par carte) */}
                    {/* token && <RevolutCardField token={token} /> */}
                    {token && <RevolutCardField token={token} onSubmit={handleSubmit} />}
                  </div>
              </div>
            </div>
        </div>
      </div>

    </div>
  );
}