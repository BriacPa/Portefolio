import React from "react";
import '../App.css';  // Import your CSS file

const Projects = () => {
  return (
    <section className="containerT my-5">
      <h2 className="text-center">Projets</h2>
      <div className="row">
        {/* First Project */}
        <div className="col-md-4">
          <div className="card mb-4 project-card">
            <img src="https://via.placeholder.com/150" alt="Project" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title project-title">Portefolio</h5>
              <p className="card-center project-description">Crée à l'aide React</p>
              <div className="project-links">
                <a 
                  href="https://github.com/johndoe/portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn custom-btn"
                >
                  <i className="fab fa-github icon-only"></i>  {/* GitHub Icon for mobile */}
                  <span className="text-only">Voir sur GitHub</span> {/* GitHub Text for larger screens */}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Second Project */}
        <div className="col-md-4">
          <div className="card mb-4 project-card">
            <img src="https://via.placeholder.com/150" alt="Project" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title project-title">Application de Sécurité Web : Démonstration et Apprentissage</h5>
              <p className="text-center project-description">
                Cette application web a été développée dans le cadre du cours de sécurité des applications du Dr. Michał Apolinarski de l'université de Technologie de Poznan...
              </p>
              <div className="project-links">
                <a 
                  href="https://github.com/BriacPa/APP_SEC_APP" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn custom-btn" 
                  style={{ marginRight: "15px" }}
                >
                  <i className="fab fa-github icon-only"></i> {/* GitHub Icon for mobile */}
                  <span className="text-only">Voir sur GitHub</span> {/* GitHub Text for larger screens */}
                </a>
                <a 
                  href="https://app-sec-app-client.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn custom-btn"
                >
                  <i className="fas fa-globe icon-only"></i> {/* Website Icon for mobile */}
                  <span className="text-only">Voir Déployé</span> {/* Website Text for larger screens */}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Third Project */}
        <div className="col-md-4">
          <div className="card mb-4 project-card">
            <img src="https://via.placeholder.com/150" alt="Project" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title project-title">CryptoGraph : Application de Stéganographie et Chiffrement d'Images</h5>
              <p className="text-center project-description">
                CryptoGraph est une application Python avec interface graphique permettant de cacher et d’extraire des données chiffrées à l’intérieur d’images grâce à la stéganographie.
              </p>
              <div className="project-links">
                <a 
                  href="https://github.com/BriacPa/BDAS_Project" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn custom-btn" 
                  style={{ marginRight: "15px" }}
                >
                  <i className="fab fa-github icon-only"></i> {/* GitHub Icon for mobile */}
                  <span className="text-only">Voir sur GitHub</span> {/* GitHub Text for larger screens */}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Project */}
        <div className="col-md-4">
          <div className="card mb-4 project-card">
            <img src="https://via.placeholder.com/150" alt="Project" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title project-title">Network Scan: Outil de Sécurité pour l'Analyse Réseau</h5>
              <p className="text-center project-description">
                Le projet Network Scan est une application conçue pour effectuer des analyses de réseau à des fins de sécurité.
              </p>
              <div className="project-links">
                <a 
                  href="https://github.com/BriacPa/Network_Scan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn custom-btn" 
                  style={{ marginRight: "15px" }}
                >
                  <i className="fab fa-github icon-only"></i> {/* GitHub Icon for mobile */}
                  <span className="text-only">Voir sur GitHub</span> {/* GitHub Text for larger screens */}
                </a>
                <a 
                  href="https://www.youtube.com/shorts/CuABvAZRpJk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn custom-btn" 
                  style={{ marginRight: "15px" }}
                >
                  <i className="fab fa-youtube icon-only"></i> {/* YouTube Icon for mobile */}
                  <span className="text-only">Voir sur YouTube</span> {/* YouTube Text for larger screens */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
