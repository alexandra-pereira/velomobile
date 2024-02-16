const FormPutVeloMobile = ({veloMobile, handleSubmitFormPutVeloMobile}) => {
    return (
      <form
        onSubmit={(event) => {
          handleSubmitFormPutVeloMobile(event);
        }}
        action=""
      >
        <label htmlFor="model">Modèle</label>
        <input type="text" id="model" name="model" value={veloMobile.model} />
        <label htmlFor="model">Description</label>
        <textarea name="description" id="description" cols="0" rows="0">
          {veloMobile.description}
        </textarea>
        <label htmlFor="weight">Poids</label>
        <input type="text" id="weight" name="poids" value={veloMobile.weight} />
        <label htmlFor="photo">Photo</label>
        <input type="text" id="photo" name="photo" value={veloMobile.photo} />
        <button type="submit">Envoyer</button>
      </form>
    );
}

export default FormPutVeloMobile;