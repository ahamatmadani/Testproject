// Lire et Afficher le contenu de la balise H1
const contentOfH1tags = document.getElementsByTagName("h1");



//Afficher le contenu sur le console
console.log(contentOfH1tags);

//contenu de la premiere balise h1

const firstH1 = contentOfH1tags[0];
console.log(firstH1.innerHTML);

// Libelle le button

const button = document.getElementById("Calculer");
console.log(button);
const buttonLabel = button.innerText;
console.log(buttonLabel);
