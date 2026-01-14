import React from 'react';

function VideoPage() {
  return (
    <div className="container mt-4">
      <h2>Vidéo</h2>

      <video width="100%" controls>
        <source src="videos/video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  );
}

export default VideoPage;
public\pages\videos