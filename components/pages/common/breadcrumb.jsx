import Link from 'next/link';
import image from "../../../public/assets/img/banner/page-banner-img.png";
import shape from "../../../public/assets/img/shape/page-banner-shape.png";

const BreadCrumb = ({title, innerTitle}) => {
    return (
        <div className="page__banner pt-100 pb-100">
            <div className="page__banner-shape">
                <img src={shape.src} alt="image" />
            </div>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="page__banner-content">
                            <h2>{title}</h2>
                            <span><Link href="/">Accueil</Link><span>|</span>{innerTitle}</span>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="page__banner-img">
                           {/*  <img src={image.src} alt="image" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;