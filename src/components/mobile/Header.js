import React from "react";
import avatar from "../../assets/images/avatar.jpg"; // Import the image

const Header = () => {
  return (
    <header
      className="text-white p-5"
      style={{
        backgroundColor: "#e0a628",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <div
        className="header-content"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <img
          src={avatar}
          alt="Briac Pannetier"
          className="header-image"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            marginRight: "20px",
          }}
        />
        <div
          style={{
            textAlign: "left",
            paddingTop: "18px",
            paddingBottom: "22px",
          }}
        >
          <h1
            style={{
              margin: "0",
              padding: "0",
              fontSize: "25px",
            }}
          >
            Briac Pannetier
          </h1>
          <p
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              padding: "0",
              fontSize: "12px"
            }}
          >
            Étudiant Ingénieur en Informatique
          </p>
        </div>
      </div>
      {/* Link to open the CV in a new tab */}
	  	<a
	  href="PDF/CV.pdf"
	  target="_blank"
	  rel="noopener noreferrer"
	  className="cv-buttonM"
	>
	  <i className="bi bi-eye download-iconM"></i>
	  CV
	</a>
    </header>
  );
};

export default Header;
