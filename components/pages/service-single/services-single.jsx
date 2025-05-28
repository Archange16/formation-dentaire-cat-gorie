import React from 'react';
import Link from 'next/link';
import dataFormation from '@/components/data/formationsPrincipales';
import { useParams } from 'next/navigation';
import useFacebookPixel from '@/components/hooks/useFacebookPixel';  // Si tu as un hook personnalisé pour gérer le pixel

const CategorieSingleMain = () => {
    // Récupération des paramètres d'URL
    const params = useParams();
    const categoryId = params.id; // L'ID de la catégorie est passé dans l'URL

    // Filtrer les formations par catégorie
    const formationsInCategory = dataFormation.filter((formation) => formation.categorie === categoryId);

    // Fonction pour envoyer l'événement ViewContent à Facebook Pixel
    const handleFormationClick = (formation) => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'ViewContent', {
                content_name: formation.titre,
                content_category: 'Formations',
                content_ids: [formation.id],
                value: 0.0, // Tu peux définir une valeur si nécessaire
                currency: 'EUR',
            });
        }
    };

    return (
        <>
            <div className="services__two section-padding">
                <div className="container">
                    <div className="row gy-4">
                        {formationsInCategory.length > 0 ? (
                            formationsInCategory.map((formation, index) => (
                                <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="services__two-single-service">
                                        <div className="services__two-single-service-icon">
                                            {/* Affichage de l'icône si elle est présente */}
                                            {formation.icon}
                                        </div>
                                        <div className="services__two-single-service-image">
                                            <img className="img__full" src={formation.image?.src} alt={formation.titre} />
                                        </div>
                                        <div className="services__two-single-service-content formation-solution">
                                            <h4>{formation.titre}</h4> {/* Titre de la formation */}
                                            <Link 
                                                href={formation.lien ? formation.lien : `/services/${formation.id}`} 
                                                className="btn-one mb-20 ml-20"
                                                onClick={() => handleFormationClick(formation)} // Appel à la fonction quand l'utilisateur clique
                                            >
                                                Voir plus
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-xl-12">
                                <p>Aucune formation disponible dans cette catégorie.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategorieSingleMain;
