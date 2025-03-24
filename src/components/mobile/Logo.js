import React from "react";

const Logo = () => {
  return (
    <div
      className="logo-container"
      style={{
        position: "fixed", // Keep the icons fixed on the screen
        top: "50%", // Center vertically
        transform: "translateY(-30%)", // Correct vertical centering
        left: "auto", // Ensure it's not positioned on the left
        right: "0", // Align to the right edge of the screen
        marginLeft: "auto", // Push to the right using flexbox
      }}
    >
      <div
        className="logo"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Keep the icons stacked vertically
          gap: "0px", // Space between icons
        }}
      >
        <a
          href="https://www.linkedin.com/in/briac-pannetier-9321912a4/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "4px" }} // Applied margin to LinkedIn link
        >
          <i className="fab fa-linkedin" style={{ fontSize: "1rem" }}></i>
        </a>
        <a
          href="mailto:briac.pannetier.02@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "4px" }} // Applied margin to Email link
        >
          <i className="fas fa-envelope" style={{ fontSize: "1rem" }}></i>
        </a>
        <a
          href="tel:+33785978387"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "4px" }} // Applied margin to Phone link
        >
          <i className="fas fa-phone-alt" style={{ fontSize: "1rem" }}></i>
        </a>
      </div>
    </div>
  );
};

export default Logo;
