import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import FormPutVeloMobile from "./FormPutVeloMobile";
import Modal from "./Modal";

const VeloMobile = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`/images/velosmobiles/${props.veloMobile.photo}`}
            alt={props.veloMobile.model}
            className="card-img"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{props.veloMobile.model}</h3>
            <p className="card-text">{props.veloMobile.description}</p>
            <p className="card-text">{props.veloMobile.weight} kg</p>
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    props.handleClickDeleteVeloMobile(props.veloMobile);
                  }}
                  className="btn btn-danger"
                >
                  Supprimer
                </button>
                <div>
                  <button className="btn btn-warning mt-2" onClick={openModal}>
                    Modifier
                  </button>
                  <Modal isOpen={isModalOpen} onClose={closeModal}>
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
                  </Modal>
                </div>
              </>
            ) : (
              <p>Pas Connecté</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeloMobile;
