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
<<<<<<< HEAD
  /* function togggleMode - switch l'apparence de darkMode */
=======
>>>>>>> a37d6016fa8232fe6025425da53a8a649a4ea2d4
  function toggleMode() {
    if (darkMode === "light") setdarkMode("dark");
    else setdarkMode("light");
  }

  return (
    <div className={darkMode}>
      <div className="App container">
<<<<<<< HEAD
        <Header isLoggedIn={isLoggedIn} toggleMode={toggleMode} darkMode={ darkMode} />
=======
        <Header isLoggedIn={isLoggedIn} toggleMode={toggleMode} />
>>>>>>> a37d6016fa8232fe6025425da53a8a649a4ea2d4

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
