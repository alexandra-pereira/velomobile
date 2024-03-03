import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalContentCreate from "./ModalContent";
import FormPostVeloMobile from "./FormPostVeloMobile";

export default function ModalButton({ handleSubmitFormPostVeloMobile }) {
  const [showModal, setShowModal] = useState(false);

 return (
   <>
     <button
       className="btn btn-primary mx-auto mb-2"
       onClick={() => setShowModal(true)}
     >
       Créer un vélomobile
     </button>
     {showModal &&
       createPortal(
         <div>
           <ModalContentCreate
             closeModal={() => setShowModal(false)}
             handleSubmitFormPostVeloMobile={handleSubmitFormPostVeloMobile}
           />
           <FormPostVeloMobile
             handleSubmitFormPostVeloMobile={handleSubmitFormPostVeloMobile}
           />
         </div>,
         document.body
       )}
   </>
 );
}
