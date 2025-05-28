"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import SideBarContact from '../offcanvas_cont';

const ResponsiveMenu = () => {
    const [sidebarOpen1, setSidebarOpen1] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
    activeSubMenu = (value) => value == activeMenu ? { display: "block" } : { display: "none" };

    const [activeMenus, setActiveMenus] = useState(null);
    const actives = (value) => setActiveMenus(value === activeMenus ? null : value),
    activeIcons = (value) => (activeMenus == value ? "mean-clicked" : ""),
    activeSubMenus = (value) => value == activeMenus ? { display: "block" } : { display: "none" };
  return (
        <>
            <ul>
                <li className='menu-item-has-children'>
                    <Link href='/'>Accueil</Link>
                </li>  
                <li className='menu-item-has-children'>
                    <Link href='/about'>Solutions</Link>
                </li>
                <li className='menu-item-has-children'><Link href='/categories'>Formation</Link>
                </li>
                <li className='menu-item-has-children'><Link href='/'>Témoignage</Link>
                </li>
            </ul>  
            <SideBarContact isOpen={sidebarOpen1} setIsOpen={setSidebarOpen1} />
        </>
    );
};

export default ResponsiveMenu;