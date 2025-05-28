import React from 'react';
import TabContent from './tab-content';
import Link from 'next/link';

const Tab = () => {
    return (
        <>
            <div className="skill__two section-padding">
                <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-9 col-lg-9 col-md-12 services__one-title">
                        <span className="subtitle-one">Je veux me former</span>
                        <h2>Je veux me former🧑‍💼</h2>
                    </div>
                </div>-
                    <ul className="row nav mb-5 gy-4 justify-content-center">
                        <li className="nav-item col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <Link href="https://www.kevin-attallah.com/formation-creation-entreprise" target="_blank">
                                <div className="skill__two-tab nav-link active " data-bs-toggle="pill" role="button">
                                    <span>J'ai besoin d'un accompagnement</span>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <Link href="/services">
                                <div className="skill__two-tab nav-link " data-bs-toggle="pill" data-bs-target="#topic-2" role="button">
                                    <span>Je suis autonome, je gère mon ikigaï</span>
                                </div> 
                            </Link>                       
                        </li>
                    </ul>
                    <div className="skill__two-tab-details ">
                        <div className="row align-items-center flex-wrap-reverse gy-4 tab-pane fade show active" role="tabpanel" id="topic-1" aria-labelledby="topic-1-tab">
                            <div className="col-xl-6 col-lg-6 col-md-9 p-4 formation_rigth">
                                <TabContent 
                                title={`Faites financer votre avenir sans dépenser 💰 !`}
                                description="Prenez rendez-vous avec un conseiller et découvrez comment utiliser votre CPF pour réaliser vos ambitions, sans reste à charge ✨ ."
                                description1="Et aussi bénéficier d’une aide pour choisir votre formation"
                                servicesLeft={[
                                  "Flexibilité totale",
                                  "Conseils d’experts"
                                ]}
                                servicesRight={[
                                  "Prise en charge rapide",
                                  "Service personnalisé"
                                ]}
                                buttonText="Prendre RDV"
                                buttonLink="https://www.kevin-attallah.com/formation-creation-entreprise"
                                />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-9 p-4 ormation_left">
                                        <TabContent 
                                        title="Vous savez quelle formation suivre !"
                                        description="Alors prenez les choses en main 💪🏼 ! Financez votre
                                                    formation en toute liberté et commencez à construire votre succès dès maintenant. Vous avez le
                                                    contrôle, on vous donne les clés 🚀 ."
                                        servicesLeft={[
                                        "Accès immédiat",
                                        "Offres exclusives"
                                        ]}
                                        servicesRight={[
                                        "Sécurisé et rapide",
                                        "Accès personnalisé"
                                        ]}
                                        buttonText="Commencez"
                                        buttonLink="/services"
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default Tab;