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
      {/*-----------Notre entreprise-----------*/}
      <div className="card bg-light">
        <h3 class="card-title d-flex justify-content-center align-items-cente">
          Notre Entreprise
        </h3>
        <div className="car-body m-3">
          <p>
            L'entreprise le Velomobile Français est un fabricant de vélo-mobiles
            innovant, spécialisé dans la conception et la production de
            véhicules écologiques et durables pour la mobilité urbaine. Avec une
            passion pour l'innovation et un engagement envers la durabilité,
            notre entreprise s'efforce de repousser les limites de la conception
            et de l'ingénierie pour créer des solutions de transport efficaces
            et respectueuses de l'environnement.{" "}
          </p>
          <p>
            Nos vélo-mobiles sont conçus pour offrir une expérience de conduite
            confortable, pratique et sécurisée. Dotés de technologies de pointe
            et de matériaux de haute qualité, nos produits garantissent une
            performance optimale, une faible empreinte carbone et une durabilité
            à long terme.
          </p>
          <p>
            Chez futur clients, nous croyons fermement à la promotion d'un mode
            de vie actif et durable. En tant que tel, nos vélo-mobiles sont
            conçus pour encourager l'utilisation des transports en commun,
            réduire les émissions de carbone et contribuer à la création de
            villes plus vertes et plus accessibles. Grâce à notre engagement
            envers l'innovation, la qualité et la durabilité, nous nous
            efforçons de devenir un leader mondial dans le domaine des véhicules
            écologiques, en offrant des solutions de mobilité urbaine qui
            répondent aux besoins de nos clients tout en préservant notre
            planète pour les générations futures.
          </p>

          <div className="d-flex justify-content-end">
            <Link className="btn btn-primary btn-text" to={`/products`}>
              <span>En savoir plus</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
