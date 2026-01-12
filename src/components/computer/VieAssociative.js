import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const VieAssociative = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  return (
    <section className="containerTC my-5">
      <h2 className="text-center">Vie Associative</h2>
      <div className="row">
        {/* First VieAssociative */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Or'eil Musicale</h5>
              <p className="card-text"><em>Chargé de communication (Club de musiciens)</em></p>
              <p className="card-text">2022 - 2023</p>
              <p className="text-center">
                {showMore1 ? (
                  <>
                    Dans le cadre de mes responsabilités au sein du club, j’ai eu l’opportunité de gérer la communication autour des diverses activités proposées. Mon rôle consistait à définir des stratégies de communication adaptées pour promouvoir les événements auprès des membres et du public cible. J’ai ainsi coordonné la création de supports visuels (affiches, flyers, publications sur les réseaux sociaux) et supervisé leur diffusion. En parallèle, j’ai organisé plusieurs événements, notamment des cours de musique et des concerts, en prenant en charge tous les aspects logistiques et opérationnels.
                    <br />
                    <span className="toggle-arrow" onClick={() => setShowMore1(false)}>
                      <FaChevronUp />
                    </span>
                  </>
                ) : (
                  <>
                    Dans le cadre de mes responsabilités au sein du club, j’ai eu l’opportunité de gérer la communication...
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

        {/* Second VieAssociative */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Bureau Des Elèves De L'EILCO</h5>
              <p className="card-text"><em>Chargé de communication (Association de vie étudiante)</em></p>
              <p className="card-text">2023 - 2024</p>
              <p className="text-center">
                {showMore2 ? (
                  <>
                  Dans le cadre de mon poste de chargé de communication au sein du Bureau des Élèves de l'EILCO pour l'année 2023-2024, j’ai été en charge de la gestion de la communication autour des activités de l’association et de l’école. Mon rôle consistait à définir et mettre en œuvre des stratégies de communication pour promouvoir les événements organisés, en veillant à toucher efficacement les étudiants et à renforcer l’image de l’établissement. J’ai coordonné la création de supports visuels (affiches, flyers, publications sur les réseaux sociaux) et supervisé leur diffusion pour assurer une visibilité optimale. En outre, j’ai joué un rôle clé dans l’organisation d’événements pouvant accueillir jusqu’à 200 personnes sur plusieurs jours, prenant en charge la logistique, la coordination des intervenants et la gestion des bénévoles. J’ai également apporté mon assistance lors de la gestion d’événements mis en place par l’école, en veillant à leur bon déroulement et en contribuant à la gestion des aspects opérationnels. Cette expérience m’a permis de développer de solides compétences en gestion de projets, communication et organisation, tout en consolidant ma capacité à travailler en équipe dans un environnement dynamique.
                    <br />
                    <span className="toggle-arrow" onClick={() => setShowMore2(false)}>
                      <FaChevronUp />
                    </span>
                  </>
                ) : (
                  <>
                    Dans le cadre de mon poste de chargé de communication au sein du Bureau des Élèves de l'EILCO...
                    <br />
                    <span className="toggle-arrow" onClick={() => setShowMore2(true)}>
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

export default VieAssociative;
