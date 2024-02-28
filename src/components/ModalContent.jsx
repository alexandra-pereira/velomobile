import React from 'react';
import FormPostVeloMobile from './FormPostVeloMobile';

export default function ModalContent({ closeModal, showModal }) {
 return (
    <>
      <div
        onClick={closeModal}
        className="modal-backdrop fade show"
        style={{ display: showModal ? 'block' : 'none', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      ></div>
     <div
  className={`modal d-block position-fixed top-50 start-50 translate-middle p-3 bg-light text-dark rounded`}
  style={{
    display: showModal ? 'block' : 'none',
    transform: showModal ? 'translate(-50%, -50%)' : 'translate(-50%, -150%)',
    margin: 'auto',
    maxWidth: '90%',
    maxHeight: '90%',
    overflow: 'auto'
  }}
>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Créer un Produit</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
                    
                     <FormPostVeloMobile />
          </div>
          <div className="modal-footer">
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