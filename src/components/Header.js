import React from "react";
import avatar from "../assets/images/avatar.jpg"; // Import the image

const Header = () => {
  return (
    <header
      className="text-white text-center p-5"
      style={{
        backgroundColor: "#e0a628",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "50px", // Adjusts the padding to give some space at the top
        paddingBottom: "50px", // Adjusts the bottom padding
      }}
    >
      <div
        className="header-content"
        style={{
          display: "flex",
          alignItems: "center", // Vertically centers the image and text
          justifyContent: "center", // Horizontally center everything
          flexDirection: "row", // Places image and text in a row
        }}
      >
        <img
          src={avatar}
          alt="Briac Pannetier"
          className="header-image"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            marginRight: "20px", // Add space between image and text
          }}
        />
        <div
          style={{
            textAlign: "left",
            paddingTop: "18px", // Adjust vertical padding to center the text
            paddingBottom: "22px", // Adjust vertical padding to center the text
          }}
        >
          <h1
            style={{
              margin: "0", // Remove any default margin
              padding: "0", // Add horizontal padding
            }}
          >
            Briac Pannetier
          </h1>
          <p
            style={{
              marginTop: "0px", // Adds space between the title and the paragraph
              marginBottom : "0px",
              padding: "0", // Add horizontal padding
            }}
          >
            Étudiant Ingénieur Informaticien
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
