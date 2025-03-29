import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Projects = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);


  return (
    <section className="containerT my-5">
      <h2 className="text-center">Projets</h2>
      <div className="row">
        {/* First Project */}
        <div className="col-md-4">
          <div className="card mb-4 project-card">
            <div className="card-body">
              <h5 className="card-title project-title">Portefolio</h5>
              <div className="tagsM">
                {["React", "Front-End", "Portfolio"].map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
              <p className="card-center project-description">
              {showMore1 ? (
                    <>
                    Ce site est mon portfolio en ligne, conçu avec React pour offrir une navigation fluide et interactive. Il fonctionne comme un CV numérique, mettant en avant mon parcours, mes compétences et mes projets. On y trouve une présentation détaillée de mon expérience, des réalisations en développement web et cybersécurité, ainsi que des liens vers mes travaux open source et démonstrations vidéo. 🚀💻
                    <br />
                    <div className="project-links">
                <a
                  href="https://github.com/BriacPa/Portefolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn custom-btn"
                >
                  <i className="fab fa-github icon-only"></i> {/* GitHub Icon for mobile */}
                </a>
              </div>
                      <span className="toggle-arrow" onClick={() => setShowMore1(false)}>
                        <FaChevronUp />
                      </span>
                    </>
                  ) : (
                    <>
                    Ce site est mon portfolio en ligne, conçu avec React pour offrir une navigation fluide et interactive...
                      <br />
                      <div className="project-links">
                <a
                  href="https://github.com/johndoe/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn custom-btn"
                >
                  <i className="fab fa-github icon-only"></i> {/* GitHub Icon for mobile */}
                </a>
              </div>
                      <span className="toggle-arrow" onClick={() => setShowMore1(true)}>
                        <FaChevronDown />
                      </span>
                    </>
                  )}
              </p>

            </div>
          </div>
        </div>

        {/* Second Project */}
        <div className="col-md-4">
          <div className="card mb-4 project-card">
            <div className="card-body">
              <h5 className="card-title project-title">Application de Sécurité Web : Démonstration et Apprentissage</h5>
              <div className="tagsM">
                {["Cybersecurity", "Web Security", "Node.js", "React", "MongoDB"].map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
              <p className="text-center project-description">
              {showMore2 ? (
                    <>
                    Cette application web a été développée dans le cadre du cours de sécurité des applications du Dr. Michał Apolinarski. Elle sert de démonstration des concepts clés de la sécurité informatique, notamment l'authentification des utilisateurs, le stockage sécurisé des données et la protection contre les vulnérabilités courantes du web. Elle offre un environnement interactif permettant aux utilisateurs d'explorer et de comprendre les bonnes pratiques en matière de conception d’applications sécurisées. L'application permet de parcourir et de créer des articles, tout en intégrant différents niveaux d'autorisation pour les utilisateurs, les modérateurs et les administrateurs. Elle repose sur des technologies modernes telles que Node.js, MongoDB, React et Bootstrap et met en œuvre des mesures de sécurité comme l'utilisation de tokens HTTP-only pour protéger les sessions utilisateurs.
                    <br />
                    <div className="project-links">
                <a
                  href="https://github.com/BriacPa/APP_SEC_APP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn custom-btn"
                  style={{ marginRight: "15px" }}
                >
                  <i className="fab fa-github icon-only"></i> {/* GitHub Icon for mobile */}
                </a>
                <a
                  href="https://app-sec-app-client.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn custom-btn"
                  style={{ marginRight: "15px" }}
                >
                  <i className="fas fa-globe icon-only"></i> {/* Website Icon for mobile */}
                </a>
                <a
                  href="https://vimeo.com/1068878409/d86bcb6e3a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn custom-btn"
                  style={{ marginRight: "15px" }}
                >
                  <i className="fab fa-vimeo icon-only"></i> {/* Vimeo Icon for mobile */}
                </a>
              </div>
                      <span className="toggle-arrow" onClick={() => setShowMore2(false)}>
                        <FaChevronUp />
                      </span>
                    </>
                  ) : (
                    <>
                    Cette application web a été développée dans le cadre du cours de sécurité des applications du Dr. Michał Apolinarski...
                      <br />
                      <div className="project-links">
                <a
                  href="https://github.com/BriacPa/APP_SEC_APP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn custom-btn"
                  style={{ marginRight: "15px" }}
                >
                  <i className="fab fa-github icon-only"></i> {/* GitHub Icon for mobile */}
                </a>
                <a
                  href="https://app-sec-app-client.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn custom-btn"
                  style={{ marginRight: "15px" }}
                >
                  <i className="fas fa-globe icon-only"></i> {/* Website Icon for mobile */}
                </a>
                <a
                  href="https://vimeo.com/1068878409/d86bcb6e3a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn custom-btn"
                  style={{ marginRight: "15px" }}
                >
                  <i className="fab fa-vimeo icon-only"></i> {/* Vimeo Icon for mobile */}
                </a>
              </div>
                      <span className="toggle-arrow" onClick={() => setShowMore2(true)}>
                        <FaChevronDown />
                      </span>
                    </>
                  )}
              </p>
            </div>
          </div>
        </div>

        {/* Third Project */}
        <div className="col-md-4">
          <div className="card mb-4 project-card">
            <div className="card-body">
              <h5 className="card-title project-title">CryptoGraph : Application de Stéganographie et Chiffrement d'Images</h5>
              <div className="tagsM">
                {["Python", "Cryptography", "Steganography", "AES", "GUI"].map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
              <p className="text-center project-description">
                {showMore3 ? (
                    <>
                    CryptoGraph est une application GUI basée sur Python qui permet d'intégrer et d'extraire des données CSV chiffrées dans des fichiers image en utilisant la stéganographie. Elle prend en charge des méthodes de chiffrement comme AES et XOR pour sécuriser les données avant leur intégration. Les utilisateurs peuvent choisir entre les techniques d'insertion par le bit le moins significatif (LSB) ou le bit le plus significatif (MSB) pour cacher les données dans les images. L'application propose également une fonctionnalité de redimensionnement des images afin d’optimiser la capacité de stockage des données cachées. Une fois intégrées, les données chiffrées peuvent être extraites et déchiffrées pour retrouver leur forme originale. CryptoGraph est un outil efficace pour la transmission sécurisée de données sensibles en les dissimulant dans des fichiers image, offrant ainsi une solution idéale pour les utilisateurs soucieux de leur confidentialité.
                    <br />
                    <div className="project-links">
                        <a
                          href="https://github.com/BriacPa/BDAS_Project"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn custom-btn"
                          style={{ marginRight: "15px" }}
                        >
                          <i className="fab fa-github icon-only"></i> {/* GitHub Icon for mobile */}
                        </a>
                        <a
                          href="https://vimeo.com/1068893673/5c45af3b6f"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn custom-btn"
                          style={{ marginRight: "15px" }}
                        >
                          <i className="fab fa-vimeo icon-only"></i> {/* Vimeo Icon for mobile */}
                        </a>
                        <a
                          href="https://vimeo.com/1068893500/c0fa2c5b3d"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn custom-btn"
                          style={{ marginRight: "15px" }}
                        >
                          <i className="fab fa-vimeo icon-only"></i> {/* Vimeo Icon for mobile */}
                        </a>
                      </div>
                      <span className="toggle-arrow" onClick={() => setShowMore3(false)}>
                        <FaChevronUp />
                      </span>
                    </>
                  ) : (
                    <>
                    CryptoGraph est une application GUI basée sur Python qui permet d'intégrer et d'extraire des données CSV...
                      <br />
                      <div className="project-links">
                        <a
                          href="https://github.com/BriacPa/BDAS_Project"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn custom-btn"
                          style={{ marginRight: "15px" }}
                        >
                          <i className="fab fa-github icon-only"></i> {/* GitHub Icon for mobile */}
                        </a>
                        <a
                          href="https://vimeo.com/1068893673/5c45af3b6f"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn custom-btn"
                          style={{ marginRight: "15px" }}
                        >
                          <i className="fab fa-vimeo icon-only"></i> {/* Vimeo Icon for mobile */}
                        </a>
                        <a
                          href="https://vimeo.com/1068893500/c0fa2c5b3d"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn custom-btn"
                          style={{ marginRight: "15px" }}
                        >
                          <i className="fab fa-vimeo icon-only"></i> {/* Vimeo Icon for mobile */}
                        </a>
                      </div>
                      <span className="toggle-arrow" onClick={() => setShowMore3(true)}>
                        <FaChevronDown />
                      </span>
                    </>
                  )}
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Project */}
        <div className="col-md-4">
          <div className="card mb-4 project-card">
            <div className="card-body">
              <h5 className="card-title project-title">Network Scan: Outil de Sécurité pour l'Analyse Réseau</h5>
              <div className="tagsM">
                {["ESP32", "Wi-Fi", "Networking", "Cybersecurity", "IoT"].map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
              <p className="text-center project-description">
                {showMore4 ? (
                  <>
                    Le projet "Wi-Fi Scanner with OLED Display (ESP32") est une application développée pour l'ESP32 qui permet de scanner les réseaux Wi-Fi environnants et d'afficher les informations collectées sur un écran OLED SH1106 de 128x64 pixels. Utilisant les bibliothèques `U8g2lib`, `WiFi.h` et `esp_wifi.h`, cette application effectue des scans Wi-Fi de manière asynchrone, affichant en temps réel les détails des réseaux détectés, tels que le SSID, la force du signal (RSSI), le type de cryptage, le canal et l'adresse MAC. Une barre de progression mise à jour chaque seconde indique l'état du scan en cours. Le matériel requis comprend une carte de développement ESP32, un écran OLED SH1106 avec interface I2C, et des fils pour connecter les broches SDA et SCL de l'écran aux broches correspondantes de l'ESP32 (par défaut, SDA sur la broche 21 et SCL sur la broche 22, modifiables dans le code si nécessaire).
                    <br />
                    <div className="project-links">
                      <a
                        href="https://github.com/BriacPa/Network_Scan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn custom-btn"
                        style={{ marginRight: "15px" }}
                      >
                        <i className="fab fa-github icon-only"></i> {/* GitHub Icon for mobile */}
                      </a>
                      <a
                        href="https://vimeo.com/1068893419/b21fdaf23d"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn custom-btn"
                        style={{ marginRight: "15px" }}
                      >
                        <i className="fab fa-vimeo icon-only"></i> {/* Vimeo Icon for mobile */}
                      </a>
                    </div>
                    <span className="toggle-arrow" onClick={() => setShowMore4(false)}>
                      <FaChevronUp />
                    </span>
                  </>
                ) : (
                  <>
                    Le projet "Wi-Fi Scanner with OLED Display (ESP32") est une application développée pour l'ESP32...
                    <br />
                    <div className="project-links">
                      <a
                        href="https://github.com/BriacPa/Network_Scan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn custom-btn"
                        style={{ marginRight: "15px" }}
                      >
                        <i className="fab fa-github icon-only"></i> {/* GitHub Icon for mobile */}
                      </a>
                      <a
                        href="https://vimeo.com/1068893419/b21fdaf23d"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn custom-btn"
                        style={{ marginRight: "15px" }}
                      >
                        <i className="fab fa-vimeo icon-only"></i> {/* Vimeo Icon for mobile */}
                      </a>
                    </div>
                    <span className="toggle-arrow" onClick={() => setShowMore4(true)}>
                      <FaChevronDown />
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
