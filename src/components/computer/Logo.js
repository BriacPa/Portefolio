import React from "react";

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/briac-pannetier-9321912a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        
        {/* Email Icon */}
        <a href="mailto:briac.pannetier.02@proton.me" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        
        {/* Phone Icon */}
        <a href="tel:+33785978387" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-phone-alt"></i>
        </a>
        
        {/* GitHub Icon */}
        <a
          href="https://github.com/BriacPa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Logo;
