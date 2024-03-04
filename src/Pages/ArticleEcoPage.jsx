import veloeco from "./../assets/photoarticle/veloeco.jpeg";

const ArticleEcoPage = () => {
  return (
    <>
      <section className="card p-4 mt-4 bg-light">
        <h2 className="card-header mb-4 border-danger rounded-lg text-primary">
          Magazine
        </h2>
        <div className="card p-2">
          <h3>
            Le Vélomobile : Une Alternative Écologique à la Voiture et un
            Symbole de Mobilité Verte
          </h3>
          <br></br>
          <div className="card-body m-2 p-2">
            <p>
              À une époque où la recherche d'alternatives écologiques à la
              voiture est cruciale, le vélomobile émerge comme une solution
              innovante et respectueuse de l'environnement. En tant que symbole
              de mobilité verte, le vélomobile français incarne l'alliance
              parfaite entre durabilité, efficacité et protection contre les
              intempéries.
            </p>
             <img
              src={veloeco}
              className="card-img-top p-3 rounded"
              alt="..."
            />
            
            <h4>Le Vélomobile : Un Joyau de Mobilité Verte</h4>
            <p>
              Le vélomobile, avec son design futuriste et sa coque
              aérodynamique, est bien plus qu'un simple moyen de transport. Il
              représente une alternative écologique à la voiture, mettant en
              avant la mobilité verte et la propulsion humaine pour des trajets
              respectueux de l'environnement.
            </p>
            <h4>Mobilité Verte</h4>
            <p>
              Pédaler pour un Avenir Durable : Opter pour un vélomobile, c'est
              faire le choix d'une mobilité verte. En propulsant le véhicule par
              la force humaine, vous minimisez votre empreinte carbone,
              contribuant ainsi à la préservation de l'environnement. Le
              vélomobile incarne un moyen de transport écoresponsable pour ceux
              qui aspirent à un avenir plus durable.
            </p>
            <h4>Protection Intempéries</h4>
            <p>
              Rouler Sous la Pluie sans Compromis : Conçu pour affronter les
              caprices de la météo, le vélomobile offre une protection inégalée
              contre les intempéries. Même sous la pluie, les cyclistes peuvent
              pédaler en toute sérénité, préservant ainsi leur confort et leur
              engagement écologique.
            </p>
            <h4>Fabrication Française et Circuit Court</h4>
            <p>
              Des Valeurs Intégrées au Vélomobile : Le vélomobile français,
              souvent fabriqué à la main et privilégiant le circuit court,
              incarne des valeurs de qualité et de durabilité. En soutenant la
              fabrication locale, vous participez à la promotion d'une économie
              responsable et à la préservation de l'environnement.
            </p>
            <p>
              Conclusion : Le vélomobile se présente comme une alternative
              écologique à la voiture, offrant une mobilité verte sans compromis
              sur le confort et la protection contre les intempéries. Choisir le
              vélomobile, c'est s'engager en faveur d'un mode de vie durable et
              contribuer à façonner un avenir où la mobilité respecte notre
              planète. Que chaque tour de roue sur un vélomobile soit un acte
              vers un monde où l'écologie guide nos choix de déplacement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleEcoPage;
