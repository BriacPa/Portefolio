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
      {/* Link to open the CV in a new tab */}
      <a
        href="https://drive.google.com/file/d/1vBoxbybvv9CXku7MNaMFr_YTIvrEvrfD/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="cv-button"
      >
        <i className="bi bi-eye download-icon"></i>
        Voir mon CV
      </a>
    </header>
  );
};

export default Header;
