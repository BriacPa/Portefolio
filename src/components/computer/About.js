import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="containerTTC my-5">
      <h2 className="text-center">Me Concernant</h2>
      <div>
        {showMore ? (
          <>
          <div className="text-center">
            <p style={{ marginBottom: "1.5rem" }}>
            Actuellement étudiant en ingénierie informatique depuis 2020, je suis passionné par le développement logiciel, les nouvelles technologies et l'innovation. Dans le cadre de mon cursus, je suis à la recherche d’un stage de fin d'étude. Ce dernier représente pour moi une opportunité d'appliquer les compétences acquises tout en découvrant de nouveaux environnements professionnels.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Je suis particulièrement attiré par les projets collaboratifs, car j’apprécie l’entraide et le travail d’équipe, qui sont pour moi des éléments essentiels dans la réussite des projets. Ma capacité à m’adapter, à résoudre des problèmes complexes, et mon esprit créatif me permettent d'apporter des solutions innovantes et efficaces. De plus, mon parcours m'a permis de développer des compétences solides en programmation (JavaScript, Python, SQL, C++, etc.), en gestion de projet agile et en communication, ce qui me permet de contribuer de manière proactive au sein d’une équipe.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Curieux et avide de nouvelles connaissances, j’accorde une grande importance à l’apprentissage continu. Chaque nouvelle expérience est pour moi une occasion d’élargir mes compétences, d’explorer de nouvelles technologies et d’affiner ma compréhension des enjeux du développement logiciel. J’aime relever des défis et apprendre auprès de professionnels expérimentés, ce qui me permet de progresser rapidement et de m’adapter aux exigences du monde de l’ingénierie informatique.
            </p>

            <p>
              Mon objectif est de trouver un stage où je pourrai approfondir mes connaissances, participer à des projets ambitieux et renforcer mes compétences techniques, tout en apportant ma motivation et mon dynamisme à l’équipe.
            </p>
          </div>
          <br />
          <span className="toggle-arrow" onClick={() => setShowMore(false)}>
            <FaChevronUp />
          </span>
          </>
        ) : (
          <>
            <p className="text-center">
            Actuellement étudiant en ingénierie informatique depuis 2020, je suis passionné par le développement logiciel, les nouvelles technologies et l'innovation. Dans le cadre de mon cursus, je suis à la recherche d’un stage. Ce dernier représente pour moi une opportunité d'appliquer les compétences acquises tout en découvrant de nouveaux environnements professionnels.
            </p>
            <br />
            <span className="toggle-arrow" onClick={() => setShowMore(true)}>
              <FaChevronDown />
            </span>
          </>
        )}
      </div>
    </section>
  );
};

export default About;
