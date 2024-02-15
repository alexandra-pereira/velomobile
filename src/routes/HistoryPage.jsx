import histoire1 from "./../assets/history/histoire1.jpg";
import histoire2 from "./../assets/history/histoire2.jpg";
import oldvelo3 from "./../assets/history/oldvelo3.jpg";
import oldvelo5 from "./../assets/history/oldvelo5.jpg";
import modernvelo from "./../assets/history/modernvelo.jpg";

const HistoryPage = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-wrap">
        <article>
          <h2>Histoire du Vélo Mobile</h2>
          <br></br>
          <p className="text-justify">
            L'histoire du vélo-mobile, également appelé vélocar, remonte au
            début du XXe siècle, en particulier en France. Le concept d'un
            véhicule propulsé par la force humaine et enfermé dans une coque
            aérodynamique a gagné en popularité comme moyen d'améliorer
            l'efficacité et de protéger le cycliste des éléments.
          </p>
          <div className="container px-4 text-center">
            <div className="row gx-5">
              <div className="col-sm-4">
                <div className="p-3">
                  <img src={oldvelo3} className="img-fluid rounded" alt=" " />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="p-3">
                  <h3>Concepts Précoces (années 1920-1930)</h3>
                  <p className="text-justify">
                    L'idée d'enfermer un vélo ou un tricycle dans une coque
                    profilée a émergé dans les années 1920 et 1930. Divers
                    inventeurs et ingénieurs ont expérimenté avec différents
                    designs pour réduire la résistance à l'air et améliorer la
                    vitesse et le
                  </p>
                  <h3>Charles Mochet et le Vélocar (années 1930-1940)</h3>
                  <p className="text-justify">
                    Charles Mochet, ingénieur et inventeur français, a joué un
                    rôle crucial dans le développement du vélocar. Dans les
                    années 1930, il a conçu et construit une série de tricycles
                    fermés qu'il appelait "Vélocar". Les conceptions de Mochet
                    étaient aérodynamiques, avec une structure légère et
                    efficace. L'une de ses créations les plus notables était le
                    "Vélocar CM-131", qui a attiré l'attention pour son approche
                    innovante du transport propulsé par l'homme.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-4 text-center">
            <div className="row gx-5">
              <div className="col-sm-8">
                <div className="p-3">
                  <h3>
                    Ère de l'après-Seconde Guerre mondiale (années 1940-1950)
                  </h3>
                  <p className="text-justify">
                    Après la Seconde Guerre mondiale, l'intérêt pour les
                    véhicules propulsés par l'homme a continué de croître, et le
                    vélocar a gagné en popularité parmi les amateurs. Les
                    conceptions de Mochet, ainsi que les contributions d'autres
                    inventeurs, ont inspiré le développement de vélo-mobiles de
                    différentes formes.
                  </p>
                  <h3>Boom des années 1970 et 1980</h3>
                  <p className="text-justify">
                    Les années 1970 et 1980 ont connu un regain d'intérêt pour
                    les vélo-mobiles, alimenté par des préoccupations
                    environnementales, des crises énergétiques et un intérêt
                    croissant pour les modes de transport alternatifs. Au cours
                    de cette période, diverses entreprises et personnes ont
                    expérimenté avec des designs de vélo-mobile, incorporant de
                    nouveaux matériaux et technologies pour améliorer les
                    performances.
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="p-3"></div>
                <img src={oldvelo5} className="img-fluid rounded" alt=" " />
              </div>
            </div>
          </div>
          <div className="container px-4 text-center">
            <div className="row gx-5">
              <div className="col-sm-4">
                <div className="p-3">
                  <img src={modernvelo} className="img-fluid rounded" alt=" " />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="p-3">
                  <h3>
                    Vélo-Mobiles Contemporains (années 2000 à aujourd'hui)
                  </h3>
                  <p className="text-justify">
                    Ces dernières années, les vélo-mobiles ont continué
                    d'évoluer. Les conceptions modernes intègrent souvent des
                    matériaux légers tels que la fibre de carbone, une
                    aérodynamique avancée et des systèmes d'entraînement
                    efficaces. Bien que moins répandus que les vélos
                    traditionnels, les vélo-mobiles ont une communauté dédiée
                    d'enthousiastes qui apprécient leur efficacité, leur
                    protection contre les intempéries et leur design unique.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-justify">
            Aujourd'hui, les vélo-mobiles sont toujours utilisés à diverses
            fins, notamment pour les déplacements, les voyages et les promenades
            récréatives. Les conceptions continuent d'évoluer avec les avancées
            dans les matériaux et la technologie, contribuant au développement
            continu de ces véhicules propulsés par l'homme profilés.
          </p>
        </article>
      </div>
      <div className="px-4 container-fluid d-flex flex-wrap">
        <div className="row gx-5 mx-auto d-flex align-items-stretch">
          <div className="col-sm-6 p-3">
            <img src={histoire1} className="img-fluid h-100 " alt=" " />
          </div>
          <div className="col-sm-6 p-3">
            <img src={histoire2} className="img-fluid h-100" alt=" " />
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
