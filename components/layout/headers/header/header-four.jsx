"use client";
import Link from 'next/link';
import MainMenu from '../header-menu';
import { useEffect, useState } from 'react';
import logo1 from "../../../../public/assets/img/logo-1.png";
import logo2 from "../../../../public/assets/img/logo-2.png";
import MobileMenuPopup from '../mobile-menu/menu-area';
import Search from '../search';

const HeaderFour = ({variant}) => {
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [search, setSearch] = useState(false);
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
        <div className="top__bar four">
            <div className="custom__container">
                <div className="row">
                    <div className="col-xl-7 col-md-7">
                        <div className="top__bar-left">
                            <span><i className="fas fa-clock"></i>Working Hours : 10AM - 08PM</span>
                            <Link href="mailto:info@example.com"><i className="fas fa-envelope"></i>info@example.com</Link>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-5">
                        <div className="top__bar-right">
                            <Link href="#">Browse Our Success Stories</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`header__area ${ variant ? variant : "" } header__sticky four ${isSticky ? "header__sticky-sticky-menu" : ""}`}>
        <div className="custom__container">
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
							<Link className="btn-two" href="/request-quote">Request A Quote</Link>
						</div>
                        <div className="header__area-menubar-right-box-search">
							<div className="search">	
								<span className="header__area-menubar-right-box-search-icon open" onClick={() => setSearch(true)}>
                                    <i className="flaticon-loupe"></i>
                                </span>
							</div>
						</div>
                        <div className="header__area-menubar-right-responsive-menu menu__bar">
                            <i className="flaticon-menu-1" onClick={() => setMenuSidebar(true)}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <MobileMenuPopup isOpen={menuSidebar} setIsOpen={setMenuSidebar} popupLogo={logo2} />
        <Search isOpen={search} setIsOpen={setSearch} />
        </>
    );
};

export default HeaderFour;