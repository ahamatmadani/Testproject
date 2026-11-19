

// lire le contenu de la balise

const contentsOfH1tags = document.getElementsByTagName("h1");

// afficher le contenu des balises h1
console.log(contentsOfH1tags);

const firstH1 = contentsOfH1tags[0];
console.log(firstH1.innerHTML);
// libelle le button
const button = document.getElementById("calculer");
console.log(button);
const buttonLabel = button.innerText;
console.log(buttonLabel);
