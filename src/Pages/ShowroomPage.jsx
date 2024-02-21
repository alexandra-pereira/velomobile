import React from "react";
import carte from '../assets/carte.png'; // Chemin d'importation corrigé

const ShowroomPage = () => {
  return (
    <section>
      <h2>Showroom</h2>
      <p>Ici nos points d'exposition des prototypes</p>
      
      <div className="container d-flex justify-content-between mb-3">
        {/*-------------1er site-------------*/}
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={carte} alt="Card image cap"/>
          <div className="card-body">
            <h3 className="card-title">Site de Nîmes</h3>
            <p className="card-text">Site de Nîmes blabla.....</p>
          </div>
        </div>

        {/*-------------2e site-------------*/}
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={carte} alt="Card image cap"/>
          <div className="card-body">
            <h3 className="card-title">Site de Nîmes</h3>
            <p className="card-text">Site de Nîmes blabla.....</p>
          </div>
        </div>

        {/*-------------3e site-------------*/}
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={carte} alt="Card image cap"/>
          <div className="card-body">
            <h3 className="card-title">Site de Nîmes</h3>
            <p className="card-text">Site de Nîmes blabla.....</p>
          </div>
        </div>

        {/*-------------4e site-------------*/}
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={carte} alt="Card image cap"/>
          <div className="card-body">
            <h3 className="card-title">Site de Nîmes</h3>
            <p className="card-text">Site de Nîmes blabla.....</p>
          </div>
        </div>

      </div>
      
      {/*-------------Map-------------*/}
      <div className="container bg-light w-50 p-3 rounded d-flex justify-content-center mb-3">
        <img src={carte} alt="Card image cap"/>
      </div>
    </section>
  );
};

export default ShowroomPage;
