import { useEffect, useState } from 'react';
import MainMenu from '../header-menu';
import Search from '../search';
import SideBar from '../offcanvas';
import logo1 from "../../../../public/assets/img/logo-1.png";
import logo2 from "../../../../public/assets/img/logo-2.png";
import formulaire from "../../../../public/assets/img/icon/contact-mail.png";
import MobileMenuPopup from '../mobile-menu/menu-area';
import Link from 'next/link';
import SideBarContact from '../offcanvas_cont';

const HeaderOne = ({variant}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarOpen1, setSidebarOpen1] = useState(false);
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [search, setSearch] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        // Facebook Pixel Tracking Code (If not already added globally)
        if (typeof window !== "undefined" && window.fbq) {
            window.fbq('track', 'PageView'); // Envoi un événement PageView chaque fois que la page est vue
        }

        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    // Fonction pour envoyer l'événement "Contact" lorsque l'utilisateur clique sur le bouton "Nous Contacter"
    const handleContactClick = () => {
        if (typeof window !== "undefined" && window.fbq) {
            window.fbq('track', 'Lead'); // Envoi un événement "Lead" pour le suivi du contact
        }
        setSidebarOpen1(true); // Ouvre la sidebar de contact
    };

    // Fonction pour envoyer un événement d'ajout au panier (par exemple, lorsqu'un produit est ajouté)
    const handleAddToCart = () => {
        if (typeof window !== "undefined" && window.fbq) {
            window.fbq('track', 'AddToCart', {
                content_name: "Nom du produit",
                content_category: "Catégorie du produit",
                content_ids: ["ID_du_produit"],
                value: 100.0,
                currency: "USD",
            });
        }
    };

    return (
        <>
            <div className={`header__area ${ variant ? variant : "" } header__sticky ${isSticky ? "header__sticky-sticky-menu" : ""}`}>
                <div className="container1">
                    <div className="header__area-menubar">
                        <div className="header__area-menubar-left">
                            <div className="header__area-menubar-left-logo">
                                <Link href="https://formations-dentaire.fr"><img src={logo1.src} alt="logo" /></Link>
                            </div>
                        </div>
                        <div className="header__area-menubar-center">
                            <div className="header__area-menubar-center-menu">
                                <MainMenu />
                            </div>
                        </div>
                        <div className="header__area-menubar-right">
                            <div className="header__area-menubar-right-box">
                            {/*  <div className="header__area-menubar-right-box-sidebar">
                                    <div className="header__area-menubar-right-box-sidebar-popup-icon" onClick={() => setSidebarOpen(true)}>
                                        <span className="bar-1"></span>
                                        <span className="bar-2"></span>
                                        <span className="bar-3"></span>
                                    </div>
                                </div> */}
                                <div className="header__area-menubar-right-box-btn">
                                    <button className="btn-one" ><Link href='https://formations-dentaire.fr/product/formation-qualite-cabinet-dentaire/'>Je m'inscris maintenant !</Link><i className="fas fa-arrow-right"></i></button>
                                </div>
                                <div className="header__area-menubar-right-box-btn1">
                                    <i className=""  target="_blank"  onClick={handleContactClick}><img src={formulaire.src} alt="logo"/></i>
                                </div>
                                <div className="header__area-menubar-right-responsive-menu menu__bar">
                                    <i className="flaticon-menu-1" onClick={() => setMenuSidebar(true)}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            <SideBarContact isOpen={sidebarOpen1} setIsOpen={setSidebarOpen1} />
            <MobileMenuPopup isOpen={menuSidebar} setIsOpen={setMenuSidebar} popupLogo={logo2} />
            <Search isOpen={search} setIsOpen={setSearch} />
        </>
    );
};

export default HeaderOne;
