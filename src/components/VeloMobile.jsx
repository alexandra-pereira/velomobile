import { useOutletContext } from "react-router-dom";
import FormPutVeloMobile from "./FormPutVeloMobile";

const VeloMobile = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  
  
  return (
<<<<<<< HEAD
    <section>
      <h3>{props.veloMobile.model}</h3>
      {isLoggedIn && (
        <>
          <button
            onClick={() => {
              props.handleSubmitFormPutVeloMobile(props.veloMobile);
            }}
            className="btn btn-warning"
          >
            Modifier
          </button>

          <button
            onClick={() => {
              props.handleClickDeleteVeloMobile(props.veloMobile);
            }}
            className="btn btn-danger"
          >
            Supprimer
          </button>
        </>
      )}
      <FormPutVeloMobile veloMobile={props.veloMobile} />

      <img src={`/images/velosmobiles/${props.veloMobile.photo}`} alt="" />
      <p>{props.veloMobile.description}</p>
    </section>
=======
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`/images/velosmobiles/${props.veloMobile.photo}`}
            alt={props.veloMobile.model}
            className="card-img"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{props.veloMobile.model}</h3>
            <p className="card-text">{props.veloMobile.description}</p>
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    props.handleClickDeleteVeloMobile(props.veloMobile);
                  }}
                  className="btn btn-danger"
                >
                  Supprimer
                </button>
                <FormPutVeloMobile veloMobile={props.veloMobile} />
                <button
                  onClick={() => {
                    props.handleClickUpdateVeloMobile(props.veloMobile);
                  }}
                  className="btn btn-warning"
                >
                  Modifier
                </button>
              </>
            ) : (
              <p>Pas Connecté</p>
            )}
          </div>
        </div>
      </div>
    </div>
>>>>>>> 53ac619cee3c900b512bb8489dd090fd31a512eb
  );
};

export default VeloMobile;
<<<<<<< HEAD

=======
>>>>>>> 53ac619cee3c900b512bb8489dd090fd31a512eb
