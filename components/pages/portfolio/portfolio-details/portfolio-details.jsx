"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Temoignage from '../../temoignage/temoignages';

const PortfolioDetailsMain = ({ singleData }) => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(48 * 60 * 60); // Initialisation par défaut
  const [normalAmount, setNormalAmount] = useState(99); // Montant initial
  const [promoAmount, setPromoAmount] = useState(69); // Montant initial
  const [percentage, setPercentage] = useState(30); // Pourcentage de remise
  const [economie, seteconomie] = useState(30); // Economie
  const [duree, setduree] = useState(15); // Durée
  const [remise, setremise] = useState(99); // Durée
  const [remisep, setremisep] = useState(null); // Durée
  const [remiseec, setremiseec] = useState(null); // Durée
  const [remisereste, setremisereste] = useState(null); // Durée
  const [currency, setCurrency] = useState('EUR'); // Devise par défaut
  const [isLoading, setIsLoading] = useState(false); // État de chargement
  const [error, setError] = useState(null); // Gestion des erreurs
  const [selectedPacks, setSelectedPacks] = useState({
    'anglais-debutant + intermediaire': false,
    'anglais-intermediaire + Avancé': false,
    'anglais-debutant, intermediaire + Avancé': false,
    'compta-initiation + Les Fondamentaux': false,
    'compta-pack complet': false,
  });

  const [selectedPackTitle, setSelectedPackTitle] = useState('');

  // Fonction pour gérer les changements de cases à cocher
  const handleCheckboxChange = (id, title) => {
    setSelectedPacks((prevState) => {
      const newState = { ...prevState };

      // Désélectionner certains packs si nécessaire
      if (
        (id === 'anglais-debutant + intermediaire' || id === 'compta-initiation + Les Fondamentaux') &&
        !newState[id]
      ) {
        newState['anglais-debutant, intermediaire + Avancé'] = false;
      } else if (id === 'anglais-debutant, intermediaire + Avancé' && !newState[id]) {
        newState['anglais-debutant + intermediaire'] = false;
        newState['anglais-intermediaire + Avancé'] = false;
      }

      newState[id] = !newState[id]; // Inverser l'état de la case actuellement cliquée

      // Mettre à jour le titre du pack sélectionné
      setSelectedPackTitle(newState[id] ? title : '');

      // Calculer les montants et autres valeurs en fonction des packs sélectionnés
      const { newNormalAmount, newPromoAmount, newPercentage, newEconomie, newduree,newremise, newremisep, newremiseec, newremisereste } = calculateAmounts(newState);

      setNormalAmount(newNormalAmount);
      setPromoAmount(newPromoAmount);
      setPercentage(newPercentage);
      seteconomie(newEconomie);
      setduree(newduree);
      setremise(newremise);
      setremisep(newremisep);
      setremiseec(newremiseec);
      setremisereste(newremisereste);

      return newState;
    });
  };

  // Fonction pour calculer les montants, remises et durée
  const calculateAmounts = (selectedPacks) => {
    let newNormalAmount = 99;
    let newPromoAmount = 69;
    let newPercentage = 30;
    let newEconomie = 30;
    let newduree = 15;

    let newremise = 99;
    let newremisep = null;
    let newremiseec = null;
    let newremisereste =null;

    if (selectedPacks['anglais-debutant + intermediaire']) {
      newNormalAmount += 99;
      newPromoAmount += 30;
      newPercentage = 50;
      newEconomie = 99;
      newduree = 30;

      newremise =138
      newremisep =30 
      newremiseec = 198
      newremisereste = 60
    }

    if (selectedPacks['anglais-intermediaire + Avancé'] ||
      selectedPacks['compta-initiation + Les Fondamentaux']) {
      newNormalAmount += 99;
      newPromoAmount += 30;
      newPercentage = 50;
      newEconomie = 99;
      newduree = 30;

      newremise =138
      newremisep =30 
      newremiseec = 198
      newremisereste = 60
    }

    if (selectedPacks['anglais-debutant, intermediaire + Avancé']) {
      newNormalAmount += 198;
      newPromoAmount += 70;
      newPercentage = 53;
      newEconomie = 158;
      newduree = 45;

      newremise = 148;
      newremisep = 50;
      newremiseec = 297;
      newremisereste = 149
    }

    return { newNormalAmount, newPromoAmount, newPercentage, newEconomie, newduree, newremise, newremisep, newremiseec, newremisereste };
  };

  // Fonction pour créer une commande
  const createOrder = async () => {
    const finalAmount = promoAmount < normalAmount ? promoAmount : normalAmount; // Choisir le prix promo ou normal
    if (finalAmount <= 0) {
      setError('Le montant de la commande est invalide.');
      return;
    }

   
    setIsLoading(true);
    setError(null);

    const orderData = {
      amount: timeLeft > 0 
        ? promoAmount // Si en promotion, on utilise le prix promo
        : (remise !== null ? remise : finalAmount), // Si pas en promotion, utiliser remiseec s'il est défini, sinon finalAmount
      currency: 'EUR',
      description: selectedPackTitle || singleData.titre, // Choisir entre le titre du pack sélectionné ou celui de la formation
    };

     // Ajouter un événement Facebook Pixel pour le suivi "AddToCart" juste avant la création de la commande
     if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_name: singleData.titre,
        content_category: 'Formations',
        content_ids: [singleData.id],
        value: orderData.amount,
        currency: currency,
      });
    }
    

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
        console.log('Commande créée avec succès');
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

  //console.log(JSON.stringify(createOrder)); 

  useEffect(() => {
    // Récupérer la date d'expiration depuis localStorage ou calculer une nouvelle date
    const savedEndTime = localStorage.getItem('endTime');
    
    // Si endTime n'est pas présent dans localStorage, calculez-le
    let endTime = savedEndTime ? parseInt(savedEndTime, 10) : Date.now() + 1 * 3600000; // 1 heure à partir de maintenant
  
    // Sauvegarder uniquement si endTime était absent pour éviter de le réinitialiser à chaque fois
    if (!savedEndTime) {
      localStorage.setItem('endTime', endTime); // Sauvegarder dans localStorage
    }
  
    // Fonction pour calculer le temps restant
    const calculateTimeLeft = () => {
      const now = Date.now();
      const timeRemaining = endTime - now;
      return timeRemaining > 0 ? Math.floor(timeRemaining / 1000) : 0;
    };
  
    // Mettre à jour le temps restant
    setTimeLeft(calculateTimeLeft());
  
    // Mise en place du timer pour mettre à jour le temps restant toutes les secondes
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
  
      // Arrêter le timer lorsque le temps est écoulé
      if (newTimeLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  
    // Nettoyage du timer lors du démontage du composant
    return () => clearInterval(timer);
  }, []);
  
  
  // Fonction pour formater le temps restant en hh:mm:ss
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
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
          <div className="project-info">
            <div className="project-info-top">
            <h4>
              {timeLeft > 0 ? (
                ['anglais-debutant-a1-a2', 'anglais-intermediaire-b1-b2', 'anglais-avance-c1-c2','comptabilite-initiation-01'].includes(singleData?.id) ? (
                  <span className="text-danger">Offre Spéciale !</span>
                ) : (
                  singleData?.titre
                )
              ) : (
                singleData?.titre
              )}
            </h4>
            </div>
            <div className="project-info-top-content">
              <div className="d-flex justify-content-around">
                <div className="project-info-top-content-liste">
                  <ul className="liste">
                    <li>niveau: <span>{singleData.niveau}</span></li>
                    <li>public: <span>{singleData.public}</span></li>
                    <li>duree: <span>{duree} h environ</span></li>
                    <li>
                    Prix:
                      {timeLeft > 0 ? (
                        <>
                          <span className="value text-muted text-decoration-line-through">&nbsp;{normalAmount} € </span>
                          <span className="h3 text-danger fw-bold">&nbsp;&nbsp;{promoAmount} €</span>
                        </>
                      ) : (
                        <>
                          {remiseec !== null ? (
                            <>
                              <span className="value text-muted text-decoration-line-through">
                                &nbsp;{normalAmount} €
                              </span>
                              <span className="h3 text-danger fw-bold">&nbsp;&nbsp;{remise} €</span>
                            </>
                          ) : (
                            <span className="h3 text-muted fw-bold">&nbsp;{normalAmount} €</span>
                          )}
                        </>
                      )}
                    </li>
                    <li>
                    {timeLeft > 0 ? (
                        <p className="text-secondary fs-6">
                          Dépêche-toi, offre limitée ! <span className="fs-6 text-danger font-monospace mb-4">⏳ {formatTime(timeLeft)} restantes</span>
                        </p>
                      ) : (
                        // Optionnellement, vous pouvez ajouter un message indiquant que l'offre est terminée lorsque le compte à rebours est à 00:00:00
                        <p className="text-secondary fs-6 text-muted"></p>
                      )}
                    </li>
                  </ul>
                </div>
                <div className="">
                  <div className="btn-achat-formation">
                    <Temoignage className="" />
                  </div>
                </div>
              </div>

              {/* Affichage des packs selon les formations */}
              {singleData?.id === 'anglais-debutant-a1-a2' && (
                <div className="table">
                  <table className="styled-table">
                    <thead>
                      <tr>
                        <th className="text-center">
                          Payez moins avec nos Packs Exclusifs ! <br />
                          {timeLeft > 0 ? (
                            <span className="h6 text-danger fw-bold">
                              {percentage}% DE REMISE ! VOUS ÉCONOMISEZ {economie} €
                            </span>
                          ) : 
                          <>
                          {remisep !== null && (
                            <span className="h6 text-danger fw-bold">
                              {remisep}% DE REMISE ! VOUS ÉCONOMISEZ {remisereste} €
                            </span>
                          )}
                          </>
                        }
                        </th>
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
                                onChange={() => handleCheckboxChange(id, `Pack ${id.replace('-', ' ')}`)}
                              />
                              En choisissant le Pack {id.replace('-', ' ')}
                            </label>
                            {/* Bonus text only for 'anglais-debutant, intermediaire + Avancé' */}
                            {id === 'anglais-debutant, intermediaire + Avancé' && (
                              <span className="text-danger text-center fs-6 mb-1 mt-1 ms-3"><br/>
                              {timeLeft > 0 ? (
                                <span>
                                  Bonus : Inscrivez-vous aujourd'hui et recevez un guide gratuit des 100 phrases essentielles en anglais!
                                </span>
                              ) : null}

                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Affichage des packs selon les formations */}
              {singleData?.id === 'anglais-intermediaire-b1-b2' && (
                <div className="table">
                  <table className="styled-table">
                    <thead>
                      <tr>
                      <th className="text-center">
                          Payez moins avec nos Packs Exclusifs ! <br />
                          {timeLeft > 0 ? (
                            <span className="h6 text-danger fw-bold">
                              {percentage} % DE REMISE ! VOUS ÉCONOMISEZ {economie} €
                            </span>
                          ) : 
                          <>
                          {remisep !== null && (
                            <span className="h6 text-danger fw-bold">
                              {remisep} % DE REMISE ! VOUS ÉCONOMISEZ {remisereste} €
                            </span>
                          )}
                          </>
                        }
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {['anglais-intermediaire + Avancé'].map((id) => (
                        <tr key={id}>
                          <td>
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={selectedPacks[id]}
                                onChange={() => handleCheckboxChange(id, `Pack ${id.replace('-', ' ')}`)}
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

            {/* Affichage des packs pour la formation Comptabilité (si promo encore active) */}
            {singleData?.id === 'comptabilite-initiation-01' && (
              <div className="table">
                <table className="styled-table">
                  <thead>
                    <tr>
                    <th className="text-center">
                          Payez moins avec nos Packs Exclusifs ! <br />
                          {timeLeft > 0 ? (
                            <span className="h6 text-danger fw-bold">
                              {percentage} % DE REMISE ! VOUS ÉCONOMISEZ {economie} €
                            </span>
                          ) : 
                          <>
                          {remisep !== null && (
                            <span className="h6 text-danger fw-bold">
                              {remisep} % DE REMISE ! VOUS ÉCONOMISEZ {remisereste} €
                            </span>
                          )}
                          </>
                        }
                        </th>
                    </tr>
                  </thead>
                  <tbody>
                    {['compta-initiation + Les Fondamentaux'].map((id) => (
                      <tr key={id}>
                        <td>
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              checked={selectedPacks[id]}
                              onChange={() =>
                                handleCheckboxChange(id, `Pack ${id.replace('-', ' ')}`)}
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
              {error && <li className="text-danger">{error}</li>}
            </div>
          </div>

          <div className="project-info mt-20">
            <div className="project-info-top">
              <h4>Ce que vous allez maîtriser :</h4>
            </div>
            <ul className="p-5">
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
