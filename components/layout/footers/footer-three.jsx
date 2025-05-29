import Link from "next/link";
import logo from "../../../public/assets/img/logo-2.png";
import Social from "@/components/data/social";
import { useState } from 'react';

const FooterThree = () => {
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
        <div className="footer__three">
            <div className="container pt-80 pb-80">
               {/*  <div className="row gy-4 justify-content-between"> */}
                
                    <div className="col-xl-12 col-md-6 col-sm-5 sm-mb-30">
                        <div className="footer__three-widget border-one">
                            <div className="footer__three-widget-solution">
                                <ul>
									<li><Link href="https://formations-dentaire.fr">Accueil</Link></li>
									<li><Link href="https://formations-dentaire.fr/#Solutions">Solutions</Link></li>
									<li><Link href="https://formations-dentaire.fr/#formation">Formation</Link></li>
									<li><Link href="/categories">Categories</Link></li>
									<li><Link href="https://formations-dentaire.fr/#Temoignage">Témoignage</Link></li>
									<li><Link href="testimonial"></Link></li>
									<li><Link href="https://formations-dentaire.fr/#Contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                {/* </div> */}
            </div>
            <div className="copyright__one two">
                <div className="container">
                    <div className="row justify-content-between copyright__one-container-area">
                        <div className="col-xl-5 col-lg-6"> 
                            <div className="copyright__one-left">
                                <p>Copyright © Kevin 
                                    <Link href="https://formations-dentaire.fr" target="_blank">Kelaj Formation Dentaire.</Link>All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="copyright__one-right">
                                <Link href="https://meet.brevo.com/kevin-a2ta2l/presentation" target="_blank">POLITIQUE DE COOKIES</Link> |
                                 <Link href="https://meet.brevo.com/kevin-a2ta2l/presentation" target="_blank"> Conditions générales de vente</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default FooterThree;