import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* =======================
   Desktop version
======================= */
const MSBVideoPageDesktop = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <div className="container mt-4">
      <div className="video-header">
        <h2 className="vid-h2">CryptoGraph : Most Significant Bit</h2>
        <button onClick={handleBack} className="back-btn">
          &#8592;
        </button>
      </div>

      <video width="100%" controls>
        <source src="/media/MSB.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  );
};

/* =======================
   Mobile version
======================= */
const MSBVideoPageMobile = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "12px",
          color: "#fff",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "20px",
            marginRight: "10px",
          }}
        >
          ←
        </button>
        <span style={{ fontSize: "16px", fontWeight: 500 }}>
          CryptoGraph : MSB
        </span>
      </div>

      {/* Video */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <video
          controls
          muted
          autoPlay
          playsInline
          style={{
            width: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        >
          <source src="/media/MSB.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </div>
    </div>
  );
};

/* =======================
   Main component
======================= */
const MSBVideoPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 1300);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile ? <MSBVideoPageMobile /> : <MSBVideoPageDesktop />;
};

export default MSBVideoPage;
