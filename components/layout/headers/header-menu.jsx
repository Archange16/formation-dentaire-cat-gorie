import Link from 'next/link';

const MainMenu = () => {

    // Fonction pour envoyer un événement Pixel lors d'un clic
    const handleMenuClick = (pageName) => {
        if (typeof window !== "undefined" && window.fbq) {
            // On envoie un événement 'PageView' pour chaque lien cliqué
            window.fbq('track', 'PageView', {
                page_name: pageName,  // Le nom de la page visitée
            });
        }
    };

    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="https://formations-dentaire.fr" onClick={() => handleMenuClick('Accueil')}>Accueil</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="https://formations-dentaire.fr/#Solutions" onClick={() => handleMenuClick('À propos')}>Solutions</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="https://formations-dentaire.fr/#formation" onClick={() => handleMenuClick('Formations')}>Formation</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="/categories" onClick={() => handleMenuClick('Formations')}>Categories</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="https://formations-dentaire.fr/#Temoignage" onClick={() => handleMenuClick('Blog')}>Témoignage</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="https://formations-dentaire.fr/#Contact" onClick={() => handleMenuClick('Blog')}>Contact</Link>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;
