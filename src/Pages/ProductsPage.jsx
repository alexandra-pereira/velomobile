import { useEffect, useState } from "react";
import VeloMobile from "../components/VeloMobile";
import RemoteData from "../services/RemoteData";
import { useOutletContext } from "react-router-dom";
import Modal from "../components/Modal";
import ValidateData from "../services/ValidateData";

const ProductsPage = () => {
  const [velosMobiles, setVelosMobiles] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emptyFields, setEmptyFields] = useState({});
  //const [confirmUpade, setConfirmUpade] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  const getInputClass = (fieldName) => {
    return emptyFields[fieldName] ? "input-error" : "";
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log(`Appel du service qui va aller charger les données`);
    if (errorMsg !== undefined) {
      RemoteData.loadVelosMobiles()
        .then((remoteVelosMobiles) => {
          console.log(`remoteVelosMobiles : `, remoteVelosMobiles);
          setVelosMobiles(remoteVelosMobiles);
        })
        .catch((error) => {
          console.log(`Erreur attrapée dans useEffect : `, error);
          setErrorMsg(error.toString());
        });
    }
  }, [errorMsg]);

  const handleClickDeleteVeloMobile = (veloMobileToDelete) => {
    console.log(`Dans DeleteVeloMobile- vélomobile à été supprimé`);
    setVelosMobiles(velosMobiles.filter((vm) => vm !== veloMobileToDelete));
    RemoteData.deleteVeloMobile(veloMobileToDelete.id);
  };
  {
    /* handleSubmitFormPostVeloMobile creation de l'evenement créér un produit */
  }
  const handleSubmitFormPostVeloMobile = (event) => {
    event.preventDefault();
    console.log(`Formulaire d'ajout soumis`);
    const formData = new FormData(event.target);

    const newVeloMobile = {
      id: -1,
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
  console.log()
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
    if (message !== "") {
      console.log(message);
      return;
    }



    const copyVelosMobiles = [...velosMobiles, newVeloMobile];
    setVelosMobiles(copyVelosMobiles);
    event.target.reset();

    {
      /* delelete suppression d'un produit */
    }
    delete newVeloMobile.id;
    RemoteData.postVeloMobile(newVeloMobile)
      .then((data) => {
        console.log(`data dans products page `);
      })
      .catch((error) => {
        console.error(error);
        setErrorMsg(
          "Une erreur s'est produite lors de l'ajout d'un veloMobile"
        );
        setTimeout(() => {
          setErrorMsg("");
        }, 5000);
      });
  };

  return (
    <>
      <section className="card p-4 mt-4 bg-light">
        <h2 className="card-header mb-4 border-danger rounded-lg text-primary">
          Produits
        </h2>
        {isLoggedIn && (
          <>
            <div>
              <button className="btn btn-primary mb-2" onClick={openModal}>
                Créer un VeloMobile
              </button>
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="card">
                  <div className="card-body">
                    <form
                      onSubmit={handleSubmitFormPostVeloMobile}
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
                          className={`form-control ${getInputClass("model")}`}
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
                          className={`form-control ${getInputClass(
                            "description"
                          )}`}
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
                          name="weight"
                          className={`form-control ${getInputClass("weight")}`}
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
                          className={`form-control ${getInputClass("photo")}`}
                          required
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Envoyer
                      </button>
                    </form>
                  </div>
                </div>
              </Modal>
            </div>
          </>
        )}

        {errorMsg && <h3 className="text-danger"> {errorMsg}</h3>}
        {velosMobiles &&
          velosMobiles.map((veloMobile) => (
            <VeloMobile
              key={veloMobile.id}
              veloMobile={veloMobile}
              handleClickDeleteVeloMobile={handleClickDeleteVeloMobile}
            />
          ))}
        {/*} {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )} */}
        {/* {confirmUpade && (
          <div className="alert alert-success" role="alert">
            {confirmUpade}
          </div>
        )} */}
      </section>
    </>
  );
};

export default ProductsPage;
