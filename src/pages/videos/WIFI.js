import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Desktop version
const NetworkScanVideoPageDesktop = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <div className="container mt-4">
      <div className="video-header">
        <h2 className="vid-h2">Network Scan</h2>
        <button onClick={handleBack} className="back-btn">
          &#8592; {/* ← bold arrow */}
        </button>
      </div>

      <video width="100%" 
	  style={{maxHeight: "700px"}}
	  controls>
        <source src="/media/WIFI.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  );
};

// Mobile version
const NetworkScanVideoPageMobile = () => {

  return (
      <video
        width="100%"
        style={{ maxWidth: "600px", display: "block" }}
        controls
        muted
      >
        <source src="/media/WIFI.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
  );
};

// Main component
const NetworkScanVideoPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 1300);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile ? <NetworkScanVideoPageMobile /> : <NetworkScanVideoPageDesktop />;
};

export default NetworkScanVideoPage;
