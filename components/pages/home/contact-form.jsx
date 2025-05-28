import React from 'react';
import Count from '../../common/count';
import bgImage from "../../../../public/assets/img/contact/contact-bg.png";
import image1 from "../../../../public/assets/img/contact/contact.png";
import image2 from "../../../../public/assets/img/contact/contact-2.jpg";
import FormAreaacc from '../../contacts/formacc';

const ContactForm = () => {
    return (
        <>
            <div className="contact__one section-padding" style={{backgroundImage: `url(${bgImage.src})`}}>
                <div className="container">
                    <div className="row align-items-center gy-4 justify-content-between">
                        <div className="col-xl-6">
                            <div className="contact__one-title">
                                <span className="subtitle-one">Contactez-nous</span>
                                <h2>Planifier un Entretien</h2>
                            </div>
                            <FormAreaacc />
                        </div>
                        <div className="col-xl-5">
                            <div className="contact__one-right">
                                <div className="row gy-4 align-items-center">
                                    <div className="col-xl-8 col-lg-4 col-md-6 col-sm-6">
                                        <img src={image1.src} alt="image" />
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="contact__one-counter-img">
                                            <img src={image2.src} alt="image" />
                                        </div>
                                        <div className="contact__one-counter">
                                            <div className="counter-only">
                                                <h3 className="counter"><Count number={25}/></h3>
                                                <h3>+</h3>
                                            </div>
                                            <span>années d'expériences</span>
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

export default ContactForm;