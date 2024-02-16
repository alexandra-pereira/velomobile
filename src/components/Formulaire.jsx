const Formulaire = () => {
  return (
    <form className="card p-2">
      <div className="body-card">
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
        <label htmlFor="description">Ecrivez nous</label>
        <textarea className="form-control" id="description" rows="3"></textarea>
      </div>
      <br />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <br />
    </form>
  );
};

export default Formulaire;
