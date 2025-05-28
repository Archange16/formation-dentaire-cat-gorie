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
                <div className="footer__three-top">
                    <h3>Rejoignez notre communauté sociale !</h3>
                    <div className="footer__three-top-social">
                        <Social />
                    </div>
                </div>
                <div className="row gy-4 justify-content-between">
                    <div className="col-xl-4 col-md-6 col-sm-7 xl-mb-30">
                        <div className="footer__three-widget">
                            <div className="footer__three-widget-about">
                                <Link href="/"><img src={logo.src} alt="image" /></Link>
                                <p>Lancez votre business ou projet pro avec style 🚀 ! Coaching, formations et conseils pour aligner vos ambitions, vos talents et vos valeurs. <br/> Prêt à transformer vos idées en succès ?
                                </p>
                                <h6>Inscrivez-vous à notre Newsletter</h6>
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
                                    <div style={{ color: message.includes('succès') ? 'green' : 'red' }}>
                                        {message}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-5 sm-mb-30">
                        <div className="footer__three-widget border-one">
                            <h4 className="ml-60">Nos Formations</h4>
                            <div className="footer__three-widget-solution">
                                <ul>
									<li><Link href={`/business`}><i className="far fa-chevron-double-right"></i>Création d’Entreprise</Link></li>
									<li><Link href={`/services`} ><i className="far fa-chevron-double-right"></i>Voir le catalogue complet</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-5 sm-mb-30">
                        <div className="footer__three-widget border-one">
                            <h4 className="ml-60">Ressources​</h4>
                            <div className="footer__three-widget-solution">
                                <ul>
									<li><Link href="/services"><i className="far fa-chevron-double-right"></i>Formations</Link></li>
									<li><Link href="/blog"><i className="far fa-chevron-double-right"></i>Blog</Link></li>
									<li><Link href="testimonial"></Link></li>
									<li><Link href="about"><i className="far fa-chevron-double-right"></i>A propos</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="copyright__one two">
                <div className="container">
                    <div className="row justify-content-between copyright__one-container-area">
                        <div className="col-xl-5 col-lg-6"> 
                            <div className="copyright__one-left">
                                <p>© Kevin Attallah 2025</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="copyright__one-right">
                                <Link href="https://meet.brevo.com/kevin-a2ta2l/presentation" target="_blank">Prendre RDV</Link>
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