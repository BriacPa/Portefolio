import React from "react";
import avatar from "../../assets/images/avatar.jpg"; // Import the image

const Header = () => {
  return (
    <header className="text-white p-5 relative">
      <div className="header-content">
        <img
          src={avatar}
          alt="Briac Pannetier"
          className="header-image"
        />
        <div>
          <h1>Briac Pannetier</h1>
          <p>Étudiant Ingénieur en Informatique</p>
        </div>
      </div>
      <a href="/path/to/your/cv.pdf" download className="cv-button">
        <i className="bi bi-download download-icon"></i>
        Télécharger mon CV
      </a>
    </header>
  );
};

export default Header;
