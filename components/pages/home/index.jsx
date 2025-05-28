"use client";
import SEO from "@/components/data/seo";
import ScrollToTop from "../common/scroll/scroll-to-top";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BannerOne from "./banner";
import About from "./about";
import ChooseUs from "./choose-us";
import Features from "./features";
import Portfolio from "./portfolio";
import Blog from "./blog";
import Testimonial from "./testimonial";
import Video from "./video";
import Tab from "./tab/tab";
import FooterThree from "@/components/layout/footers/footer-three";

import ScrollAnimationBackground from "@/components/ScrollAnimationBackground";
import FormationCreation from "./formation-creation";
import LienReseau from "./liens-reseaux";

const HomeOne = () => {
    return (
        <div>
            <div>
                <ScrollAnimationBackground />
            </div>
            <div id="contentAccueil">
            <SEO pageTitle='Formations' />
            <HeaderOne />
            <BannerOne />
            <LienReseau />
            <FormationCreation />
            <ChooseUs />
            <Portfolio />
            <Testimonial />
            <Blog />
            <Video />
            <FooterThree />
            <ScrollToTop />
            </div>
        </div>
    );
};

export default HomeOne;