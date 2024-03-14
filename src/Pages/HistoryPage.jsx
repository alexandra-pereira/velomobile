import histoire1 from "./../assets/photohistory/histoire1.jpg";
import histoire2 from "./../assets/photohistory/histoire2.jpg";
import oldvelo3 from "./../assets/photohistory/oldvelo3.jpg";
import oldvelo5 from "./../assets/photohistory/oldvelo5.jpg";
import modernvelo from "./../assets/photohistory/modernvelo.jpg";

const HistoryPage = () => {
  return (
    <>
      <section className="card p-4 mt-4 bg-light">
        <h2 className="card-header mb-4 border-danger rounded-lg text-primary">
          L'Histoire du VéloMobile
        </h2>
        <div className="card p-2">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6">
              <img src={oldvelo3} className="img-fluid rounded" alt=" " />
            </div>
            <div className="col-lg-8 col-md-6">
              <h3 className="mb-3">Concepts Précoces (années 1920-1930)</h3>
              <p className="text-justify mb-3">
                L'idée d'enfermer un vélo ou un tricycle dans une coque profilée
                a émergé dans les années 1920 et 1930. Divers inventeurs et
                ingénieurs ont expérimenté avec différents designs pour réduire
                la résistance à l'air et améliorer la vitesse et le confort.
              </p>
              <h3 className="mb-3">
                Charles Mochet et le Vélocar (années 1930-1940)
              </h3>
              <p className="text-justify mb-3">
                Charles Mochet, ingénieur et inventeur français, a joué un rôle
                crucial dans le développement du vélocar. Dans les années 1930,
                il a conçu et construit une série de tricycles fermés qu'il
                appelait "Vélocar". Les conceptions de Mochet étaient
                aérodynamiques, avec une structure légère et efficace. L'une de
                ses créations les plus notables était le "Vélocar CM-131", qui a
                attiré l'attention pour son approche innovante du transport
                propulsé par l'homme.
              </p>
            </div>
          </div>
        </div>
        <br></br>

        <div className="card p-2">
          <div className="row gx-5">
            <div className="col-lg-8 col-md-6">
              <h3 className="mb-3">
                Ère de l'après-Seconde Guerre mondiale (années 1940-1950)
              </h3>
              <p className="text-justify mb-3">
                Après la Seconde Guerre mondiale, l'intérêt pour les véhicules
                propulsés par l'homme a continué de croître, et le vélocar a
                gagné en popularité parmi les amateurs. Les conceptions de
                Mochet, ainsi que les contributions d'autres inventeurs, ont
                inspiré le développement de vélo-mobiles de différentes formes.
              </p>
              <h3 className="mb-3">Boom des années 1970 et 1980</h3>
              <p className="text-justify mb-3">
                Les années 1970 et 1980 ont connu un regain d'intérêt pour les
                vélo-mobiles, alimenté par des préoccupations environnementales,
                des crises énergétiques et un intérêt croissant pour les modes
                de transport alternatifs. Au cours de cette période, diverses
                entreprises et personnes ont expérimenté avec des designs de
                vélo-mobile, incorporant de nouveaux matériaux et technologies
                pour améliorer les performances.
              </p>
            </div>
            <div className="col-lg-4">
              <img src={oldvelo5} className="img-fluid rounded" alt=" " />
            </div>
          </div>
        </div>
        <br></br>
        <div className="card p-2">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6 order-2 order-md-1">
              <img src={modernvelo} className="img-fluid rounded" alt=" " />
            </div>
            <div className="col-lg-8 col-md-6 order-1 order-md-2">
              <h3 className="mb-3">
                Vélo-Mobiles Contemporains (années 2000 à aujourd'hui)
              </h3>
              <p className="text-justify mb-3">
                Ces dernières années, les vélo-mobiles ont continué d'évoluer.
                Les conceptions modernes intègrent souvent des matériaux légers
                tels que la fibre de carbone, une aérodynamique avancée et des
                systèmes d'entraînement efficaces. Bien que moins répandus que
                les vélos traditionnels, les vélo-mobiles ont une communauté
                dédiée d'enthousiastes qui apprécient leur efficacité, leur
                protection contre les intempéries et leur design unique.
              </p>
            </div>
          </div>

          <section>
            <p className="text-justify mb-3 pt-2">
              Aujourd'hui, les vélo-mobiles sont toujours utilisés à diverses
              fins, notamment pour les déplacements, les voyages et les
              promenades récréatives. Les conceptions continuent d'évoluer avec
              les avancées dans les matériaux et la technologie, contribuant au
              développement continu de ces véhicules propulsés par l'homme
              profilés.
            </p>
          </section>
        </div>
        <br></br>
        <div className="card p-2">
          <h3 className="mb-3">VéloMobiles une page d'histoire</h3>
          <p>
            <a href="#">cf. le journal du VeloMobile</a>
          </p>
          <div className="row">
            <div className="col">
              <img
                src={histoire1}
                className="img-fluid"
                style={{ width: "100%", height: "100%" }}
                alt=" "
              />
            </div>
            <div className="col">
              <img
                src={histoire2}
                className="img-fluid"
                style={{ width: "100%", height: "100%" }}
                alt=" "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoryPage;
