"use client"

import SEO from "@/components/data/seo";
import PaymentPage from "./payment-page";
import BreadCrumb from "../common/breadcrumb";

const { default: HeaderOne } = require("@/components/layout/headers/header/header-one");
const { default: ScrollToTop } = require("../common/scroll/scroll-to-top");
const { default: FooterThree } = require("@/components/layout/footers/footer-three");

const PaiementIndex = ({TokenOrder}) => {
    return (
        <>
            <SEO pageTitle="Page de paiement" />
            <HeaderOne />
            <BreadCrumb title="Paiement" innerTitle="Paiment" />
            <PaymentPage />
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default PaiementIndex;