import brand1 from "../../../public/assets/img/brand/brand-1.png";
import brand2 from "../../../public/assets/img/brand/brand-2.png";
import brand3 from "../../../public/assets/img/brand/brand-3.png";
import brand4 from "../../../public/assets/img/brand/brand-4.png";
import brand5 from "../../../public/assets/img/brand/brand-5.png";
import brand6 from "../../../public/assets/img/brand/brand-6.png";
import brand7 from "../../../public/assets/img/brand/brand-7.png";
import about1 from "../../../public/assets/img/about/about-1.png";
import about2 from "../../../public/assets/img/about/about-2.png";
import logo from "../../../public/assets/img/about/ikigai_white.png";
import Link from "next/link";
import { useEffect } from 'react';

const About = () => {
    

    return (
        <>
        <div className="about__one section-padding">
            <div className="container">
                <div className="row align-items-center flex-wrap-reverse gy-4">
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="about__one-content">
                            <span className="subtitle-one">Qui sommes-nous</span>
                            <h2>Faites passer vos ambitions au niveau supérieur 🚀
                            </h2>
                            <p>Avec notre méthode qui a fait ses preuves, on transforme vos idées en succès concrets ! Que ce soit
                                pour donner vie à un projet ou aligner votre carrière avec vos valeurs, on vous accompagne à
                                chaque étape. Ensemble, créons des réussites qui ont du sens et un vrai impact.</p>
                            <div className="about__one-content-service">
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Des objectifs clairs et alignés 😎</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Des projets qui marquent 💡</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Une transformation durable 🌱</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Un développement personnel boosté ✨</span>
                                </div>
                            </div>
                            {/* <Link href="/contact" className="btn-one">En savoir plus<i className="fas fa-arrow-right"></i></Link> */}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5">
                        <div className="about__one-image">
                            <div className="experience-bar animate-y-axis-slider">
                                <img src={logo.src} alt="image" className="" />
                                <div className="experience-bar-right">
                                    <div className="experience-bar-counter">
                                        <h4 className="counter"></h4>
                                        <span></span>
                                    </div>
                                    <span>Accompagnement</span>
                                </div>
                            </div>
                            <div className="about__one-image-wrapper">
                                <img src={about2.src} alt="image" className="image-1" />
                                <img src={about1.src} alt="image" className="image-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;