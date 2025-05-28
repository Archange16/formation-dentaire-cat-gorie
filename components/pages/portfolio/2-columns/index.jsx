"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import TwoColumns from "./two-columns";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import FooterThree from "@/components/layout/footers/footer-three";

const PortfolioTowColumns = () => {
    return (
        <>
            <SEO pageTitle='Portfolio' />
            <HeaderOne />
            <BreadCrumb title="Portfolio" innerTitle="Portfolio" />
            <TwoColumns />        
            <FooterThree />    
            <ScrollToTop />      
        </>
    );
};

export default PortfolioTowColumns;