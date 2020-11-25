let paragraphe = document.querySelector("p");
paragraphe.style.color = "green";
paragraphe.style.fontSize = "1rem";
console.log(paragraphe);

let nouveauText = document.getElementById("newText");
nouveauText.innerText = " Fin du Paragraphe Lorem Ipsum";
nouveauText.style.animationName = "animation";
nouveauText.style.animationDuration = "10s";
console.log(nouveauText);

let para2 = document.getElementById("anim2");
para2.style.animationName = "animation";
para2.style.animationDuration = "10s";
console.log(para2);

let span = document.querySelector(".spanTest");
span.style.backgroundColor = "white";
span.style.display = "block";
span.dir = "rtl";
console.log(span);

let a = document.querySelector('a');
let lien = document.createTextNode("Mon texte");
a.appendChild(lien);
a.href = "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal";
document.body.appendChild(a);
console.log(a);
console.log(lien);







