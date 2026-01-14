import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Experience = () => {
  const [showMore1, setShowMore1] = useState(false);
  return (
    <section className="containerT my-5">
      <h2 className="text-center">Experience</h2>
      <div className="row">
        {/* First Experience */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body" style={{ paddingLeft: "0px", paddingRight: "0px" }}>

              <h5 className="card-title">Clauger</h5>
              <p className="card-text"><em>Stagiaire Assistant ingénieur en informatique industrielle</em></p>
              <p className="card-text">2025</p>
              <p className="text-center">
                {showMore1 ? (
                  <>
                    Dans le cadre de mes responsabilités en tant qu’Assistant OT Manager chez Clauger, j’ai assuré de manière autonome la conception et la sécurisation d’environnements de machines virtuelles destinés aux équipes d’automaticiens. Mon rôle consistait à définir et mettre en œuvre des solutions permettant de fiabiliser le déploiement, l’utilisation et la maintenance des outils de développement industriel, tout en intégrant des exigences élevées en matière de cybersécurité.
					<br />
					J’ai conçu des systèmes d’installation automatisée de Windows, mis en place des mécanismes de contrôle des accès et développé des outils de supervision permettant de suivre l’état des machines virtuelles. En parallèle, j’ai développé des scripts et procédures améliorant la maintenance, la traçabilité et la robustesse des infrastructures IT/OT, en cohérence avec les contraintes réglementaires et opérationnelles du secteur industriel.
                    <br />
                    <span className="toggle-arrow" onClick={() => setShowMore1(false)}>
                      <FaChevronUp />
                    </span>
                  </>
                ) : (
                  <>
                    Dans le cadre de mes responsabilités en tant qu’Assistant OT Manager chez Clauger, j’ai assuré de manière autonome...
                    <br />
                    <span className="toggle-arrow" onClick={() => setShowMore1(true)}>
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

export default Experience;
