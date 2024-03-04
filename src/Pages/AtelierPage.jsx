import atelier from "./../assets/photo_workshop/atelier.jpeg"
import atelier1 from "./../assets/photo_workshop/atelier1.jpeg"
import atelier2 from "./../assets/photo_workshop/atelier2.jpeg"
import atelier3 from "./../assets/photo_workshop/atelier3.jpeg"
import atelier4 from "./../assets/photo_workshop/atelier4.jpeg"
const AtelierPage = () => {
  return (
    <>
        <section className="card p-4 mt-4 bg-light">
          <h2 className="card-header mb-4 border-danger rounded-lg text-primary">
            Atelier
          </h2>
          <div className="card p-2">
            <div className="row gx-5">
              <div className="col-lg-4 col-md-6">
                <img src={atelier} className="img-fluid rounded" alt=" " />
              </div>
              <div className="col-lg-8 col-md-6">
              <p className="d-flex align-items-center justify-content-center h-100">
                Bienvenue dans l'univers artisanal de VéloMobile,
                  où la passion du vélo rencontre l'authenticité du savoir-faire français.
                  Notre atelier, niché au cœur de Mende, est bien plus qu'un simple site de production ;
                  c'est le lieu où naissent nos vélos, conçus avec minutie, passion et un engagement
                  indéfectible envers la qualité artisanale.
                </p>
              </div>
            </div>
          </div>
        
          <div className="card p-2 mt-3">
            <div className="row gx-5">
             
              <div className="col-lg-8 col-md-6">
              <p className="d-flex align-items-center justify-content-center h-100">
              Chez VéloMobile, chaque vélo est façonné à la main par nos artisans talentueux. Chaque courbe, chaque soudure, et chaque détail est méticuleusement travaillé pour créer des vélos uniques qui incarnent l'excellence française. Nous sommes fiers de dire que nos vélos sont non seulement "made in France", mais aussi "fait main", ce qui confère à chaque modèle une touche d'individualité et de soin particulier.
              </p>
            </div>
             <div className="col-lg-4 col-md-6">
                <img src={atelier1} className="img-fluid rounded" alt=" " />
              </div>
            </div>
          </div>
         
          <div className="card p-2 mt-3">
            <div className="row gx-5">
              <div className="col-lg-4 col-md-6">
                <img src={atelier2} className="img-fluid rounded" alt=" " />
              </div>
              <div className="col-lg-8 col-md-6">
               <p className="d-flex align-items-center justify-content-center h-100">
              Au-delà de l'aspect artisanal, nous sommes profondément attachés à nos valeurs écologiques. En choisissant VéloMobile, vous optez pour une démarche responsable envers l'environnement. Nous privilégions des matériaux durables, favorisons les procédés de fabrication respectueux de la planète, et nous efforçons de minimiser notre empreinte carbone à chaque étape de la production.
              </p>
              </div>
            </div>
          </div>

        <div className="card p-2 mt-3">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6">
              <img src={atelier3} className="img-fluid rounded" alt=" " />
            </div>
            <div className="col-lg-8 col-md-6">
            <p className="d-flex align-items-center justify-content-center h-100">
            Nous comprenons l'importance de la transparence et de la confiance dans le choix d'un vélo. C'est pourquoi nous ouvrons les portes de notre atelier à Mende pour vous inviter à découvrir l'envers du décor. Nos visites guidées vous permettront de plonger au cœur de notre processus de création, d'observer nos artisans à l'œuvre, et de vous immerger dans l'atmosphère unique de VéloMobile.
            </p>
            </div>
          </div>
        </div>

        <div className="card p-2 mt-3">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6">
              <img src={atelier4} className="img-fluid rounded" alt=" " />
            </div>
            <div className="col-lg-8 col-md-6">
             <p className="d-flex align-items-center justify-content-center h-100">
                En choisissant un vélo VéloMobile, vous faites bien plus qu'acquérir un
                moyen de transport. Vous adoptez un mode de vie axé sur la qualité,
                l'authenticité, et la durabilité. Rejoignez-nous à Mende pour une expérience
                immersive et laissez-vous séduire par l'essence même de VéloMobile.
                Faites un choix éclairé, choisissez un vélo qui incarne vos valeurs autant
                que les nôtres.
            </p>           
            </div>
          </div>
          </div>
       
      
      </section>
    </>
  );
};

export default AtelierPage;
