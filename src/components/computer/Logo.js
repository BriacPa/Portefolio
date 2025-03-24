import React from "react";

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo">
        <a href="https://www.linkedin.com/in/briac-pannetier-9321912a4/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:briac.pannetier.02@gmail.com" target="_blank" rel="noopener noreferrer">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="tel:+33785978387" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-phone-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default Logo;
