// quel est le titre de la boutique

const titre = document.querySelector("h1");

// récuperer et afficher son contenu
console.log(titre.textContent);

// Des informations manquent

const desc_boutique = document.querySelector("#description_boutique");
const paragraphe = document.createElement("p");
paragraphe.textContent =
  "Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.";

desc_boutique.appendChild(paragraphe);

// Roger, enfoiré

const blagueRoger = document.querySelector("#blague_de_roger_le_sorcier");
blagueRoger.remove();

// Archibald n'est pas la appelons le !

const callArchibald = document.querySelector("#call_archibald");

callArchibald.addEventListener("click", () => {
  alert("🧙‍♂️ J'arrive, j'arrive Aventurier !");
});

// Faisons un peu de magie

const boitesMagiques = document.querySelectorAll("#boites_magique .boite");
console.log(boitesMagiques);

const redBtn = document.querySelector("#btn_change_red");
const blueBtn = document.querySelector("#btn_change_blue");
const greenBtn = document.querySelector("#btn_change_green");

redBtn.addEventListener("click", () => {
  boitesMagiques[0].style.backgroundColor = "red";
});
blueBtn.addEventListener("click", () => {
  boitesMagiques[0].style.backgroundColor = "blue";
  boitesMagiques[1].style.backgroundColor = "blue";
});
greenBtn.addEventListener("click", () => {
  boitesMagiques[0].style.backgroundColor = "green";
  boitesMagiques[1].style.backgroundColor = "green";
  boitesMagiques[2].style.backgroundColor = "green";
});
