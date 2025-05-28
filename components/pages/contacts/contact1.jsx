"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterThree from "@/components/layout/footers/footer-three";
import Tab1 from "../home/tab1/tab1"

const ContactUs = () => {
    return (
        <>
            <SEO pageTitle="Avec-ou-sans-accompagnement" />        
            <HeaderOne />
            <Tab1 />
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default ContactUs;