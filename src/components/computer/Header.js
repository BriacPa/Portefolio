import React from "react";
import avatar from "../../assets/images/avatar.jpg"; // Import the image

const Header = () => {
  return (
    <header className="text-white p-5">
      <div className="header-content">
        <img
          src={avatar}
          alt="Briac Pannetier"
          className="header-image"
        />
        <div>
          <h1>Briac Pannetier</h1>
          <p>Étudiant Ingénieur Informaticien</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
