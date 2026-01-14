import React from 'react';
import { useNavigate } from 'react-router-dom';

function MSBVideoPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mt-4">
      <div className="video-header">
        <h2 className="vid-h2">CryptoGraph : Most Significant Bit</h2>
        <button onClick={handleBack} className="back-btn">
          &#8592; {/* ← bold arrow */}
        </button>
      </div>

      <video width="100%" controls>
        <source src="/media/MSB.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  );
}

export default MSBVideoPage;
