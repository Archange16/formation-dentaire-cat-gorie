"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import PortfolioDetailsMain from "./portfolio-details";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import FooterThree from "@/components/layout/footers/footer-three";

const PortfolioDetails = ({singleData}) => {
    return (
        <>
            <SEO pageTitle={singleData?.titre} />
            <HeaderOne />
            <BreadCrumb title={singleData?.titre} innerTitle={singleData?.titre} />
            <PortfolioDetailsMain singleData={singleData} />
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default PortfolioDetails;