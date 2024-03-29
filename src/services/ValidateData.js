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
  static checkEmail(str) {
    // This regex matches a string that starts with one or more alphanumeric characters,
    // optionally followed by a dot, underscore, percent sign, plus sign, or hyphen,
    // followed by an at symbol,
    // followed by one or more alphanumeric characters, dots, or hyphens,
    // followed by a dot,
    // and ends with two or more alphabetic characters.
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(str);
  }
}
