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
        <div className="card-body" style={{ paddingLeft: "0px", paddingRight: "0px" }}>

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
        <div className="card-body" style={{ paddingLeft: "0px", paddingRight: "0px" }}>

          <h5 className="card-title">École d’Ingénieur du Littoral Côte d’Opale [EILCO]</h5>
          <p className="card-text">2023 - 2025</p>
          <p className="text-center">
            {showMore2 ? (
              <>
                Lors de ces trois années d’études (2023-2025) j’ai pu me spécifier en informatique. J’ai donc pu me familiariser avec différents sujets tels que : Le traitement d’images, la Programmation orientée objet, le développement web, la supervision, l’IA, l’agilité...
                <br />
                <span className="toggle-arrow" onClick={() => setShowMore2(false)}>
                  <FaChevronUp />
                </span>
              </>
            ) : (
              <>
                Lors de ces trois années d’études (2023-2025) j’ai pu me spécifier en informatique...
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
        <div className="card-body" style={{ paddingLeft: "0px", paddingRight: "0px" }}>

          <h5 className="card-title">Université de technologie de Poznań (Pologne)</h5>
          <p className="card-text">2024 - 2025</p>
          <p className="text-center">
            {showMore3 ? (
              <>
                Au cours de ma troisième année d’étude en école d’ingénieur, j’ai effectué un semestre en Pologne à l’Université Technologique de Poznań. Cela m’a permis de suivre un cursus dispensé en anglais. J’ai aussi eu l’opportunité de découvrir la culture polonaise et d’échanger avec des étudiants de divers horizons.
                <br />
                <span className="toggle-arrow" onClick={() => setShowMore3(false)}>
                  <FaChevronUp />
                </span>
              </>
            ) : (
              <>
                Au cours de ma troisième année d’étude en école d’ingénieur, j’ai effectué un semestre en Pologne...
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
