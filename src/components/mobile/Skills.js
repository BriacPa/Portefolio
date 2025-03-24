import React, { useState } from "react";  // Add useState here
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import Flag from 'react-world-flags';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Skills = () => {
  const allTechnicalSkills = [
    { name: "HTML", icon: "bi-braces", progress: 65 },
    { name: "CSS", icon: "bi-braces", progress: 60 },
    { name: "JavaScript", icon: "bi-braces", progress: 45 },
    { name: "React", icon: "bi-code-slash", progress: 70 },
    { name: "Node.js", icon: "bi-code-slash", progress: 65 },
    { name: "Git", icon: "bi-github", progress: 40 },
    { name: "GitHub", icon: "bi-github", progress: 85 },
    { name: "Bootstrap", icon: "bi-bootstrap", progress: 75 },
    { name: "Python", icon: "bi-patch-check", progress: 85 },
    { name: "SQL", icon: "bi-database", progress: 80 },
    { name: "NoSQL", icon: "bi-database-fill", progress: 75 },
    { name: "C++", icon: "bi-file-earmark-code", progress: 60 },
    { name: "C", icon: "bi-file-earmark-code", progress: 40 },
  ];

  // State to manage visibility of all skills
  const [showMore, setShowMore] = useState(false);
  // Determine which skills to display
  const skillsToShow = showMore ? allTechnicalSkills : allTechnicalSkills.slice(0, 4);

  return (
    <div>
      {/* Technical Skills Section */}
      <section className="containerT my-5">
        <h2 className="text-center mb-4">Technical Skills</h2>
        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
        {/* Individual Skill Cards */}
        {skillsToShow.map((skill, index) => (
            <div key={index} className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
              <div className="card-body text-center">
                <i className={`bi ${skill.icon}`} style={{ fontSize: "3rem", color: "#000" }}></i>
                <h5 className="card-title mt-3" style={{ color: "#000" }}>{skill.name}</h5>
                <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                  <div className="progress-bar" style={{ width: `${skill.progress}%`, height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
        <span 
          className="toggle-arrow" 
          onClick={() => setShowMore(!showMore)}
          style={{ cursor: "pointer", fontSize: "1.5rem" }}
        >
          {showMore ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      </section>

 {/* Languages Section */}
 <section className="containerT my-5">
        <h2 className="text-center mb-4">Languages</h2>
        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            justifyItems: "center",
            alignItems: "center",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            justifyItems: "center",
            alignItems: "center",
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
