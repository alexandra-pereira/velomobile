import { Link } from "react-router-dom";
import logo from "./../assets/logo-lvf.png";
import { useState } from "react";

const Header = ({ isLoggedIn }) => {
  const [openCloseMenuState, setOpenCloseMenuState] = useState("inactive");
  let pathLogged = isLoggedIn ? "/logout" : "/login";
  function logInOutLink(login) {
    if (login) {
      return (
        <>
          <span> Déconnexion</span>
        </>
      );
    } else
      return (
        <>
          <span> Connexion</span>
        </>
      );
  }
  function openCloseMenu() {
    const classAction =
      openCloseMenuState === "inactive" ? "active" : "inactive";
    console.log(`dans openCloseMenu`, classAction);
    setOpenCloseMenuState(classAction);
  }
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} alt="Logo vélomobile - retour accueil" />
      </Link>
      <nav id="nav" className={openCloseMenuState}>
        <ul className="mt-4">
          <li className="products-link" onClick={openCloseMenu}>
            <Link to={`/products`}>
              <span>Produits</span>
            </Link>
          </li>

          <li className="products-link" onClick={openCloseMenu}>
            <Link to={`/products`}>
              <span>Produits</span>
            </Link>
          </li>

          <li className="login-out-link" onClick={openCloseMenu}>
            <Link to={pathLogged}>
              {isLoggedIn ? logInOutLink(true) : logInOutLink(false)}
            </Link>
          </li>
        </ul>
        <div id="icons" onClick={openCloseMenu}></div>
      </nav>
      <h1>Vélomobile : l'alternative à la voiture</h1>
    </header>
  );
};

export default Header;
