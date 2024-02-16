import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Formulaire from "./components/Formulaire";
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
        <Header isLoggedIn={isLoggedIn} toggleMode={toggleMode} darkMode={ darkMode} />

        <main>
          {/* Outlet indique l'endroit où vont s'afficher les composants définis dans les routes enfants */}
          <Outlet context={[isLoggedIn, setIsLoggedIn]} />
          <Formulaire />
          <br />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
