import { useOutletContext } from "react-router-dom";
import FormPutVeloMobile from "./FormPutVeloMobile";

const VeloMobile = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();
  
  
  return (
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
            <p className="card-text">{props.veloMobile.weight} kg</p>
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
                <FormPutVeloMobile veloMobile={props.veloMobile}  />
                <button
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
  );
};

export default VeloMobile;
