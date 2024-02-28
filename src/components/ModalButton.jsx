import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import FormPostVeloMobile from "./FormPostVeloMobile";

export default function ModalButton({ handleSubmitFormPostVeloMobile }) {
  const [showModal, setShowModal] = useState(false);

  console.log("handle:", handleSubmitFormPostVeloMobile);
  return (
    <>
      <button
        className="btn btn-primary mx-auto"
        onClick={() => setShowModal(true)}
      >
        Créer un Velomobile
      </button>
      {showModal &&
        createPortal(
          <div>
            <ModalContent
              closeModal={() => setShowModal(false)}
              handleSubmitFormPostVeloMobile={handleSubmitFormPostVeloMobile}
            />
            <FormPostVeloMobile handleSubmitFormPostVeloMobile={handleSubmitFormPostVeloMobile} />
          </div>,
          document.body
        )}
    </>
  );
}
