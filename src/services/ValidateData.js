// Dans ValidateData.js
export default class ValidateData {
  static checkChevron(str) {
    // je dois traiter la chaine (utilisation de la regex)
    // puis je la renvoie

    return str;
  }
  // Méthode pour vérifier les champs vide
  static checkIfEmpty(str) {
    // renvoie un boolean
    return str === "";
  }
  //Méthode pour controler les caractères autorisé
  static checkCharacter(str) {
    const regex = /[A-Za-z0-9]*[@#$&%^*()_+\=\[\]{}"\\|<>\/?]+[A-Za-z0-9]*/;
    console.log(regex.test(str));
    return regex.test(str);
  }
  //Méthode pour controler les chiffres autorisé
  //static checkWeight(str) {
  //  const regex = /[0-9]*[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+[0-9]-[A-Za-z]*/;
  //  console.log(regex.test(str));
   // return !regex.test(str);
  //}

  static checkWeight(str) {
    // This regex matches a string that starts with one or more digits,
    // optionally followed by a decimal point and one or more digits.
    const regex = /^\d+(\.\d+)?$/;
    return regex.test(str);
  }


}
