import RemoteData from "../services/RemoteData";
import ValidateData from "../services/ValidateData";
import React, { useState } from "react";

const FormPutVeloMobile = ({ veloMobile, onUpdate }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmUpdate, setConfirmUpdate] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [emptyFields, setEmptyFields] = useState({
    model: false,
    description: false,
    weight: false,
    photo: false,
  });

// pour le changement d'état lorsqu'on change les informations de chaque champ du formulaire de mise à jour du velo
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    let isValid = true;

    // Effacer l'état de validation précédent
    event.target.classList.remove("is-invalid", "is-valid");

    if (ValidateData.checkCharacter(value) || ValidateData.checkIfEmpty(value)  || (name === "weight" && !ValidateData.checkWeight(value))) {
      isValid = false;
      setErrorMessage(`Le champ ${name} est vide ou contient un caractère non autorisé.`);
      event.target.classList.add("is-invalid");
    } else if (((name === "model" || name === "photo") && value.length > 20)) {
      isValid = false;
      setErrorMessage(`Le champ ${name} ne peut pas dépasser 20 charactéres `)
      event.target.classList.add("is-invalid");
    } else if (name === "description" && value.length > 500){
      isValid = false;
      setErrorMessage(`Le champ ${name} ne peut pas dépasser 500 charactéres `)
      event.target.classList.add("is-invalid");
    } else if (name === "weight"  && value.length > 10) {
      isValid = false;
      setErrorMessage(`Le champ ${name} ne peut pas dépasser 10 chiffres `)
      event.target.classList.add("is-invalid");
    } else {
      isValid = true;
      event.target.classList.add("is-valid");
      // Réinitialiser le message d'erreur lorsque l'entrée est valide.
      setErrorMessage("");
    }
    // Mettre à jour l'état de validité du formulaire.
    setIsFormValid(isValid);
  };

  const getInputClass = (fieldName) => {
    return emptyFields[fieldName] ? "input-error" : "";
  };

  const handleSubmitFormPutVeloMobile = (event) => {
    event.preventDefault();

    //if (!isFormValid) {
    //  setErrorMessage("Veuillez corriger les erreurs dans le formulaire.");
    //  return;
    //}

    const formData = new FormData(event.target);
    const newVeloMobile = {
      id: veloMobile.id,
      model: formData.get("model"),
      description: formData.get("description"),
      weight: formData.get("weight"),
      photo: formData.get("photo"),
    };

// création du vélo-mobile dans le serveur
    RemoteData.putVeloMobile(newVeloMobile)
        .then((data) => {
          setConfirmUpdate(`Le modèle ${newVeloMobile.model} a été bien modifié.`);
          setTimeout( () => {
            setConfirmUpdate("");
          }, 4000);
          onUpdate(data);
          // Réinitialiser l'état de validation pour la soumission
          setIsFormValid(false);
          // Réinitialiser la ClassList des champs de formulaire
          const formElements = event.target.elements;
          for (let i = 0; i < formElements.length; i++) {
            formElements[i].classList.remove("is-invalid", "is-valid");
          }

        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          setErrorMessage("Une erreur s'est produite lors de la soumission du formulaire.");
        });
  };


  return (
      <form onSubmit={handleSubmitFormPutVeloMobile} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="model" className="form-label">
            Modèle
          </label>
          <input
              type="text"
              id="model"
              name="model"
              className={`form-control ${getInputClass("model")}`}
              onInput={handleInputChange}
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
              onInput={handleInputChange}
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
              onInput={handleInputChange}
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
              onInput={handleInputChange}
              name="photo"
              className={`form-control ${getInputClass("photo")}`}
              defaultValue={veloMobile.photo}
              required
          />
        </div>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        {confirmUpdate && <div className="alert alert-success">{confirmUpdate}</div>}
        <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
          Actualiser
        </button>
      </form>
  );
};

export default FormPutVeloMobile;
