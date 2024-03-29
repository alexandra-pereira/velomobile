
const FormContact = () => {
    return (<>
            {/*--------------- Section "FormContact de contact" ---------------*/}
            <form className="card p-3 bg-light mt-2">
                <div className="card p-2">
                    <h3 class="card-header d-flex justify-content-center align-items-center mt-2">
                        Ecrivez nous
                    </h3>
                    <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Entrer le nom"
                    />

                    <label htmlFor="firstName">Prénom</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstNme"
                        placeholder="Entrer le prénom"
                    />

                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Entrer votre email"
                    />

                    <label htmlFor="description">Ecrivez nous</label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                    ></textarea>
                </div>
                <div className="d-flex justify-content-end m-2">
                    <button type="submit" className="btn btn-primary ">
                        Envoyer
                    </button>
                </div>
            </form>
        </>);
};

export default FormContact;
