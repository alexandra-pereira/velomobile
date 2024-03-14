import React, { useRef, useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
 const dialogRef = useRef(null);

 useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
 }, [isOpen]);

 return (
     <dialog className="border border-1 rounded" style={{ width: "35em" }} ref={dialogRef} onDismiss={onClose}>
      {children}
      <button className="btn btn-danger mt-2" onClick={onClose}>Fermer</button>
    </dialog>
 );
};

export default Modal;