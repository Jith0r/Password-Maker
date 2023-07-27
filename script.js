const dataLowercase = "azertyuiopqsdfghjklmwxcvbn"; // Toutes les lettres en miniscule
const dataUppercase = dataLowercase.toUpperCase(); // Toute les lettres en majiscules
const dataNumbers = "0123456789"; // Les chiffres
const dataSymbols = "*$!;:&'é~,"; // Les symboles
const rangeValue = document.getElementById("password-length"); // La barre pour choisir le range
const passwordOutput = document.getElementById("password-output");

const generatePassword = () => {
  //Incrémenter les données qui ont été cocher, le tableau est vide de base ainsi que password
  let data = [];
  let password = "";

  //lowercase qui fait référence à l'id de notre checkbox html
  if (lowercase.checked) {
    // Ajouter les lettre en miniscule avec le "spreadOperator" pour casser les chaines de caractères
    data.push(...dataLowercase);
  }

  //uppercase qui fait référence à l'id de notre checkbox html
  if (uppercase.checked) {
    data.push(...dataUppercase); // Ajouter les lettre en majiscule avec le spreadOperator
  }

  //number qui fait référence à l'id de notre checkbox html
  if (numbers.checked) {
    data.push(...dataNumbers); // Ajouter les chiffres avec le spreadOperator
  }

  //symbols qui fait référence à l'id de notre checkbox html
  if (symbols.checked) {
    data.push(...dataSymbols); // Ajouter les symboles avec le spreadOperator
  }

  //Sécurité si rien n'est sélectionner
  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return; // Pour arrêter la fonction
  }

  //Autant de lettre jusqu'à la value de rangeValue (la barre) et ajouter tout ceci dans la variable password
  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    // += pour incrémenter password
    // Math.floor pour supprimer les virgules
    // Math.random pour donner des données aléatoire * data.length qui est la longeur de nos données
  }

  //Générer le résultat final dans notre outPut html
  passwordOutput.value = password;

  passwordOutput.select(); //select() = pour sélectionner le mot de passe générer
  navigator.clipboard.writeText(passwordOutput.value); // Copier le mot de passe automatiquement

  generateButton.textContent = "Mot de passe copié !"; // Afficher que le mot de passe est copier

  //Après quelques secondes ré-afficher Générer un mot de passe
  setTimeout(() => {
    generateButton.textContent = "Générer un mot de passe";
  }, 2000);
};

//Quand on clique sur le boutton elle va chercher la fonction generatePassword()
generateButton.addEventListener("click", () => {
  generatePassword();
});
