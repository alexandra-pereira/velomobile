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

  {
    /* ----------burger close--------- */
  }
  function openCloseMenu() {
    const classAction =
      openCloseMenuState === "inactive" ? "active" : "inactive";
    console.log(`dans openCloseMenu`, classAction);
    setOpenCloseMenuState(classAction);
  }
  return (
    <header className="container-fluid d-flex ">
      {/* ----------logo--------- */}
      <Link to={"/"}>
        <img src={logo} alt="Logo vélomobile - retour accueil" />
      </Link>
      {/* ----------menu--------- */}
      <nav id="nav" className={openCloseMenuState}>
        <ul className="mt-4">
          <li className="home-link" onClick={openCloseMenu}>
            <Link to={`/home`}>
              <span>Home</span>
            </Link>
          </li>

          <li className="products-link" onClick={openCloseMenu}>
            <Link to={`/products`}>
              <span>VeloMobile</span>
            </Link>
          </li>

          <li className="atelier-link" onClick={openCloseMenu}>
            <Link to={`/atelier`}>
              <span>Atelier</span>
            </Link>
          </li>

          <li className="history-link" onClick={openCloseMenu}>
            <Link to={`/history`}>
              <span>Histoire</span>
            </Link>
          </li>

          <li className="showroom-link" onClick={openCloseMenu}>
            <Link to={`/showroom`}>
              <span>Showroom</span>
            </Link>
          </li>

          <li className="magazine-link" onClick={openCloseMenu}>
            <Link to={`/magazine`}>
              <span>Magazine</span>
            </Link>
          </li>
        </ul>

        <div id="icons" onClick={openCloseMenu}></div>
      </nav>

      {/* ----------buton black&white view an buton login--------- */}
      <div className="bwl">
        <ul>
          <li className="login-out-link" onClick={openCloseMenu}>
            <Link to={pathLogged}>
              {isLoggedIn ? logInOutLink(true) : logInOutLink(false)}
            </Link>
          </li>

          <li className="bk-wh-link" onClick={openCloseMenu}>
            <Link to="bla">
              <span>Eco views</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
