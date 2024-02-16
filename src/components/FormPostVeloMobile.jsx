const FormPostVeloMobile = ({handleSubmitFormPostVeloMobile}) => {
    return (
        <form
  onSubmit={(event) => {
    handleSubmitFormPostVeloMobile(event)
  }}
  action=""
>
  <label htmlFor="model">Modèle</label>
  <input type="text" id="model" name="model" />
  <label htmlFor="model">Description</label>
  <textarea name="description" id="description" cols="0" rows="0"></textarea>
  <label htmlFor="weight">Poids</label>
  <input type="text" id="weight" name="poids" />
  <label htmlFor="photo">Photo</label>
  <input type="text" id="photo" name="photo" />
  <button type="submit">Envoyer</button>
</form>

    );
}

export default FormPostVeloMobile;