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
  const [isFormValid, setIsFormValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [creationSuccess, setCreationSuccess] = useState("");

  const handleUpdateVeloMobile = (updatedVeloMobile) => {
    setVelosMobiles(
        velosMobiles.map((vm) =>
            vm.id === updatedVeloMobile.id ? updatedVeloMobile : vm
        )
    );
  };

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
// pour le changement d'état lorsqu'on ajoute les informations de chaque champ du formulaire de création d'un velo
  const handleInputCreate = (event) => {
    const {name, value} = event.target;
    let isValid = true;

    // Effacer l'état de validation précédent
    event.target.classList.remove("is-invalid", "is-valid");

    if (ValidateData.checkCharacter(value) || ValidateData.checkIfEmpty(value) || (name === "weight" && !ValidateData.checkWeight(value))) {
      isValid = false;
      setErrorMessage(`Le champ ${name} est vide ou contient un caractère non autorisé.`);
      event.target.classList.add("is-invalid");
    } else if (((name === "model" || name === "photo") && value.length > 20)) {
      isValid = false;
      setErrorMessage(`Le champ ${name} ne peut pas dépasser 20 caractéres `)
      event.target.classList.add("is-invalid");
    } else if (name === "description" && value.length > 500){
      isValid = false;
      setErrorMessage(`Le champ ${name} ne peut pas dépasser 500 caractéres `)
      event.target.classList.add("is-invalid");
    } else if (name === "weight" && value.length > 10) {
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

  /* handleSubmitFormPostVeloMobile création de l'événement créer un produit */
  const handleSubmitFormPostVeloMobile = (event) => {
    event.preventDefault();
    console.log(`Formulaire d'ajout soumis`);
    const formData = new FormData(event.target);

    const newVeloMobile = {
      model: formData.get("model"),
      description: formData.get("description"),
      weight: formData.get("weight"),
      photo: formData.get("photo"),
    };

    console.log(newVeloMobile);

    event.target.reset();

    // création du vélo-mobile dans le serveur
    RemoteData.postVeloMobile(newVeloMobile)
        .then((data) => {
          console.log(`data dans products page `);
          // Assuming 'data' contains the new velomobile with its ID
          setVelosMobiles((currentVelosMobiles) => [...currentVelosMobiles, data]);
          setCreationSuccess("Un nouveau Velo Mobile a été bien ajouté");
          setTimeout( () => {
            setCreationSuccess("");
          }, 4000);
          // Réinitialiser l'état de validation
          setIsFormValid(false);
          // Réinitialiser la ClassList des champs de formulaire pour la soumission
          const formElements = event.target.elements;
          for (let i = 0; i < formElements.length; i++) {
            formElements[i].classList.remove("is-invalid", "is-valid");
          }

        })
        .catch((error) => {
          console.error(error);
          setErrorMsg("Une erreur s'est produite lors de l'ajout d'un veloMobile");
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
                          {errorMessage && (
                              <div className="alert alert-danger" role="alert">
                                {errorMessage}
                              </div>
                          )}
                          <div className="mb-3">
                            <label htmlFor="model" className="form-label">
                              Modèle
                            </label>
                            <input
                                type="text"
                                id="model"
                                onInput={handleInputCreate}
                                name="model"
                                className={`form-control ${getInputClass("model")}`}
                                defaultValue={""}
                                required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="description" className="form-label">
                              Description
                            </label>
                            <textarea
                                name="description"
                                onInput={handleInputCreate}
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
                                onInput={handleInputCreate}
                                id="weight"
                                name="weight"
                                className={`form-control ${getInputClass("weight")}`}
                                defaultValue={""}
                                required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="photo" className="form-label">
                              Photo
                            </label>
                            <input
                                type="text"
                                onInput={handleInputCreate}
                                id="photo"
                                name="photo"
                                className={`form-control ${getInputClass("photo")}`}
                                defaultValue={""}
                                required
                            />
                          </div>
                          <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
                            Créer
                          </button>
                        </form>
                        {creationSuccess && (
                            <div className="alert alert-success mt-3" role="alert">
                              {creationSuccess}
                            </div>
                        )}
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
                      onUpdate={handleUpdateVeloMobile}
                  />
              ))}
        </section>
      </>
  );
};

export default ProductsPage;
