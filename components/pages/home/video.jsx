import { useState } from "react";
import ModalVideo from "react-modal-video";

const Video = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
        setOpenVideo(true);
    };
    return (
        <>
            <div className="video__one">
                <span className="video-play-btn" onClick={openVideoModal}>
                    <i className="fas fa-play"></i>
                </span>
            </div>
            <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="UnV3KK7hQeg" onClose={() => setOpenVideo(false)} />
        </>
    );
};

export default Video;