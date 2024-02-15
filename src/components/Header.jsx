import { Link } from "react-router-dom";
import logo from "./../assets/logo-lvf.png";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";
/**
 *
 *
 */
const Header = ({ isLoggedIn, toggleMode }) => {
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
    <header className="header container-fluid ">
      {/* ---------- button ecoview and loggin-------- */}
      <div className="ecoview-login container d-flex flex-row-reverse">
        <ul className="list-unstyled d-flex align-items-center gap-2">
          <li>
            <button className="btn btn-white">
              <FaUser />
              <Link to={pathLogged}>
                {isLoggedIn ? logInOutLink(true) : logInOutLink(false)}
              </Link>
            </button>
          </li>

          <li>
            <button
              className="btn btn-success"
              onClick={() => {
                toggleMode()
              }}
            >
              <IoIosLeaf />
              Eco views
            </button>
          </li>
        </ul>
      </div>

      {/* ----------container logo+navbar --------- */}
      <div className="header-custom container d-flex align-items-center">
        {/* ----------container logo--------- */}
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="Logo vélomobile - retour accueil" />
          </Link>
        </div>

        {/* ----------navbar--------- */}
        <div className="flex-grow-1 d-flex justify-content-center align-item-end">
          <nav id="nav" className={openCloseMenuState}>
            <ul className="list-unstyled d-flex align-items-center gap-3">
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
        </div>
      </div>
      {/*---------h1-------*/}
      <div className="visually-hidden">
        <h1 className="text-center">Le Velomobile Français</h1>
      </div>
    </header>
  );
};

export default Header;
