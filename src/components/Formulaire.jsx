import "./../sass/formulaire.scss";

const Formulaire = () => {
    return (
        <form className="container">
            <div className="form-group">
                <label htmlFor="name">Nom  </label>
                <input type="text" className="form-control" id="name" placeholder="Entrer le nom" />
              
            </div>

            <div className="form-group">
                <label htmlFor="firstName">Prénom</label>
                <input type="text" className="form-control" id="firstNme" placeholder="Entrer le prénom" />
            </div>

            <div class="form-group">
                <label for="description">Ecrivez nous</label>
                <textarea class="form-control" id="description" rows="3"></textarea>
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      
    );
}

export default Formulaire;