import Link from 'next/link';
import image from "../../../public/assets/img/404/404.png";

const Error = () => {
    return (
        <div className="error-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <div className="error-img">
                            <img src={image.src} alt="image" />
                        </div>
                        <Link href="/" className="btn-two m-auto d-table">Retourner
                            <i className="fas fa-chevron-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;