import brand1 from "../../../public/assets/img/brand/brand-1.png";
import brand2 from "../../../public/assets/img/brand/brand-2.png";
import brand3 from "../../../public/assets/img/brand/brand-3.png";
import brand4 from "../../../public/assets/img/brand/brand-4.png";
import brand5 from "../../../public/assets/img/brand/brand-5.png";
import brand6 from "../../../public/assets/img/brand/brand-6.png";
import brand7 from "../../../public/assets/img/brand/brand-7.png";
import logo from "../../../public/assets/img/about/ikigai_white.png";
import Link from "next/link";
import { useEffect } from 'react';

const LienReseau = () => {
    useEffect(() => {
        // Sélectionner tous les conteneurs de défilement (les deux listes)
        const scrollContainers = document.querySelectorAll('.scroll');
        
        // Sélectionner tous les éléments dans les listes (de la première et de la seconde liste)
        const items = document.querySelectorAll('.brand__area-item');
        
        // Fonction pour mettre en pause l'animation
        const handleMouseEnter = () => {
          scrollContainers.forEach(container => {
            container.style.animationPlayState = 'paused'; // Met en pause l'animation sur tous les conteneurs
          });
        };
    
        // Fonction pour reprendre l'animation
        const handleMouseLeave = () => {
          scrollContainers.forEach(container => {
            container.style.animationPlayState = 'running'; // Reprend l'animation sur tous les conteneurs
          });
        };
    
        // Ajouter les événements de survol à tous les éléments
        items.forEach(item => {
          item.addEventListener('mouseenter', handleMouseEnter);
          item.addEventListener('mouseleave', handleMouseLeave);
        });
    
        return () => {
          // Nettoyage des événements
          items.forEach(item => {
            item.removeEventListener('mouseenter', handleMouseEnter);
            item.removeEventListener('mouseleave', handleMouseLeave);
          });
        };
      }, []);

    return (
        <>
        <div className="brand__area pt-50 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="text__slider">
                            <div className="mb-20 text-center">
                                <h3>Suivez-nous sur les réseaux sociaux!</h3>
                            </div>
                            <div className="text-slide">
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <a href="https://www.linkedin.com/in/kevin-jean" target="_blank" rel="noopener noreferrer">
                                            <img src={brand1.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://wa.me/33756949491" target="_blank" rel="noopener noreferrer">
                                            <img src={brand2.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.instagram.com/kevin_a2ta2l" target="_blank" rel="noopener noreferrer">
                                            <img src={brand3.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://web.facebook.com/profile.php?id=61563587830934" target="_blank" rel="noopener noreferrer">
                                            <img src={brand4.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.youtube.com/@kevin-A2ta2l" target="_blank" rel="noopener noreferrer">
                                            <img src={brand5.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://x.com/Kevin_A2ta2l" target="_blank" rel="noopener noreferrer">
                                            <img src={brand6.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.tiktok.com/@kevin_attallah" target="_blank" rel="noopener noreferrer">
                                            <img src={brand7.src} alt="image" />
                                        </a>
                                    </div>
                                </div>
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <a href="https://www.linkedin.com/in/kevin-jean" target="_blank" rel="noopener noreferrer">
                                            <img src={brand1.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://wa.me/33756949491" target="_blank" rel="noopener noreferrer">
                                            <img src={brand2.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.instagram.com/kevin_a2ta2l" target="_blank" rel="noopener noreferrer">
                                            <img src={brand3.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://web.facebook.com/profile.php?id=61563587830934" target="_blank" rel="noopener noreferrer">
                                            <img src={brand4.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.youtube.com/@kevin-A2ta2l" target="_blank" rel="noopener noreferrer">
                                            <img src={brand5.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://x.com/Kevin_A2ta2l" target="_blank" rel="noopener noreferrer">
                                            <img src={brand6.src} alt="image" />
                                        </a>
                                    </div>
                                    <div className="brand__area-item">
                                        <a href="https://www.tiktok.com/@kevin_attallah" target="_blank" rel="noopener noreferrer">
                                            <img src={brand7.src} alt="image" />
                                        </a>
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

export default LienReseau;