const FormPostVeloMobile = ({ handleSubmitFormPostVeloMobile }) => {
  
  return (
    <div className="card" >
      <div className="card-body">
        <form
          onSubmit={(event) => {
            handleSubmitFormPostVeloMobile(event);
          }}
          action=""
          className="needs-validation"
          noValidate
        >
          <div className="mb-3">
            <label htmlFor="model" className="form-label">
              Modèle
            </label>
            <input
              type="text"
              id="model"
              name="model"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              cols="30"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">
              Poids
            </label>
            <input
              type="text"
              id="weight"
              name="poids"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="photo" className="form-label">
              Photo
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPostVeloMobile;
