import RemoteData from "../services/RemoteData";
import ValidateData from "../services/ValidateData";
import React, { useState } from "react";

const FormPutVeloMobile = ({ veloMobile }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [emptyFields, setEmptyFields] = useState({});
  // Fonction qui controle l'état de mon champ
  const getInputClass = (fieldName) => {
    return emptyFields[fieldName] ? "input-error" : "";
  };
  // Fonction de modification du formaulaire 
  function handleSubmitFormPutVeloMobile(event) {
    event.preventDefault();
    console.log(`Formulaire de modification`, veloMobile);

    const formData = new FormData(event.target);

    const newVeloMobile = {
      id: veloMobile.id,
      model: formData.get("model"),
      description: formData.get("description"),
      weight: formData.get("weight"),
      photo: formData.get("photo"),
    };

    console.log(newVeloMobile);
    let message = "";
    //conditionnel pour la validation du formulaire des champs vide
    for (const key in newVeloMobile) {
      // Exclure le champ 'id' de la validation
      if (key !== "id" && ValidateData.checkIfEmpty(newVeloMobile[key])) {
        message += " le champs " + key + " est vide";
      }
    }

    if (message === "") {
      RemoteData.putVeloMobile(newVeloMobile).then((data) => {
        console.log(`data dans products page `);
      });
    } else {
      setErrorMessage(message); // Message d'erreur du champs vide
      setEmptyFields(emptyFields); // Mise à jour l'état avec les champs vides
      console.log(message);
    }
  }

  // Formulaire de modification 
  return (
    <form
      onSubmit={handleSubmitFormPutVeloMobile}
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
          className={`form-control ${getInputClass("model")}`}
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
          className={`form-control ${getInputClass("description")}`}
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
          className={`form-control ${getInputClass("weight")}`}
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
          className={`form-control ${getInputClass("photo")}`}
          defaultValue={veloMobile.photo}
          required
        />
      </div>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <button type="submit" className="btn btn-primary">
        Envoyer
      </button>
    </form>
  );
};

export default FormPutVeloMobile;
