// components/ScrollAnimationBackground.js
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const ScrollAnimationBackground = () => {
  useEffect(() => {
    // Enregistrer le plugin ScrollTrigger de GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animation de l'arrière-plan : passer de 100% à 200% de taille lentement
    gsap.to("body", {
      backgroundSize: "1200%", // On veut que l'arrière-plan atteigne 200% à la fin du défilement
      ease: "bounce.out", // Effet de rebond à la fin de l'animation
      scrollTrigger: {
        trigger: "body", // Le déclencheur est l'élément body
        start: "top top", // L'animation commence quand le haut de la page atteint le haut de la fenêtre
        end: "bottom top", // L'animation se termine lorsque le bas de la page atteint le haut de la fenêtre
        scrub: 1, // L'animation suit le défilement et prend plus de temps
        markers: false, // Ne pas afficher les marqueurs (facultatif)
      }
    });
  }, []);

  return null; // Ce composant ne rend rien, il est juste utilisé pour l'animation
};

export default ScrollAnimationBackground;
