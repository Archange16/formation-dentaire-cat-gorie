"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Temoignage from '../../temoignage/temoignages';

const PortfolioDetailsMain = ({ singleData }) => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(48 * 60 * 60); // 48h en secondes
  const [normalAmount, setnormalAmount] = useState(99); // Montant initial
  const [promoAmount, setpromoAmount] = useState(69); // Montant initial
  const [porcentage, setporcentage] = useState(30); // Montant initial
  const [currency, setCurrency] = useState('EUR'); // Devise par défaut
  const [isLoading, setIsLoading] = useState(false); // État de chargement
  const [error, setError] = useState(null); // Gestion des erreurs
  const [selectedPacks, setSelectedPacks] = useState({
    'anglais-debutant-a1-a2': false,
    'anglais-intermediaire-b1-b2': false,
    'anglais-avance-c1-c2': false,
  });

  // Fonction pour gérer les changements de cases à cocher
  const handleCheckboxChange = (id) => {
    setSelectedPacks((prevState) => {
      const newState = { ...prevState };
  
      if (id === 'anglais-debutant + intermediaire' && !newState[id]) {
        // Si l'utilisateur coche la case 'anglais-debutant + intermediaire', décocher l'autre case
        newState['anglais-debutant, intermediaire + Avancé'] = false;
      } else if (id === 'anglais-debutant, intermediaire + Avancé' && !newState[id]) {
        // Si l'utilisateur coche la case 'anglais-debutant, intermediaire + Avancé', décocher l'autre case
        newState['anglais-debutant + intermediaire'] = false;
      }
  
      newState[id] = !newState[id]; // Inverser l'état de la case actuellement cliquée
  
      let newnormalAmount = singleData?.formation?.prix || 99; // Montant initial
      let newpromoAmount = singleData?.formation?.prix || 69; // Montant initial
      let newporcentage = 30; // Montant initial
  
      // Calculer l'ajustement du montant basé sur les packs sélectionnés
      if (newState['anglais-debutant + intermediaire']) {
        newnormalAmount += 99; // Ajouter 99 si 'anglais-debutant + intermediaire' est coché
        newpromoAmount += 30; // Ajouter 30 si 'anglais-debutant + intermediaire' est coché
        newporcentage = 50;
      }

      // Calculer l'ajustement du montant basé sur les packs sélectionnés
      if (newState['anglais intermediaire + Avancé']) {
        newnormalAmount += 99; // Ajouter 99 si 'anglais-debutant + intermediaire' est coché
        newpromoAmount += 30; // Ajouter 30 si 'anglais-debutant + intermediaire' est coché
        newporcentage = 50;
      }

      if (newState['anglais-debutant, intermediaire + Avancé']) {
        newnormalAmount += 198; // Ajouter 198 si 'anglais-debutant, intermediaire + Avancé' est coché
        newpromoAmount += 70; // Ajouter 70 si 'anglais-debutant, intermediaire + Avancé' est coché
        newporcentage = 53;
      }
  
      setnormalAmount(newnormalAmount); // Mettre à jour le montant
      setpromoAmount(newpromoAmount); // Mettre à jour le montant
      setporcentage (newporcentage); // Montant initial

      return newState;
    });
  };
  

  // Fonction pour créer une commande
  const createOrder = async () => {
    const finalAmount = promoAmount < normalAmount ? promoAmount : normalAmount; // Choisir le prix promo ou le prix normal selon la promo
    if (finalAmount <= 0) {
      setError('Le montant de la commande est invalide.');
      return;
    }

    setIsLoading(true); 
    setError(null); 

    const orderData = {
      amount: finalAmount, // Utiliser le montant final
      currency,
      description: singleData.titre,
      //selectedPacks,
    };

    console.log(JSON.stringify(orderData));

    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Commande créée avec succès:');
        localStorage.setItem("orderResponse", JSON.stringify(data));
        router.push("/paiement");
      } else {
        console.error('Erreur lors de la création de la commande:', data.error);
        setError(data.error || 'Une erreur est survenue lors de la création de la commande.');
      }
    } catch (error) {
      console.error('Erreur réseau ou autre:', error.message);
      setError('Une erreur réseau est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  // Utilisation de useEffect pour démarrer un timer qui décrémente chaque seconde
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0)); 
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fonction pour formater le temps restant en heures:minutes:secondes
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="skill__two-tab-details-content mt-5 mb-5">
      <div className="row justify-content-center gy-4">
        <div className="col-xl-7">
          <h2 className="text-center">{singleData?.titre}</h2>
          <p className="mb-1 fw-bold fs-5">{singleData.description1}</p>
          <p>{singleData.description}</p>

          <div className="image-formation">
            <img
              className="img__full rounded mt-5"
              src={singleData?.image?.src}
              alt={singleData?.id}
            />
          </div>
        </div>

        <div className="col-xl-5 project-info-left">
          <div className="project-info ">

            <div className="project-info-top border border-danger-subtle border-4">
              <h4>
                {['anglais-debutant-a1-a2', 'anglais-intermediaire-b1-b2', 'anglais-avance-c1-c2'].includes(singleData?.id) ? (
                  <span className="text-danger">Offre Spéciale !</span>
                ) : (
                  singleData?.titre
                )}
              </h4>
            </div>

            <ul className="d-flex justify-content-between">
              <div>
              <li>niveau: <span>{singleData.niveau}</span></li>
              <li>public: <span>{singleData.public}</span></li>
              <li>duree: <span>{singleData.duree}</span></li>
              <li>
                Prix: <span className="value text-muted text-decoration-line-through">{normalAmount} € </span>
                  <span className="h3 text-success fw-bold">&nbsp;&nbsp;{promoAmount} €</span>
              </li>
              <li>
                  <p className="text-secondary fs-6">
                    Dépêche-toi, offre limitée ! <span className="fs-6 text-danger font-monospace mb-4">⏳ {formatTime(timeLeft)} restantes</span>
                  </p>
              </li>
              <li className="mt-5 border">
                {singleData?.id === 'anglais-debutant-a1-a2' && (
                  <div className="table">
                    <table className="styled-table">
                      <thead>
                        <tr>
                          <th className="text-center">Payez moins avec nos Packs Exclusifs ! <br/> <span className="text-danger fw-bold">{porcentage}% de Remise</span> </th>
                        </tr>
                      </thead>
                      <tbody>
                        {['anglais-debutant + intermediaire', 'anglais-debutant, intermediaire + Avancé'].map((id) => (
                          <tr key={id}>
                            <td>
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  checked={selectedPacks[id]}
                                  onChange={() => handleCheckboxChange(id)}
                                />
                                En choisissant le Pack {id.replace('-', ' ')}
                              </label>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {singleData?.id === 'anglais-intermediaire-b1-b2' && (
                  <div className="table">
                    <table className="styled-table">
                      <thead>
                        <tr>
                          <th className="text-center">Payez moins avec nos Packs Exclusifs ! <br/> <span className="text-danger fw-bold">{porcentage}% de Remise</span> </th>
                        </tr>
                      </thead>
                      <tbody>
                        {['anglais intermediaire + Avancé'].map((id) => (
                          <tr key={id}>
                            <td>
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  checked={selectedPacks[id]}
                                  onChange={() => handleCheckboxChange(id)}
                                />
                                En choisissant le Pack {id.replace('-', ' ')}
                              </label>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              <div className="d-flex justify-content-center">
                <button onClick={createOrder} className="btn-one" disabled={isLoading}>
                  {isLoading ? 'Traitement...' : 'Acheter Maintenant 🔥'}
                </button>
              </div>

                {selectedPacks['anglais-intermediaire-b1-b2'] && (
                  <p className="text-primary-emphasis mt-3">
                    Bonus : Inscrivez-vous aujourd'hui et recevez un guide gratuit des 100 phrases essentielles en anglais!
                  </p>
                )}
              </li>
              {error && <li className="text-danger">{error}</li>}
              </div>
              <div>
                <div className="btn-achat-formation ">
                  <Temoignage className="" />
                </div>
              </div>
              
            </ul>
           
          </div>

          <div className="project-info mt-20">
            <div className="project-info-top">
              <h4>Ce que vous allez maîtriser :</h4>
            </div>
            <ul>
              {singleData?.objectifs_pedagogiques?.map((objectif, index) => (
                <li key={index}><span>{objectif}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsMain;
