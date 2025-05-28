import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Zoom } from 'swiper/modules';
import React, { useState } from 'react';
import 'swiper/swiper-bundle.css';
import blogData from '@/components/data/blog-data';
import BlogSidebar from '../blog-sidebar/blog-sidebar';

const BlogSingleMain = ({ singleData }) => {
    const category = singleData?.title.split(' ').slice(0, 2).join(' ') + '..';

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImages, setModalImages] = useState([]);
    const [modalIndex, setModalIndex] = useState(0);

    const swiperConfig = {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        zoom: {
            maxRatio: 3, // Zoom maximum
            minRatio: 1, // Zoom minimum
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
        },
        autoplay: {
            delay: 3000, // Temps entre les transitions des slides
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2, // Afficher 2 images à la fois sur les écrans moyens
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 3, // Afficher 3 images à la fois sur les grands écrans
                spaceBetween: 20,
            },
        },
    };

    // Ouvrir le modal et définir l'image cliquée
    const handleImageClick = (index) => {
        setModalImages(singleData.images); // Images de l'article
        setModalIndex(index); // L'image sur laquelle l'utilisateur a cliqué
        setIsModalOpen(true); // Ouvrir le modal
      };

      // Fermer le modal
      const closeModal = () => {
        setIsModalOpen(false); // Fermer le modal
    };

    const currentIndex = blogData.findIndex(blog => blog.id === singleData.id); // Trouver l'index de l'article actuel

    const handleNext = () => {
        if (currentIndex < blogData.length - 1) {
            window.location.href = `/blog/${blogData[currentIndex + 1].id}`; // Naviguer vers l'article suivant
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            window.location.href = `/blog/${blogData[currentIndex - 1].id}`; // Naviguer vers l'article précédent
        }
    };

    return (
        <>
            <div className="blog__details section-padding">
                <div className="container">
                    <div className="row gy-4 flex-wrap-reverse">
                        <div className="col-xl-8">
                            <div className="blog__details-thumb">
                                <span className="date">{singleData.date} {singleData.month} {singleData.year}</span>
                                <img className="img__full" src={singleData.image.src} alt="blog-details-image" />
                            </div>
                            <div className="blog__details-content">
                                <div className="blog__details-content-top">
                                    <span>
                                        <i className="far fa-user"></i>
                                        Administrateur
                                    </span>
                                    <span>
                                        <i className="far fa-folder-open"></i>
                                        Catégorie
                                    </span>
                                    <span>
                                        <i className="far fa-comments"></i>
                                        Commentaires (05)
                                    </span>
                                    <div className="blog__details-quote">
                                        <Swiper 
                                          modules={[Navigation, Zoom]} {...swiperConfig} 
                                          className="py-2"
                                          >
                                            {singleData.images.map((image, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className="single-slider" 
                                                    onClick={() => handleImageClick(index)}
                                                    >
                                                        <img src={image.src} alt={`Blog Image ${index + 1}`} />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                        <div className="blog__details-quote-bottom">
                                            <div className="slider-arrow">
                                                <i className="swiper-button-prev fas fa-arrow-left"></i>
                                                <i className="swiper-button-next fas fa-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__details-pagination">
                                <div className="blog__details-pagination-btn blog__details-pagination-prev">
                                    <button onClick={handlePrev} disabled={currentIndex === 0} className="pagination-btn">
                                        <i className="fas fa-arrow-left"></i>
                                    </button>
                                    <div className="blog__details-pagination-text">
                                        <span>Article précédent</span>
                                    </div>
                                </div>
                                <div className="blog__details-pagination-btn blog__details-pagination-next">
                                    <div className="blog__details-pagination-text">
                                        <span>Article suivant</span>
                                    </div>
                                    <button onClick={handleNext} disabled={currentIndex === blogData.length - 1} className="pagination-btn">
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal pour afficher les images agrandies */}
            {/* {isModalOpen && (
                <div className="modal-overlay">
                <div className="modal-content">
                <div className="blog__details-quote">
                <Swiper 
                        initialSlide={modalIndex}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
                        zoom
                        >
                        {singleData.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="single-slider" 
                                onClick={() => handleImageClick(index)}
                                >
                                    <img src={image.src} alt={`Blog Image ${index + 1}`}  />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="blog__details-quote-bottom">
                        <div className="slider-arrow">
                            <i className="swiper-button-prev fas fa-arrow-left"></i>
                            <i className="swiper-button-next fas fa-arrow-right"></i>
                        </div>
                    </div>
                    <button className="close-modal" onClick={closeModal}>
                        ×
                    </button>
                </div>                                              
            </div>
        </div>
        )} */}
        </>
    );
};

export default BlogSingleMain;
