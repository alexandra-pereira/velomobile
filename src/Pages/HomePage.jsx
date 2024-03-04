import React from "react";
import Carousel from "../components/Carousel";
import vmrural from "../assets/carousel/vmrural.jpeg";
import vmsportif from "../assets/carousel/vmsportif.jpeg";
import {Link} from "react-router-dom";

const HomePage = () => {
    const images = [
        {src: vmrural, alt: " "},
        {src: vmsportif, alt: " "},
    ];

    return (
        <>
            <section className="card p-4 mt-4 bg-light">
                <h2 className="card-header mb-4 border-danger rounded-lg text-primary">
                    Home page
                </h2>
                {/*-----------carousel-----------*/}
                <div className="container carousel-container">
                    <Carousel images={images}/>
                </div>
                {/*-----------container-----------*/}
                <div
                    className="container d-flex justify-content-between align-items-center m-4 row">

                    {/*-----------Notre entreprise-----------*/}
                    <div className="d-flex align-items-stretch">
                        <div className="card p-2">
                            <h3 className="card-title">
                                Notre Entreprise
                            </h3>
                            <div className="card-body m-4 p-2">
                                <p>
                                    L'entreprise le Velomobile Français est un fabricant de
                                    vélo-mobiles innovant, spécialisé dans la conception et
                                    la
                                    production de véhicules écologiques et durables pour la
                                    mobilité urbaine. Avec une passion pour l'innovation et
                                    un
                                    engagement envers la durabilité, notre entreprise
                                    s'efforce de
                                    repousser les limites de la conception et de
                                    l'ingénierie pour
                                    créer des solutions de transport efficaces et
                                    respectueuses de
                                    l'environnement.{" "}
                                </p>
                                <p>
                                    Nos vélo-mobiles sont conçus pour offrir une expérience
                                    de
                                    conduite confortable, pratique et sécurisée. Dotés de
                                    technologies de pointe et de matériaux de haute qualité,
                                    nos
                                    produits garantissent une performance optimale, une
                                    faible
                                    empreinte carbone et une durabilité à long terme.
                                </p>

                                <div className="d-flex justify-content-end align-items-end">
                                    <Link className="btn btn-primary btn-text"
                                          to={`/products`}>
                                        <span>En savoir plus</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                
                </div>
            </section>
        </>
    );
};

export default HomePage;
