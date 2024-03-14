import RemoteData from "../services/RemoteData";
import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

const FormulaireConnexion = () => {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const soumettreFormulaire = async (event) => {
    event.preventDefault();
    try {
      // Vérification de l'utilisateur via un service
      const estConnecte = await RemoteData.isLogged(login, motDePasse);
      console.log("Est connecté ?", estConnecte);
      setIsLoggedIn(estConnecte);
      if (estConnecte) {
        console.log("Redirection vers la page d'accueil");
        navigate("/products");
      }
    } catch (erreur) {
      console.error("Erreur :", erreur);
    }
  };

  return (
    <section>
      <form className="card p-2 bg-light" onSubmit={soumettreFormulaire}>
        <div className="body-card">
          <h2 className="card-title d-flex justify-content-center align-items-center">
            Formulaire de connexion
          </h2>
          <label htmlFor="login">Identifiant</label>
          <input
            type="text"
            id="login"
            className="form-control"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <label htmlFor="motDePasse">Mot de passe</label>
          <input
            type="password"
            id="motDePasse"
            className="form-control"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            required
          />
        </div>
        <div className="body-card d-flex justify-content-center mt-2">
          <button className="btn btn-primary" type="submit">
            Envoyer
          </button>
        </div>
      </form>
      <br />
    </section>
  );
};

export default FormulaireConnexion;
