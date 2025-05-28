import formationData from "@/components/data/temoignages";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import Link from "next/link";

console.log(formationData);

const Temoignage = () => {
    const slideControl = {
		spaceBetween: 35,
		slidesPerView: 1,
		centeredSlides: true,
        speed: 5000,
        loop: true,
        autoplay: {
            delay: 1000,
            reverseDirection: false,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.swiper-button-prev',  // Sélecteur pour la flèche précédente
            nextEl: '.swiper-button-next',  // Sélecteur pour la flèche suivante
        },
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			575: {
				slidesPerView: 1
			},
			992: {
				slidesPerView: 1
			},
			1200: {
				slidesPerView: 1
			},
		}
    };

    return (
        <div className="portfolio__avis">
            <div className="container custom__container">
                <Swiper modules={[Navigation, EffectFade, Autoplay]} {...slideControl} className="">
                    {formationData?.map((data, id) => (
                        <SwiperSlide key={id} className="portfolio__avis-single-portfolio single-portfolio">
                            <img className="" src={data.image.src} alt="image" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Flèches de navigation */}
            </div>
        </div>
    );
};

export default Temoignage;
