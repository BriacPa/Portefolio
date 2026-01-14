import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Desktop version
const VideoPageDesktop = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <div className="container mt-4">
      <div className="video-header">
        <h2>Application de Sécurité Web</h2>
        <button onClick={handleBack} className="back-btn">
          &#8592;
        </button>
      </div>

      <video width="100%" controls>
        <source src="/media/APPSEC.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  );
};

// Mobile version
const VideoPageMobile = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <div className="containerM mt-4">
      <div className="video-header">
        <h2 style={{ fontSize: "1.8rem" }}>Application de Sécurité Web</h2>
      </div>

	<video width="100%" controls muted>
	  <source src="/media/APPSEC.mp4" type="video/mp4" />
	  Votre navigateur ne supporte pas la vidéo.
	</video>
    </div>
  );
};

// Main component
const VideoPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 1300);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile ? <VideoPageMobile /> : <VideoPageDesktop />;
};

export default VideoPage;
