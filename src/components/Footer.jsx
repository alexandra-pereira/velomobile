
const Footer = () => {
  return (
    <footer className="container-fluid bg-dark-50">
      <div className="row">
        <div className="col-md-4">
          <h2>A propos</h2>
          <ul>
            <li><a href="#">CGU</a></li>
            <li>Conditions Générales de Ventes</li>
            <li>Données personnelles</li>
            <li>Mentions legales</li>
          </ul>
        </div>

        <div className="col-md-4">
          <h2>Site Map</h2>
          <ul>
            <li><a href="home">Home</a></li>
            <li><a href="products">Vélomobile</a></li>
            <li><a href="#">Atelier</a></li>
            <li><a href="#">Histoire</a></li>
            <li><a href="#">Showroom</a></li>
            <li><a href="#">Magazine</a></li>
          </ul>
        </div>

        <div className="col-md-4">
          <h2>Contact</h2>
          <ul>
            <li>Le veloMobile Français</li>
            <li>34 av de palavas</li>
            <li>34000 PEROLS</li>
            <li>FRANCE</li>
            <li><a href="#">contact@lvf.fr</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
