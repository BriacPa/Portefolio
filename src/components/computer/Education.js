import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Education = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);

  return (
    <section className="containerT my-5">
      <h2 className="text-center">Education</h2>

      {/* Classe préparatoire */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Classe préparatoire - technologie et sciences industrielles</h5>
          <p className="card-text">2020 - 2022</p>
          <p className="text-center">
            {showMore1 ? (
              <>
                Durant mes deux années de classe préparatoire en technologie et sciences industrielles (2020-2022), j'ai acquis une solide formation technique en abordant divers aspects de l’ingénierie, notamment en mécanique, électrotechnique, sciences industrielles et informatique. Ce programme exigeant m’a permis de développer des compétences approfondies dans la résolution de problèmes complexes, tout en m'enseignant une méthode scientifique rigoureuse basée sur l'analyse, la synthèse et l'expérimentation. En parallèle, cette préparation m'a permis de me préparer efficacement au concours CCINP, en affinant mes capacités d'adaptation et en renforçant ma gestion du temps et du stress. Cette expérience a consolidé mon esprit de travail en équipe, ma capacité à apprendre de manière autonome et mon approche méthodique des défis techniques.
                <br />
                <span className="toggle-arrow" onClick={() => setShowMore1(false)}>
                  <FaChevronUp />
                </span>
              </>
            ) : (
              <>
                Durant mes deux années de classe préparatoire en technologie et sciences industrielles (2020-2022), j'ai acquis une solide formation technique...
                <br />
                <span className="toggle-arrow" onClick={() => setShowMore1(true)}>
                  <FaChevronDown />
                </span>
              </>
            )}
          </p>
        </div>
      </div>

      {/* École d’Ingénieur du Littoral Côte d’Opale */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">École d’Ingénieur du Littoral Côte d’Opale [EILCO]</h5>
          <p className="card-text">2023 - 2025</p>
          <p className="text-center">
            {showMore2 ? (
              <>
              Au cours de mes trois années d'études (2023-2025), je me suis spécialisé dans le domaine de l'informatique, ce qui m'a offert l'opportunité d'explorer une multitude de sujets techniques et passionnants. J'ai pu développer des compétences solides en traitement d'images, en programmation orientée objet, ainsi qu'en développement web. Ces disciplines m'ont permis de comprendre les bases de la conception d'applications et de systèmes performants. En parallèle, j'ai approfondi mes connaissances en supervision des systèmes, une compétence cruciale pour assurer le bon fonctionnement et la sécurité des infrastructures. Mon parcours m'a également permis de me familiariser avec l'intelligence artificielle, en abordant des concepts essentiels tels que l'apprentissage automatique et les réseaux neuronaux. Enfin, j'ai eu l'occasion d'adopter des méthodologies agiles, qui m'ont appris à travailler de manière collaborative et à m'adapter aux besoins changeants des projets. Ces diverses expériences ont été déterminantes pour développer une approche polyvalente et rigoureuse face aux défis technologiques modernes, me préparant ainsi à une carrière dynamique et orientée vers l'innovation.                <br />
                <span className="toggle-arrow" onClick={() => setShowMore2(false)}>
                  <FaChevronUp />
                </span>
              </>
            ) : (
              <>
              Au cours de mes trois années d'études (2023-2025), je me suis spécialisé dans le domaine de l'informatique...
                <br />
                <span className="toggle-arrow" onClick={() => setShowMore2(true)}>
                  <FaChevronDown />
                </span>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Université de technologie de Poznań */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Université de technologie de Poznań (Pologne)</h5>
          <p className="card-text">2024 - 2025</p>
          <p className="text-center">
            {showMore3 ? (
              <>
              Lors de ma troisième année d'études en école d'ingénieur, j'ai eu la chance d'effectuer un semestre à l'Université Technologique de Poznań, en Pologne. Cette expérience m'a offert l'opportunité de suivre un programme académique en anglais, renforçant ainsi mes compétences linguistiques tout en découvrant une nouvelle manière d'apprendre. En parallèle des cours, j'ai pu explorer la culture polonaise, ses coutumes et son mode de vie, tout en m'intégrant dans un environnement international. Cet échange avec des étudiants de différents pays a enrichi ma vision du monde et m'a permis de développer des compétences interculturelles précieuses. Cette expérience a été aussi bien enrichissante sur le plan académique que personnel, me préparant à évoluer dans un environnement professionnel globalisé.                
                <br />
                <span className="toggle-arrow" onClick={() => setShowMore3(false)}>
                  <FaChevronUp />
                </span>
              </>
            ) : (
              <>
              Lors de ma troisième année d'études en école d'ingénieur, j'ai eu la chance d'effectuer un semestre à l'Université Technologique de Poznań, en Pologne...
                <br />
                <span className="toggle-arrow" onClick={() => setShowMore3(true)}>
                  <FaChevronDown />
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
