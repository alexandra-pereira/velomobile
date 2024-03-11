import React, { useState, useEffect } from "react";
import FormPostVeloMobile from "./FormPostVeloMobile";
import Formulaire from './Formulaire';

export default function ModalContent({
  closeModal,
  showModal,
  handleSubmitFormPostVeloMobile,
})

{
  const [msg, setMsg] = useState("");

  // Fonction pour gérer la validation du produit
  const handleProductValidation = () => {
    // Mettre à jour le message
    setMsg("Le produit a été validé avec succès !");
    // Fermer la modal
    closeModal();
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false); // Réinitialise l'état après 5 secondes
      }, 5000);
      return () => clearTimeout(timer); // Nettoyez le timer si le composant est démonté
    }
 }, [isSubmitted]);




  
  return (
    <>
      <div
        onClick={closeModal}
        className="modal-backdrop fade show"
        style={{
          display: showModal ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(3, 34, 56, 0.5)",
        }}
      ></div>
      <div
        className={`modal d-block position-fixed top-50 start-50 translate-middle p-3 bg-light text-dark rounded d-flex justify-content-center z-3`}
        style={{
          display: showModal ? "block" : "none",
          transform: showModal
            ? "translate(-50%, -50%)"
            : "translate(-50%, -150%)",
          margin: "auto",
          maxWidth: "90%",
          maxHeight: "90%",
          overflow: "auto",
          width: "40rem",
          height: "auto",
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Créer un Produit</h5>
               
            {/* Fermer la modale */}
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>

          <div className="modal-body">
            <FormPostVeloMobile
              handleSubmitFormPostVeloMobile={handleSubmitFormPostVeloMobile}
            />
          </div>
          
          <div className="modal-footer">
        
            {/* Fermer la modale */}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
