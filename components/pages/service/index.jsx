"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import ServicesMain from "./services";
import WorkArea from "../home/work";
import Testimonial from "../home/testimonial";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterThree from "@/components/layout/footers/footer-three";

const ServicePage = () => {
    return (
        <>
            <SEO pageTitle="Nos Formations" />
            <HeaderOne />
            <BreadCrumb title="Nos Formations" innerTitle="Nos Formations" />
            <ServicesMain />
            <WorkArea />
            <Testimonial />
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default ServicePage;