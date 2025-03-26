import React from "react";

const Contact = () => {
  return (
    <section className="containerTBC my-5">
      <h2 className="text-center" style={{ color: "rgb(160, 160, 160)" }}>Contact</h2>
      <ul className="list-group">
        <li className="list-group-item" style={{ color: "rgb(160, 160, 160)" }}>
          <strong>Email : </strong> briac.pannetier.02@gmail.com
        </li>
        <li className="list-group-item" style={{ color: "rgb(160, 160, 160)" }}>
          <strong>LinkedIn : </strong>
          <a 
            href="https://www.linkedin.com/in/briac-pannetier-9321912a4/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: "rgb(160, 160, 160)" }}
          >
            Briac Pannetier
          </a>
        </li>
        <li className="list-group-item" style={{ color: "rgb(160, 160, 160)" }}>
          <strong>Téléphone : </strong> +33 7 85 97 83 87
        </li>
      </ul>
    </section>
  );
};

export default Contact;
