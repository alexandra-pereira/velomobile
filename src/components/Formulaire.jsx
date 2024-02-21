import barre_horizontale from "./../assets/barre_horizontale.png";

const Formulaire = () => {
  return (
    <section>
      <form className="card p-2 bg-light">
        <div className="body-card ">
          <h3 class="card-title d-flex justify-content-center align-items-center">
            Ecrivez nous
          </h3>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Entrer le nom"
          />
        </div>

        <div className="body-card">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            className="form-control"
            id="firstNme"
            placeholder="Entrer le prénom"
          />
        </div>

        <div className="body-card">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Entrer votre email"
          />
        </div>
        <br></br>
        <div className="body-card">
          <label htmlFor="description">Ecrivez nous</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
          ></textarea>
        </div>
        <br />
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </div>

        <br />
      </form>
      {/*---------barre horizontalefr-------*/}
      <div className="d-flex justify-content-center align-items-center">
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
