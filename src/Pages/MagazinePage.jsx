import React from "react";
import { Link } from "react-router-dom";
import velorain1 from "./../assets/photoarticle/velorain1.jpg";
import velorain2 from "./../assets/photoarticle/velorain2.jpg";
import veloeco from "./../assets/photoarticle/veloeco.jpeg";

const MagazinePage = () => {
  return (
    <>
      
      <section className="card p-4 mt-4 bg-light">
        <h2 className="card-header mb-4 border-danger rounded-lg text-primary">
          Magazine
        </h2>
      <div className="d-flex flex-wrap justify-content-around">
        {/*---------card article pluie-------*/}
        <div className="card m-3" style={{ width: "20rem" }}>
          <img src={velorain1} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h3 className="card-title">
              Un vélo sous la pluie en toute protection
            </h3>
            <p className="card-text">
              Dans le monde en constante évolution de la mobilité, une solution
              écoresponsable émerge pour défier les intempéries tout en offrant
              une alternative à la voiture : le vélo sous la pluie, protégé par
              le vélomobile. Plus qu'un simple moyen de transport, le vélomobile
              français, fabriqué avec soin et pensé pour des longes distances,
              incarne la mobilité verte et durable.
            </p>
            <Link className="btn btn-primary mx-auto mt-3 text-center" to={`/article_pluie`}>
              <span>Lire la suite</span>
            </Link>
          </div>
        </div>
        {/*---------card article trajet long-------*/}
        <div className="card m-3" style={{ width: "20rem" }}>
          <img src={velorain2} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h3 className="card-title">
              Comment me protéger de la pluie en vélo sur un trajet long : une
              approche écologique et confortable
            </h3>
            <p className="card-text">
              Pédaler sur de longues distances peut être une aventure
              gratifiante, mais les prévisions de pluie peuvent sembler
              décourageantes. Cependant, avec les bonnes astuces et équipements,
              vous pouvez transformer un trajet long sous la pluie en une
              expérience écologique et confortable.
            </p>
            <Link className="btn btn-primary" to={`/article_trajet_long`}>
              <span>Lire la suite</span>
            </Link>
          </div>
        </div>
        {/*---------card article eco-------*/}
        <div className="card m-3" style={{ width: "20rem" }}>
          <img src={veloeco} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h3 className="card-title">
              Le Vélomobile : Une Alternative Écologique à la Voiture et un
              Symbole de Mobilité Verte
            </h3>
            <p className="card-text">
              À une époque où la recherche d'alternatives écologiques à la
              voiture est cruciale, le vélomobile émerge comme une solution
              innovante et respectueuse de l'environnement. En tant que symbole
              de mobilité verte, le vélomobile français incarne l'alliance
              parfaite entre durabilité, efficacité et protection contre les
              intempéries.
            </p>
            <Link className="btn btn-primary" to={`/article_eco`}>
              <span>Lire la suite</span>
            </Link>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default MagazinePage;
