import barre_horizontale from "./../assets/barre_horizontale.png";
import vmrural from "../assets/carousel/vmrural.jpeg";
import { Link } from "react-router-dom";
import carte from "../assets/carte.png";

const Formulaire = () => {
  return (
    <section>
 <div className="card p-3 mt-2 col-md-12">
  <div className="d-flex row justify-content-center align-items-center">
    {/*---------- "S'inscrire sur la liste d'attente" ---------------- */}
    <div className="card col-md-6 bg-light d-flex p-1 m-2">
      <h3 className="card-header text-center">
        <p> S'inscrire </p>
        <p>sur la liste d'attente</p>
      </h3>
      <div className="card-body d-flex justify-content-center">
        <img src={vmrural} alt="" style={{ width: "16rem" }} />
      </div>
      <div className="card-body d-flex justify-content-center">
        <Link
          className="btn btn-danger"
          style={{ color: "white" }}
          to={`/Formulaire`}
        >
          <span>Nous rejoindre</span>
        </Link>
      </div>
    </div>
  
    {/*--------------- Section "Map" ---------------*/}
    <div className="card bg-light col-md-5 p-3 rounded m-2 ">
      <div className="d-flex justify-content-center">
              <img
                src={carte}
                alt="Carte"
                style={{ width: "100%" }}
              />
      </div>
    </div>
  </div>
</div>


      {/*--------------- Section "Formulaire" ---------------*/}
      <form className="card p-3 bg-light mt-2">
        <div className="card p-2">
          <h3 class="card-header d-flex justify-content-center align-items-center mt-2">
            Ecrivez nous
          </h3>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Entrer le nom"
          />

          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            className="form-control"
            id="firstNme"
            placeholder="Entrer le prénom"
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Entrer votre email"
          />

          <label htmlFor="description">Ecrivez nous</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
          ></textarea>
        </div>
        <div className="d-flex justify-content-end m-2">
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </div>
      </form>

      {/*---------barre horizontalefr-------*/}
      <div className="d-flex justify-content-center align-items-center mt-2">
        <img
          src={barre_horizontale}
          className="img-fluid "
          alt="Responsive image"
        />
      </div>
    </section>
  );
};

export default Formulaire;
