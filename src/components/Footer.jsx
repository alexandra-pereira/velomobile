import "./../sass/footer.scss";

const Footer = () => {
  return (
    <footer className="container-fluid d-flex-wrap">
      <div className="container bg-primary">
        <ul>
          <h3>A propos</h3>
          <li>
            <a href="#">CGU</a>
          </li>
          <li>Conditions Générales de Ventes</li>
          <li>Données personnelles</li>
          <li>Mentions legales</li>
        </ul>
      </div>

      <div className="container">
        <ul>
          <h3>Site Map</h3>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="products">Vélomobile</a>
          </li>
          <li>
            <a href="#">Atelier</a>
          </li>
          <li>
            <a href="#">Histoire</a>
          </li>
          <li>
            <a href="#">Showroom</a>
          </li>
          <li>
            <a href="#">Magazine</a>
          </li>
        </ul>
      </div>

      <div className="container">
        <ul>
          <h3>Contact</h3>
          <li>Le veloMobile Français</li>
          <li>34 av de palavas</li>
          <li>34000 PEROLS</li>
          <li>FRANCE</li>
          <li>
            <a href="#">contact@lvf.fr</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;