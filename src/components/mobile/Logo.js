import React from "react";

const Logo = () => {
  return (
    <div
      className="logo-container"
      style={{
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
        left: "auto",
        right: "0",
        marginLeft: "auto",
      }}
    >
      <div
        className="logo"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0px",
        }}
      >
        <a
          href="https://www.linkedin.com/in/briac-pannetier-9321912a4/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "4px" }}
        >
          <i className="fab fa-linkedin" style={{ fontSize: "1rem" }}></i>
        </a>
        <a
          href="mailto:briac.pannetier.02@proton.me"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "4px" }}
        >
          <i className="fas fa-envelope" style={{ fontSize: "1rem" }}></i>
        </a>
        <a
          href="tel:+33785978387"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "4px" }}
        >
          <i className="fas fa-phone-alt" style={{ fontSize: "1rem" }}></i>
        </a>
        <a
          href="https://github.com/BriacPa"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "4px" }}
        >
          <i className="fab fa-github" style={{ fontSize: "1rem" }}></i>
        </a>
      </div>
    </div>
  );
};

export default Logo;
