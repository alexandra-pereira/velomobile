import RemoteData from "../services/RemoteData";
import { useOutletContext, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  const navigate = useNavigate();
  return (
    <section>
      <form
        className="card p-2 bg-light"
        onSubmit={(event) => {
          console.log(`Formulaire soumis`);
          event.preventDefault();
          // Create a FormData object from the form
          const formData = new FormData(event.target);
          console.log(`formData`, formData.entries());

          const login = formData.get("login");
          const pwd = formData.get("pwd");
          console.log(`login`, login, "pwd", pwd);
          //event.target.reset();
          // Vérification du l'utilisateur via un service
          RemoteData.isLogged(login, pwd).then((data) => {
            console.log(`data ?`, data);
            setIsLoggedIn(data);
            if (data) {
              console.log(`redirection vers la page d'accueil`);
              navigate("/products");
            }
          });
        }}
      >
        <div className="body-card">
          <h2 class="card-title d-flex justify-content-center align-items-center">
            Identification
          </h2>
          <label htmlFor="login" placeholder="login">
            Identifiant{" "}
          </label>
          <input type="text" id="login" name="login" placeholder="login" />
        </div>

        <div className="body-card">
          <label htmlFor="pwd" placeholder="password">
            Mot de passe{" "}
          </label>
          <input type="text" id="pwd" name="pwd" placeholder="password" />
        </div>

        <div className="body-card d-flex justify-content-center">
          <button className="btn btn-primary" type="submit">
            Envoyer
          </button>
        </div>
      </form>
      <br />
    </section>
  );
};

export default LoginPage;
