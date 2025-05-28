"use client"
import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header/header-one';
import BreadCrumb from '../common/breadcrumb';
import RequestQuoteMain from './request-quote';
import ScrollToTop from '../common/scroll/scroll-to-top';
import FooterThree from '@/components/layout/footers/footer-three';

const RequestQuotePage = () => {
    return (
        <>
            <SEO pageTitle="Demander un devis 1" />
            <HeaderOne />
            <BreadCrumb title="Demander un devis" innerTitle="Demander un devis 1" />
            <RequestQuoteMain />
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default RequestQuotePage;