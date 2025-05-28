"use client";
import Link from 'next/link';
import MainMenu from '../header-menu';
import { useEffect, useState } from 'react';
import logo1 from "../../../../public/assets/img/logo-1.png";
import logo2 from "../../../../public/assets/img/logo-2.png";
import MobileMenuPopup from '../mobile-menu/menu-area';

const HeaderThree = ({variant}) => {
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        });
    }, []);
    return (
        <>
        <div className={`header__area ${ variant ? variant : "" } header__sticky three ${isSticky ? "header__sticky-sticky-menu" : ""}`}>
            <div className="container">
                <div className="header__area-menubar">
                    <div className="header__area-menubar-left">
                        <div className="header__area-menubar-left-logo">
                            <Link href="/"><img src={logo1.src} alt="logo" /></Link>
                        </div>
                    </div>
                    <div className="header__area-menubar-center">
                        <div className="header__area-menubar-center-menu">
                            <MainMenu />
                        </div>
                    </div>
                    <div className="header__area-menubar-right">
                        <div className="header__area-menubar-right-box">
                            <div className="header__area-menubar-right-box-btn">
                                <Link className="btn-one" href="/request-quote">Get Quote<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="header__area-menubar-right-responsive-menu menu__bar">
                            <i className="flaticon-menu-1" onClick={() => setMenuSidebar(true)}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MobileMenuPopup isOpen={menuSidebar} setIsOpen={setMenuSidebar} popupLogo={logo2} />
        </>
    );
};

export default HeaderThree;