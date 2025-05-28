"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import FourColumns from "./four-columns";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import SwitchTab from "../../common/dark-light";
import FooterThree from "@/components/layout/footers/footer-three";

const PortfolioFourColumns = () => {
    return (
        <>
            <SEO pageTitle='Portfolio Grid - 04 Columns' />
            <SwitchTab />
            <HeaderOne />
            <BreadCrumb title="04 Columns" innerTitle="Portfolio Grid" />
            <FourColumns />        
            <FooterThree />     
            <ScrollToTop />     
        </>
    );
};

export default PortfolioFourColumns;