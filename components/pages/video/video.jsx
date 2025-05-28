const VideoPage = () => {
    return (
      <div className="bg-primary">
        <video
          src="/assets/video/temoig.webm" // Chemin relatif depuis le dossier public
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className=""
        >
        </video>
      </div>
    );
  };
  
  export default VideoPage;
  