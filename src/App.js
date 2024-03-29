import "./App.css";
import {Outlet} from "react-router-dom";
import {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormContact from "./components/FormContact";
import FormSubscribe from "./components/FormSubscribe";
import barre_horizontale from "./assets/barre_horizontale.png";
import carte from "./assets/carte.png";


/**
 * Gère l'affichage du composant App
 * App appelle ici le composant Title avec deux arguments sous la forme de clés/valeurs
 * en utilisant la syntaxe des balises HTML et de leurs attributs
 * @returns JSX
 */

function App() {
    /* creation de l'etat de isLoggedIn */
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    /* création de l'etat de darkMode */
    const [darkMode, setdarkMode] = useState("light");

    /* function togggleMode - switch l'apparence de darkMode */
    function toggleMode() {
        if (darkMode === "light") setdarkMode("dark");
        else setdarkMode("light");
    }

    return (
        <div className={darkMode}>
            <div className="App container">
                <Header isLoggedIn={isLoggedIn} toggleMode={toggleMode} darkMode={darkMode}/>

                <main>
                    {/* Outlet indique l'endroit où vont s'afficher les composants définis dans les routes enfants */}
                    <Outlet context={[isLoggedIn, setIsLoggedIn]}/>
                    <section>
                        <div className="card p-3 mt-2 col-md-12">
                            <div className="d-flex row justify-content-center align-items-center">
                                <div className="card col-md-6 bg-light d-flex p-1 m-2">
                                    <div className="d-flex justify-content-center">
                                        <FormSubscribe/>
                                    </div>
                                </div>
                                {/*--------------- Section "Map" ---------------*/}
                                <div className="card bg-light col-md-5 p-3 rounded m-2 ">
                                    <div className="d-flex justify-content-center">
                                        <img
                                            src={carte}
                                            alt="Carte"
                                            style={{width: "100%"}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <FormContact/>
                        </div>
                    </section>
                    {/*---------barre horizontalefr-------*/}
                    <br/>
                    <div className="d-flex justify-content-center align-items-center mt-2">
                        <img
                            src={barre_horizontale}
                            className="img-fluid "
                            alt="Responsive image"
                        />
                    </div>
                    <br/>
                </main>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
