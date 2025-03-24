import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import Flag from 'react-world-flags';

const Skills = () => {
  return (
    <div>
      {/* Technical Skills Section */}
      <section className="containerT my-5">
        <h2 className="text-center mb-4">Technical Skills</h2>
        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
            gap: "20px", // Adds space between items
            justifyItems: "center", // Centers items horizontally
            alignItems: "center", // Centers items vertically
          }}
        >
        {/* Individual Skill Cards */}
        <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <i className="bi bi-braces" style={{ fontSize: "3rem", color: "#000" }}></i>
              <h5 className="card-title mt-3" style={{ color: "#000" }}>HTML</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "65%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <i className="bi bi-braces" style={{ fontSize: "3rem", color: "#000" }}></i>
              <h5 className="card-title mt-3" style={{ color: "#000" }}>CSS</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "60%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <i className="bi bi-braces" style={{ fontSize: "3rem", color: "#000" }}></i>
              <h5 className="card-title mt-3" style={{ color: "#000" }}>JavaScript</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "45%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <i className="bi bi-code-slash" style={{ fontSize: "3rem", color: "#000" }}></i>
              <h5 className="card-title mt-3" style={{ color: "#000" }}>React</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "70%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <i className="bi bi-code-slash" style={{ fontSize: "3rem", color: "#000" }}></i>
              <h5 className="card-title mt-3" style={{ color: "#000" }}>Node.js</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "65%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <i className="bi bi-github" style={{ fontSize: "3rem", color: "#000" }}></i>
              <h5 className="card-title mt-3" style={{ color: "#000" }}>Git</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "40%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <i className="bi bi-github" style={{ fontSize: "3rem", color: "#000" }}></i>
              <h5 className="card-title mt-3" style={{ color: "#000" }}>GitHub</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "85%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <i className="bi bi-bootstrap" style={{ fontSize: "3rem", color: "#000" }}></i>
              <h5 className="card-title mt-3" style={{ color: "#000" }}>Bootstrap</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "75%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <i className="bi bi-patch-check" style={{ fontSize: "3rem", color: "#000" }}></i>
              <h5 className="card-title mt-3" style={{ color: "#000" }}>Python</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "85%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <i className="bi bi-database" style={{ fontSize: "3rem", color: "#000" }}></i>
              <h5 className="card-title mt-3" style={{ color: "#000" }}>SQL</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "80%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <i className="bi bi-database-fill" style={{ fontSize: "3rem", color: "#000" }}></i>
              <h5 className="card-title mt-3" style={{ color: "#000" }}>NoSQL</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "75%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <i className="bi bi-file-earmark-code" style={{ fontSize: "3rem", color: "#000" }}></i>
              <h5 className="card-title mt-3" style={{ color: "#000" }}>C++</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "60%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <i className="bi bi-file-earmark-code" style={{ fontSize: "3rem", color: "#000" }}></i>
              <h5 className="card-title mt-3" style={{ color: "#000" }}>C</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "40%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* Languages Section */}
 <section className="containerT my-5">
        <h2 className="text-center mb-4">Languages</h2>
        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
            gap: "20px", // Adds space between items
            justifyItems: "center", // Centers items horizontally
            alignItems: "center", // Centers items vertically
          }}
        >
          {/* Individual Language Cards */}
          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <Flag code="GB" style={{ width: "50px", height: "35px" }} /> {/* UK Flag for English */}
              <h5 className="card-title mt-3" style={{ color: "#000" }}>Anglais</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "90%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <Flag code="ES" style={{ width: "50px", height: "35px" }} /> {/* Spain Flag for Spanish */}
              <h5 className="card-title mt-3" style={{ color: "#000" }}>Espagnol</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "40%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <Flag code="PL" style={{ width: "50px", height: "35px" }} /> {/* Poland Flag for Polish */}
              <h5 className="card-title mt-3" style={{ color: "#000" }}>Polonais</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "5%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Other Skills Section */}
      <section className="containerT my-5">
        <h2 className="text-center mb-4">Other Skills</h2>
        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
            gap: "20px", // Adds space between items
            justifyItems: "center", // Centers items horizontally
            alignItems: "center", // Centers items vertically
          }}
        >
          {/* Sociable */}
          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <i className="bi bi-person-check" style={{ fontSize: "3rem", color: "#000" }}></i>
              <h5 className="card-title mt-3" style={{ color: "#000" }}>Sociable</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "100%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

          {/* Créatif */}
          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <i className="bi bi-lightbulb" style={{ fontSize: "3rem", color: "#000" }}></i>
              <h5 className="card-title mt-3" style={{ color: "#000" }}>Créatif</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "75%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>

          {/* Assidu */}
          <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
            <div className="card-body text-center">
              <i className="bi bi-check-circle" style={{ fontSize: "3rem", color: "#000" }}></i>
              <h5 className="card-title mt-3" style={{ color: "#000" }}>Assidu</h5>
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                <div className="progress-bar" style={{ width: "100%", height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
