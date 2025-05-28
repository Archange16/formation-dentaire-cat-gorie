import image from "../../../public/assets/img/service/services.png";

const Features = () => {
    return (
        <>
        <div className="services__one section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-7 col-lg-7 col-md-9 services__one-title">
                        <span className="subtitle-one">Services & Formations</span>
                        <h2>Des solutions concrètes pour avancer 🚀</h2>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-3">
                        <div className="row">
                            <div className="col-xl-12 col-md-6">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-global-network"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>Accompagnement à la création d’activité</h4>
                                        <p>Coaching personnalisé et formations pour lancer votre entreprise comme un pro.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-6 xl-mb-30">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-mobile-phone-1"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>Réorientation professionnelle</h4>
                                        <p>On vous aide à trouver votre nouvelle voie et les compétences pour briller.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="services-image-wrapper">
                            <img src={image.src} alt="image" />
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="row">
                            <div className="col-xl-12 col-md-6">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-idea"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>Formation continue et développement de compétences</h4>
                                        <p>Des cours pratiques pour booster vos skills et réussir.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-6">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-it"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>Solutions de financement accessibles</h4>
                                        <p>On vous guide vers des aides et financements pour vous simplifier la vie.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Features;