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
    <dialog ref={dialogRef} onDismiss={onClose}>
      {children}
      <button onClick={onClose}>Fermer</button>
    </dialog>
 );
};

export default Modal;