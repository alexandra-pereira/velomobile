const FormPutVeloMobile = ({ veloMobile, handleSubmitFormPutVeloMobile }) => {
  return (
    
    <form
      onSubmit={(event) => {
        handleSubmitFormPutVeloMobile(event);
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
          value={veloMobile.model}
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
        >
          {veloMobile.description}
        </textarea>
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
          value={veloMobile.weight}
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
          value={veloMobile.photo}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Envoyer
      </button>
    </form>
  );
};

export default FormPutVeloMobile;
