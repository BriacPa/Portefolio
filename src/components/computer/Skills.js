import React, { useState } from "react"; // Add useState here
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
    { name: "GitHub", icon: "bi-github", progress: 85 },
    { name: "Bootstrap", icon: "bi-bootstrap", progress: 75 },
    { name: "Python", icon: "bi-patch-check", progress: 85 },
    { name: "SQL", icon: "bi-database", progress: 80 },
    { name: "NoSQL", icon: "bi-database-fill", progress: 75 },
    { name: "C++", icon: "bi-file-earmark-code", progress: 60 },
    { name: "C", icon: "bi-file-earmark-code", progress: 40 },
    { name: "Java", icon: "bi-file-earmark-code", progress: 20 },
  ];
  
  const allLanguages = [
    { name: "Anglais", flag: "GB", progress: 90 },
    { name: "Espagnol", flag: "ES", progress: 40 },
    { name: "Polonais", flag: "PL", progress: 5 },
  ];
  
  const allOtherSkills = [
    { name: "Sociable", icon: "bi-person-check", progress: 100 },
    { name: "Créatif", icon: "bi-lightbulb", progress: 75 },
    { name: "Assidu", icon: "bi-check-circle", progress: 100 },
    { name: "Organisé", icon: "bi-calendar-check", progress: 85 },
    { name: "Adaptable", icon: "bi-arrow-repeat", progress: 100 },
    { name: "Travail d'équipe", icon: "bi-person-lines-fill", progress: 95 },
    { name: "Résolution de problèmes", icon: "bi-lightbulb", progress: 75 },
    { name: "Leadership", icon: "bi-person-badge", progress: 75 },
    { name: "Pensée critique", icon: "bi-puzzle", progress: 70 },
    { name: "Communication", icon: "bi-chat-left", progress: 85 },
    { name: "Gestion du temps", icon: "bi-clock", progress: 90 },
    { name: "Multitâche", icon: "bi-arrow-up-right-circle", progress: 75 },
    { name: "Gestion des conflits", icon: "bi-patch-check", progress: 100 },
    { name: "Souci du détail", icon: "bi-check-circle", progress: 100 },
    { name: "Créativité", icon: "bi-brush", progress: 90 },
    { name: "Négociation", icon: "bi-handshake", progress: 70 },
    { name: "Motivation", icon: "bi-person-fill", progress: 85 },
  ];
  
  // Function to sort by progress (desc) and name (asc)
  const sortSkills = (skills) => {
    return skills.sort((a, b) => {
      if (b.progress === a.progress) {
        return a.name.localeCompare(b.name); // If progress is equal, sort alphabetically
      }
      return b.progress - a.progress; // Sort by progress in descending order
    });
  };
  
  // Sorting each category
  const sortedTechnicalSkills = sortSkills(allTechnicalSkills);
  const sortedLanguages = sortSkills(allLanguages);
  const sortedOtherSkills = sortSkills(allOtherSkills);
  
  console.log("Technical Skills:", sortedTechnicalSkills);
  console.log("Languages:", sortedLanguages);
  console.log("Other Skills:", sortedOtherSkills);
  

  // State to manage visibility of all skills
  const [showMoreTechSkills, setShowMoreTechSkills] = useState(false);
  const [showMoreLanguages, setShowMoreLanguages] = useState(false);
  const [showMoreOtherSkills, setShowMoreOtherSkills] = useState(false);

  // Determine which skills to display
  const techSkillsToShow = showMoreTechSkills ? allTechnicalSkills : allTechnicalSkills.slice(0, 4);
  const languagesToShow = showMoreLanguages ? allLanguages : allLanguages.slice(0, 4);
  const otherSkillsToShow = showMoreOtherSkills ? allOtherSkills : allOtherSkills.slice(0, 4);

  return (
    <div>
      {/* Technical Skills Section */}
      <section className="containerT my-5">
        <h2 className="text-center mb-4">Compétences Technique</h2>
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
          {techSkillsToShow.map((skill, index) => (
<div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628", display: "flex", flexDirection: "column", height: "160px" }}>
              <div className="card-body text-center" style={{ flex: 1, paddingBottom: "0px" }}>
                <i className={`bi ${skill.icon}`} style={{ fontSize: "3rem", color: "#000" }}></i>
                <h5 className="card-title mt-3" style={{ color: "#000" }}>{skill.name}</h5>
              </div>

              {/* Progress Bar */}
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "0px" }}>
                <div className="progress-bar" style={{ width: `${skill.progress}%`, height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <span
            className="toggle-arrow"
            onClick={() => setShowMoreTechSkills(!showMoreTechSkills)}
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
          >
            {showMoreTechSkills ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
      </section>

      {/* Other Skills Section */}
      <section className="containerT my-5">
        <h2 className="text-center mb-4">Autres Compétences</h2>
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
          {/* Individual Other Skill Cards */}
          {otherSkillsToShow.map((skill, index) => (
            <div className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628", display: "flex", flexDirection: "column", height: "160px" }}>
              <div className="card-body text-center" style={{ flex: 1, paddingBottom: "0px" }}>
                <i className={`bi ${skill.icon}`} style={{ fontSize: "3rem", color: "#000" }}></i>
                <h5 className="card-title mt-3" style={{ color: "#000" }}>{skill.name}</h5>
              </div>

              {/* Progress Bar */}
              <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "0px" }}>
                <div className="progress-bar" style={{ width: `${skill.progress}%`, height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <span
            className="toggle-arrow"
            onClick={() => setShowMoreOtherSkills(!showMoreOtherSkills)}
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
          >
            {showMoreOtherSkills ? <FaChevronUp /> : <FaChevronDown />}
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
          {languagesToShow.map((language, index) => (
            <div key={index} className="skill-card card" style={{ width: "200px", backgroundColor: "#e0a628" }}>
              <div className="card-body text-center">
                <Flag code={language.flag} style={{ width: "50px", height: "35px" }} />
                <h5 className="card-title mt-3" style={{ color: "#000" }}>{language.name}</h5>
                <div className="progress-bar-container" style={{ width: "100%", height: "10px", backgroundColor: "#f0bc4d", borderRadius: "5px", marginTop: "10px" }}>
                  <div className="progress-bar" style={{ width: `${language.progress}%`, height: "100%", backgroundColor: "#000000", borderRadius: "5px" }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <span
            className="toggle-arrow"
            onClick={() => setShowMoreLanguages(!showMoreLanguages)}
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
          >
          </span>
        </div>
      </section>

    </div>
  );
};

export default Skills;
