import React from "react";
import Carousel from "../components/Carousel";
import vmrural from "../assets/carousel/vmrural.jpeg";
import vmsportif from "../assets/carousel/vmsportif.jpeg";
import { Link } from "react-router-dom";

const HomePage = () => {
  const images = [
    { src: vmrural, alt: " " },
    { src: vmsportif, alt: " " },
  ];

  return (
    <div>
      <h2>Home page</h2>
      {/*-----------carousel-----------*/}
      <Carousel images={images} />
      <br></br>

      <div className="container d-flex align-content-items">
        <div className="row">
          {/*-----------Notre entreprise-----------*/}
          <div className="col-md-9 d-flex align-items-stretch">
            <div className="card bg-light">
              <h3 class="card-title d-flex justify-content-center align-items-center">
                Notre Entreprise
              </h3>
              <div className="card-body m-3">
                <p>
                  L'entreprise le Velomobile Français est un fabricant de
                  vélo-mobiles innovant, spécialisé dans la conception et la
                  production de véhicules écologiques et durables pour la
                  mobilité urbaine. Avec une passion pour l'innovation et un
                  engagement envers la durabilité, notre entreprise s'efforce de
                  repousser les limites de la conception et de l'ingénierie pour
                  créer des solutions de transport efficaces et respectueuses de
                  l'environnement.{" "}
                </p>
                <p>
                  Nos vélo-mobiles sont conçus pour offrir une expérience de
                  conduite confortable, pratique et sécurisée. Dotés de
                  technologies de pointe et de matériaux de haute qualité, nos
                  produits garantissent une performance optimale, une faible
                  empreinte carbone et une durabilité à long terme.
                </p>

                <div className="d-flex justify-content-end">
                  <Link className="btn btn-primary btn-text" to={`/products`}>
                    <span>En savoir plus</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/*-----------Faire une précommande sur liste d'attente-----------*/}
          <div className="col-md-3 d-flex align-items-center">
            <div className="card bg-light d-flex flex-column justify-content-center">
              <h3 class="card-title text-center">
                S'inscrire sur la liste d'attente
              </h3>
              <div className="card-body d-flex justify-content-center">
                <Link className="btn btn-danger" to={`/products`}>
                  <span>Nous rejoindre</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
