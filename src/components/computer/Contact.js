import React from "react";

const Contact = () => {
  return (
    <section className="containerTBC my-5">
      <h2 className="text-center">Contact</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Email : </strong> briac.pannetier.02@gmail.com
        </li>
        <li className="list-group-item">
          <strong>LinkedIn : </strong>
          <a
            href="https://www.linkedin.com/in/briac-pannetier-9321912a4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Briac Pannetier
          </a>
        </li>
        <li className="list-group-item">
          <strong>Téléphone : </strong> +33 7 85 97 83 87
        </li>
      </ul>
    </section>
  );
};

export default Contact;
