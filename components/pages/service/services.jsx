import Link from 'next/link';
import servicesData from '@/components/data/formationsPrincipales';
import image1 from "@/public/assets/img/v1/CREATION-ENTREPRISE.jpg"


const ServicesMain = () => {
    // Vérification et regroupement des services par catégorie
    const groupedServices = servicesData ? servicesData.reduce((acc, service) => {
        const { categorie } = service;
        if (!acc[categorie]) {
            acc[categorie] = [];
        }
        acc[categorie].push(service);
        return acc;
    }, {}) : {};  // Si servicesData est null ou undefined, utiliser un objet vide

    return (
        <>
            <div className="services__two section-padding">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-xl-12 col-lg-4 col-md-6">
                            <div className="services__two-single-service">
                                <div className="services__two-single-service-icon">
                                    {/* Vous pouvez ajouter une icône ou un contenu ici */}
                                </div>
                                <div className="services__two-single-service-image">
                                    <img className="img__full" src={image1?.src} alt="Création d'entreprise" />
                                </div>
                                <div className="services__two-single-service-content formation-solution">
                                    <h4>Créez votre entreprise et lancez votre activité avec succès ! 🚀</h4> 
                                    <Link href={`/business`} className="btn-one mb-20 ml-20">
                                        Voir plus
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Itérer sur les catégories */}
                        {Object.keys(groupedServices).length > 0 ? (
                            Object.keys(groupedServices).map((category, index) => (
                                <div key={index} className="col-xl-12">
                                    <h3 className="category-title mb-3">{category.replace(/_/g, ' ').toUpperCase()}</h3> {/* Titre de la catégorie */}
                                    <div className="row gy-4">
                                        {groupedServices[category].map((data, id) => (
                                            <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
                                                <div className="services__two-single-service">
                                                    <div className="services__two-single-service-icon">
                                                        {data.icon} {/* Afficher une icône si présente */}
                                                    </div>
                                                    <div className="services__two-single-service-image">
                                                        <img className="img__full" src={data.image?.src} alt={data.titre} />
                                                    </div>
                                                    <div className="services__two-single-service-content formation-solution">
                                                        <h4>{data.titre}</h4> 
                                                        <Link href={`/services/${data.id}`} className="btn-one mb-20 ml-20">
                                                            Voir plus
                                                        </Link>
                                                    </div>
                                                    { console.log(data.id)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-xl-12">
                                <p>Aucune formation disponible pour le moment.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesMain;