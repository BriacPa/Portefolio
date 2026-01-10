import React from "react";

const Contact = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Contact</h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <ul className="list-group" style={{ paddingLeft: 0 }}>
            <li 
              className="list-group-item d-flex justify-content-between align-items-center" 
              style={{ paddingLeft: 0, color: "rgb(160, 160, 160)" }}
            >
              <strong>Email:</strong> 
              <span className="text-truncate">briac.pannetier.02@proton.me</span>
            </li>
            <li 
              className="list-group-item d-flex justify-content-between align-items-center" 
              style={{ paddingLeft: 0, color: "rgb(160, 160, 160)" }}
            >
              <strong>LinkedIn:</strong>
              <a
                href="https://www.linkedin.com/in/briac-pannetier-9321912a4/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgb(160, 160, 160)" }}
                className="text-truncate"
              >
                Briac Pannetier
              </a>
            </li>
            <li 
              className="list-group-item d-flex justify-content-between align-items-center" 
              style={{ paddingLeft: 0, color: "rgb(160, 160, 160)" }}
            >
              <strong>Téléphone:</strong> 
              <span className="text-truncate">+33 7 85 97 83 87</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
