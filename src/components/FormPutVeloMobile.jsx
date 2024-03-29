import RemoteData from "../services/RemoteData";
import ValidateData from "../services/ValidateData";
 
const FormPutVeloMobile = ({ veloMobile }) => {
  function handleSubmitFormPutVeloMobile(event) {
    event.preventDefault();
    console.log(`Formulaire de modification`, veloMobile);
    // const formData = new FormData(event.target);
 
    const formData = new FormData(event.target);
 
    const newVeloMobile = {
      id: veloMobile.id,
      model: formData.get("model"),
      description: formData.get("description"),
      weight: formData.get("weight"),
      photo: formData.get("photo"),
    };
 
    console.log(newVeloMobile);
    //formData form modifé
    //formdata ajoute l'id de l'ancien "veloMobile"
    let message = "";
    //conditionnel pour la validation du formulaire
    //on boucle sur les key de newVeloMobile et on ne prend pas l'id 
 for (const key in newVeloMobile) {
   if (key !== "id")
   {
     if (ValidateData.checkIfEmpty(newVeloMobile[key]))
     {
      message += `Le champ ${key} est vide`;
      break;
      }
   } else{
     RemoteData.putVeloMobile(newVeloMobile).then((data) =>
     {
      console.log(`Data dans la page Products: `, data);
     }
    );}
}

  }
 
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
          defaultValue={veloMobile.model}
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
          name="weight"
          className="form-control"
          defaultValue={veloMobile.weight}
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
          defaultValue={veloMobile.photo}
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