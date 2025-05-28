import Link from 'next/link';
import logo2 from "../../../public/assets/img/logo-2.png";
import Social from '@/components/data/social';
import React, { useState, useEffect, useRef } from 'react';

const SideBar = ({ isOpen, setIsOpen }) => {
    // Référence au sidebar pour détecter les clics en dehors
    const sidebarRef = useRef(null);

    // Utilisation de useEffect pour détecter un clic en dehors du sidebar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false); // Fermer le sidebar si on clique en dehors
            }
        };

        // Ajouter l'écouteur d'événements lors du montage
        document.addEventListener('mousedown', handleClickOutside);

        // Nettoyage de l'écouteur d'événements lors du démontage
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsOpen]);

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            setMessage('Veuillez entrer un email valide.');
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            // Appel à l'API route Next.js pour envoyer l'email à Brevo
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Votre email a été envoyé avec succès !');
                setEmail('');

                // Facebook Pixel : Suivi de l'événement "Subscribe" (Démarrage de l'abonnement à la newsletter)
                if (typeof window !== "undefined" && window.fbq) {
                    window.fbq('track', 'Subscribe', {
                        content_name: 'Newsletter',
                        content_category: 'Abonnement',
                        value: 0.0,
                        currency: 'EUR',
                        email: email, // Optionnel: Envoi de l'email de l'utilisateur pour un suivi plus détaillé
                    });
                }

                setTimeout(() => {
                    setMessage('');
                }, 3000);
            } else {
                setMessage(`Erreur: ${data.message}`);
                setTimeout(() => {
                    setMessage('');
                }, 3000);
            }
        } catch (error) {
            setMessage('Une erreur est survenue. Veuillez réessayer.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`} ref={sidebarRef}>
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}>
                        <i className="fal fa-times"></i>
                    </div>
                    <div className="header__area-menubar-right-sidebar-popup-logo ">
                        <Link href='/'>
                            <img className='logo_one' src={logo2.src} alt="logo" />
                        </Link>
                    </div>    
                <div className="header__area-menubar-right-sidebar-popup-contact">
                    <h4 className="text-center mb-5">Lancez votre projet pro avec style ! 🚀 </h4>
                    <h5 className="text-start mb-4 pl-15">Nos Liens utiles</h5>
                    <div className="mb-5">
                        <div className="col-xl-12 col-md-6 col-sm-5 sm-mb-30">
                            <div className="footer__three-widget border-one">
                                <div className="footer__three-widget-solution ">
                                    <ul>
                                        <li><Link href={`/business`} ><i className="far fa-chevron-double-right"></i>Création d’Entreprise</Link></li>
                                        <li><Link href={`/services`} ><i className="far fa-chevron-double-right"></i>Voir le catalogue complet</Link></li>
                                        <li><Link href={`/blog`} ><i className="far fa-chevron-double-right"></i>Blog</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 className="text-start mb-4 pl-15">Notre Newsletter</h5>
                <div className="header__area-menubar-right-sidebar-popup-social social__icon">
                        <div className="footer__three-widget-about mb-30 pl-15">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Votre e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                 <button type="submit" disabled={loading}>
                                    {loading ? 'Envoi...' : <i className="fas fa-paper-plane"></i>}
                                </button>
                            </form>
                            {message && (
                                <div style={{ color: message.includes('succès') ? 'white' : 'red' }}>
                                    {message}
                                </div>
                            )}
                        </div>
                        <h5 className="text-start mb-4 pl-15">Restez Connecté</h5>
                        <div className="sidebar__reseau pl-15">
                            <Social />
                        </div>
                </div>
            </div>
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;
