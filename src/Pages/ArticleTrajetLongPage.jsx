import velorain2 from "./../assets/photoarticle/velorain2.jpg";
import vmrural from "../assets/carousel/vmrural.jpeg";
import {Link} from "react-router-dom";

const ArticleTrajetLongPage = () => {
  return (
    <>
      <section className="card p-4 mt-4 bg-light">
        <h2 className="card-header mb-4 border-danger rounded-lg text-primary">
          Magazine
        </h2>
        <div className="card p-2">
          <h3>
            Comment me protéger de la pluie en vélo sur un trajet long : une
            approche écologique et confortable
          </h3>
          <br></br>
          <div className="card-body m-2 p-2">
          <p>
             Naviguer à travers les
          caprices de la météo peut s'avérer être un défi de taille pour les
          cyclistes. Cependant, grâce à une innovation brillante, le vélomobile
          se présente comme une solution élégante et pratique pour affronter les
          éléments tout en maintenant un niveau élevé de confort et de style.
          Dans cet article, nous explorerons comment le vélomobile émerge comme
          un choix de transport incontournable, offrant à la fois une protection
          contre les intempéries et une esthétique raffinée. 1. Fusion de
          technologie et d'esthétique : Le vélomobile allie habilement la
          technologie moderne à un design élégant, créant ainsi un moyen de
          transport qui suscite l'admiration. Doté d'une coque aérodynamique et
          d'une structure ergonomique, le vélomobile incarne l'harmonie entre
          l'efficacité fonctionnelle et l'esthétique séduisante. 
          </p>
           <img
              src={velorain2}
              className="card-img-top p-3 rounded"
              alt="..."
            />
          <p>
            intégrale contre les éléments : Contrairement aux vélos traditionnels,
          le vélomobile offre une protection intégrale contre les intempéries
          grâce à sa structure enveloppante. Que ce soit sous la pluie battante,
          le vent violent ou la chaleur écrasante, les occupants d'un vélomobile
          restent à l'abri des conditions météorologiques extrêmes, tout en
          voyageant avec style.
          
            Confort et praticité sans compromis : En plus
          de sa protection contre les intempéries, le vélomobile garantit
          également un niveau élevé de confort et de praticité. Équipé de sièges
          ergonomiques, de systèmes de ventilation et de rangements intégrés, le
          vélomobile offre une expérience de conduite agréable et sans stress,
          quel que soit le temps qu'il fait à l'extérieur. 
          
            Durabilité et
          respect de l'environnement : En tant que mode de transport respectueux
          de l'environnement, le vélomobile incarne les valeurs de durabilité et
          de préservation de la planète. En réduisant la dépendance aux
          combustibles fossiles et en favorisant une mobilité douce, le
          vélomobile contribue à la création d'un avenir plus propre et plus
          écologique pour tous.
            </p>
            <p>
            Conclusion : À une époque où la protection de
          l'environnement et le confort sont devenus des priorités majeures, le
          vélomobile se positionne comme une solution idéale pour les
          déplacements urbains et périurbains. En alliant élégance,
          fonctionnalité et durabilité, le vélomobile émerge comme un véritable
          joyau de l'ingénierie moderne, offrant une expérience de conduite
          unique et gratifiante à ceux qui osent l'adopter. Que ce soit pour
          affronter les intempéries ou simplement pour voyager avec style, le
          vélomobile est là pour répondre à vos besoins, tout en ajoutant une
          touche d'élégance à votre quotidien.
          </p>
         </div>
        </div>
      </section>
      {/*-----------Faire une précommande sur liste d'attente-----------*/}
                    <div className="col-md-5 d-flex align-items-center ml-4">
                        <div className="card bg-light d-flex justify-content-center p-3">
                            <h3 className="card-title text-center">
                                <p> S'inscrire </p>
                                <p>sur la liste d'attente</p>
                            </h3>
                            <div className="card-body d-flex justify-content-center">
                                <img src={vmrural} alt="" style={{width: "16rem"}}/>
                            </div>
                            <div className="card-body d-flex justify-content-center">
                                <Link className="btn btn-danger" style={{color: "white"}}
                                      to={`/Formulaire`}>
                                    <span>Nous rejoindre</span>
                                </Link>
                            </div>
                        </div>
                    </div>
    </>
  );
};

export default ArticleTrajetLongPage;
