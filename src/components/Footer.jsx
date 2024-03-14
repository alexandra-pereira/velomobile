
const Footer = () => {
  return (
    <footer className="container-fluid bg-dark-50">
      <div className="row">
        <div className="col-md-4">
          <h2>A propos</h2>
          <ul>
            <li><a href="cgu_cgv">CGU</a></li>
            <li><a href="legal_mentions">Mentions légales</a></li>
          </ul>
        </div>

        <div className="col-md-4">
          <h2>Site Map</h2>
          <ul>
            <li><a href="home">Home</a></li>
            <li><a href="products">Vélomobile</a></li>
            <li><a href="atelier">Atelier</a></li>
            <li><a href="history">Histoire</a></li>
            <li><a href="showroom">Showroom</a></li>
            <li><a href="magazine">Magazine</a></li>
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
