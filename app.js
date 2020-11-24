let paragraphe = document.querySelector("p");
paragraphe.style.color = "green";
paragraphe.style.fontSize = "1rem";

let nouveauText = document.getElementById("newText");
nouveauText.innerText = " Fin du Paragraphe Lorem Ipsum";
nouveauText.style.animationName = "animation";
nouveauText.style.animationDuration = "10s";

let para2 = document.getElementById("anim2");
para2.style.animationName = "animation";
para2.style.animationDuration = "10s";

let span = document.querySelector(".spanTest");
span.style.backgroundColor = "white";
span.dir = "rtl";

let a = document.createElement('a');
let lien = document.createTextNode("Mon texte");
a.appendChild(lien);
a.href = "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal";
document.body.appendChild(a);





