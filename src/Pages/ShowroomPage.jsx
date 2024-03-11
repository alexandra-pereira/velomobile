import React from "react";
// import Map  from "../components/Map";

import carte from '../assets/carte.png'; 
import site1 from '../assets/photo_showroom/velomobile-site1.jpg'; 
import site2 from '../assets/photo_showroom/velomobile-site2.jpg'; 
import site3 from '../assets/photo_showroom/velomobile-site3.jpg'; 
import site4 from '../assets/photo_showroom/velomobile-site4.jpg'; 


const ShowroomPage = () => {
  return (
    <section className="card p-4 mt-4 bg-light">
      <h2 className="card-header mb-4 border-danger rounded-lg text-primary">Showroom</h2>
      <p>Ici nos points d'exposition des prototypes</p>
      
      <div className="container d-flex justify-content-between mb-3 gap-2">
        {/*-------------1er site-------------*/}
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={site1} alt="Card image cap"/>
          <div className="card-body">
            <h3 className="card-title">Site de Nîmes</h3>
            <p className="card-text">Site de Nîmes blabla.....</p>
          </div>
        </div>

        {/*-------------2e site-------------*/}
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={site2} alt="Card image cap"/>
          <div className="card-body">
            <h3 className="card-title">Site de Uzes</h3>
            <p className="card-text">Site de Nîmes blabla.....</p>
          </div>
        </div>

        {/*-------------3e site-------------*/}
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={site3} alt="Card image cap"/>
          <div className="card-body">
            <h3 className="card-title">Site de Montpellier</h3>
            <p className="card-text">Site de Nîmes blabla.....</p>
          </div>
        </div>

        {/*-------------4e site-------------*/}
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={site4} alt="Card image cap"/>
          <div className="card-body">
            <h3 className="card-title">Site de Toulouse</h3>
            <p className="card-text">Site de Nîmes blabla.....</p>
          </div>
        </div>

      </div>
      
      {/*-------------Map-------------**/}
      <div className="container bg-light w-50 p-3 rounded d-flex justify-content-center mb-3">
        <img src={Map} alt="Card image cap"/>
  </div> 
     
    </section>
  );
};

export default ShowroomPage;
