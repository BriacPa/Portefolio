import React from "react";
import '../App.css';  // Import your CSS file

const Projects = () => {
  return (
    <section className="containerT my-5">
      <h2 className="text-center">Projets</h2>
      <div className="row">
        {/* First Project */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/150" alt="Project" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Portefolio</h5>
              <p className="card-center">Crée à l'aide React</p>
              <a 
                href="https://github.com/johndoe/portfolio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn custom-btn"
              >
                Voir sur GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Second Project */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/150" alt="Project" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Application de Sécurité Web : Démonstration et Apprentissage</h5>
              <p className="text-center">
                Cette application web a été développée dans le cadre du cours de sécurité des applications du Dr. Michał Apolinarski de l'université de Technologie de Poznan. Elle sert de démonstration des concepts clés de la sécurité informatique, notamment l'authentification des utilisateurs, le stockage sécurisé des données et la protection contre les vulnérabilités courantes du web.
              </p>
              <div className="d-flex">
                <a 
                  href="https://github.com/BriacPa/APP_SEC_APP" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn custom-btn" 
                  style={{ marginRight: "15px" }}
                >
                  Voir sur GitHub
                </a>
                <a 
                  href="https://app-sec-app-client.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn custom-btn"
                >
                  Voir Déployé
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Third Project */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/150" alt="Project" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">CryptoGraph : Application de Stéganographie et Chiffrement d'Images</h5>
              <p className="text-center">
                CryptoGraph est une application Python avec interface graphique permettant de cacher et d’extraire des données chiffrées à l’intérieur d’images grâce à la stéganographie.
              </p>
              <div className="d-flex">
                <a 
                  href="https://github.com/BriacPa/BDAS_Project" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn custom-btn" 
                  style={{ marginRight: "15px" }}
                >
                  Voir sur GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Project */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/150" alt="Project" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Network Scan: Outil de Sécurité pour l'Analyse Réseau</h5>
              <p className="text-center">
                Le projet Network Scan est une application conçue pour effectuer des analyses de réseau à des fins de sécurité.
              </p>
              <div className="d-flex">
                <a 
                  href="https://github.com/BriacPa/Network_Scan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn custom-btn" 
                  style={{ marginRight: "15px" }}
                >
                  Voir sur GitHub
                </a>
                <a 
                  href="https://www.youtube.com/shorts/CuABvAZRpJk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn custom-btn" 
                  style={{ marginRight: "15px" }}
                >
                  Voir sur Youtube
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
