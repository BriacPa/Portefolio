import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="container my-5">
      <h2 className="text-center">Me Concernant</h2>
      <div>
        {showMore ? (
          <>
            <p className="text-center">
              Actuellement étudiant en ingénierie informatique depuis 2020, je suis passionné par le développement logiciel, les nouvelles technologies et l'innovation. Dans le cadre de mon cursus, je suis à la recherche d’un stage de 8 à 14 semaines, prévu entre avril et août 2025. Ce stage représente pour moi une opportunité d'appliquer les compétences acquises tout en découvrant de nouveaux environnements professionnels.
            </p>
            <p className="text-center">
              Je suis particulièrement attiré par les projets collaboratifs, car j’apprécie l’entraide et le travail d’équipe, qui sont pour moi des éléments essentiels dans la réussite des projets. Ma capacité à m’adapter, à résoudre des problèmes complexes, et mon esprit créatif me permettent d'apporter des solutions innovantes et efficaces. De plus, mon parcours m'a permis de développer des compétences solides en programmation (HTML, CSS, JavaScript, Python, etc.), en gestion de projet agile et en communication, ce qui me permet de contribuer de manière proactive au sein d’une équipe.
            </p>
            <p className="text-center">
              Mon objectif est de trouver un stage où je pourrai approfondir mes connaissances, participer à des projets ambitieux et renforcer mes compétences techniques, tout en apportant ma motivation et mon dynamisme à l’équipe.
            </p>
            <br />
            <span className="toggle-arrow" onClick={() => setShowMore(false)}>
              <FaChevronUp />
            </span>
          </>
        ) : (
          <>
            <p className="text-center">
              Actuellement étudiant en ingénierie informatique depuis 2020, je suis passionné par le développement logiciel, les nouvelles technologies et l'innovation. Dans le cadre de mon cursus, je suis à la recherche d’un stage de 8 à 14 semaines, prévu entre avril et août 2025. Ce stage représente pour moi une opportunité d'appliquer les compétences acquises tout en découvrant de nouveaux environnements professionnels.
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
