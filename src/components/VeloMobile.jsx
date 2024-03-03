import { useOutletContext } from "react-router-dom";
import FormPutVeloMobile from "./FormPutVeloMobile";
import FormPostVeloMobile from "./FormPostVeloMobile";
import ModalButtonCreate from "../components/ModalButton";

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

            {isLoggedIn ?
              (
                <>
                  <div className="row gap-2">
                    <button
                      onClick={() => {
                        props.handleClickDeleteVeloMobile(props.veloMobile);
                      }}
                      className="btn btn-danger"
                    >
                      Supprimer
                    </button>

                    <button
                      onClick={() => {
                        props.handleClickFormPutVeloMobile(props.veloMobile);
                      }}
                      className="btn btn-warning"
                    >
                      Modifier
                    </button>

                  </div>
                </>
              ) : (
                <p>Pas Connecté</p>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeloMobile;
