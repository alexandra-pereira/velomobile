import RemoteData from "../services/RemoteData";
import ValidateData from "../services/ValidateData";
import React, { useState } from "react";

const FormPutVeloMobile = ({ veloMobile }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [emptyFields, setEmptyFields] = useState({});
  const [confirmUpade, setConfirmUpade] = useState("");
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
        message += " Vous devez remplir le champs  " + key + "";
        // Fonction qui vérifie le champs model
      } else if (key === "model") {
        if (newVeloMobile[key].length > 20) {
          message +=
            " Le champs " + key + " ne doit pas dépasser 20 caractères.";
        }
        if (ValidateData.checkCharacter(newVeloMobile[key])) {
          message +=
            " Le champs " + key + " contient un caractère non autorisé.";
        }
        // Fonction qui vérifie le champs description
      } else if (key === "description") {
        if (newVeloMobile[key].length > 500) {
          message +=
            " Le champs " + key + " ne doit pas dépasser 500 caractères.";
        }
        if (ValidateData.checkCharacter(newVeloMobile[key])) {
          message +=
            " Le champs " + key + " contient un caractère non autorisé.";
        }
        // Fonction qui vérifie le champs weight
      } else if (key === "weight") {
        if (newVeloMobile[key].length > 10) {
          message += " Le champs " + key + " ne doit pas dépasser 10 chiffres.";
        }
        if (ValidateData.checkWeight(newVeloMobile[key])) {
          message +=
            " Le champs " + key + " contient un caractère non autorisé.";
        }
        // Fonction qui vérifie le champs photo
      } else if (key === "photo") {
        if (newVeloMobile[key].length > 20) {
          message +=
            " Le champs " + key + " ne doit pas dépasser 500 caractères.";
        }
        if (ValidateData.checkCharacter(newVeloMobile[key])) {
          message +=
            " Le champs " + key + " contient un caractère non autorisé.";
        }
      }
    }

    let valide = "";
    if (message === "") {
      RemoteData.putVeloMobile(newVeloMobile).then((data) => {
        console.log(`data dans products page `);
        valide += "Le champ a été modifié";
        setConfirmUpade(valide);
        setTimeout(() => {
          setConfirmUpade(""); // Réinitialiser l'état à une chaîne vide
        }, 5000);
      });
    } else {
      setErrorMessage(message); // Message d'erreur du champs vide
      setEmptyFields(emptyFields); // Mise à jour l'état avec les champs vides
      console.log(message);
      // Fait disparaitre le message d'erreur aprés 5s
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
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
      {confirmUpade && (
        <div className="alert alert-success" role="alert">
          {confirmUpade}
        </div>
      )}
      <button type="submit" className="btn btn-primary">
        Envoyer
      </button>
    </form>
  );
};

export default FormPutVeloMobile;
