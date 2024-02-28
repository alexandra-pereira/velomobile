import { useEffect, useState } from "react";
import VeloMobile from "../components/VeloMobile";
import RemoteData from "../services/RemoteData";
import { useOutletContext } from "react-router-dom";
import ModalButton from "../components/ModalButton";


const ProductsPage = () => {
  const [velosMobiles, setVelosMobiles] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();



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

  const handleOpenModal = () => {
    console.log("Ouvrir la modal");
    // Logique pour ouvrir la modal
  };

  const handleClickDeleteVeloMobile = (veloMobileToDelete) => {
    console.log(`Dans DeleteVeloMobile- vélomobile à été supprimé`);
    setVelosMobiles(velosMobiles.filter((vm) => vm !== veloMobileToDelete));
    RemoteData.deleteVeloMobile(veloMobileToDelete.id);
  };
{/* handleSubmitFormPostVeloMobile creation de l'evenement créér un produit */}
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

    const copyVelosMobiles = [...velosMobiles, newVeloMobile];
    setVelosMobiles(copyVelosMobiles);
    event.target.reset();
  
 
  
  
{/* delelete suppression d'un produit */}
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
    
      <h2>Produits</h2>
      {isLoggedIn && (
        <>
          <ModalButton handleOpenModal={handleOpenModal} handleSubmitFormPostVeloMobile={handleSubmitFormPostVeloMobile} />
       
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
    </>
  );
};

export default ProductsPage;

import { useEffect, useState } from "react";
import VeloMobile from "../components/VeloMobile";
import RemoteData from "../services/RemoteData";
import { useOutletContext } from "react-router-dom";
import ModalButton from "../components/ModalButton";


  const ProductsPage = () => {
  const [velosMobiles, setVelosMobiles] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
 
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

  const handleOpenModal = () => {
    console.log("Ouvrir la modal");
    // Logique pour ouvrir la modal
  };

  const handleClickDeleteVeloMobile = (veloMobileToDelete) => {
    console.log(`Dans DeleteVeloMobile- vélomobile à été supprimé`);
    setVelosMobiles(velosMobiles.filter((vm) => vm !== veloMobileToDelete));
    RemoteData.deleteVeloMobile(veloMobileToDelete.id);
  };

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

    const copyVelosMobiles = [...velosMobiles, newVeloMobile];
    setVelosMobiles(copyVelosMobiles);
    event.target.reset();

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
      <h2>Produits</h2>
      {isLoggedIn && (
        <>
          <ModalButton
            handleOpenModal={handleOpenModal}
            handleSubmitFormPostVeloMobile={handleSubmitFormPostVeloMobile}
          />
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
    </>
  );
};

export default ProductsPage;
