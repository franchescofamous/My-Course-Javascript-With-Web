/* ----Selecting Elements----

console.log(document.body.childNodes);
 for (let element of document.body.childNodes) {
  console.log(element);
} 
console.log(document.body.childNodes[1]);
//console.log(document.body.parentNode);

console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByClassName("daft"));
console.log(document.getElementById("randomList").innerText);

let connected = false;
if (!connected) {
  document.querySelector("div").textContent = "va t'abonner";
}
 

console.log(document);

console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByClassName("firstP"));
console.log(document.getElementById("randomList").textContent);

document.getElementById("randomList");
document.getElementsByTagName("h1");
console.log(document.querySelector("li"));
console.log(document.getElementsByClassName("omo").textContent);

for (let elt of document.getElementsByClassName("omo")) {
  console.log(elt.textContent);
}
*/
/* let person = {
  nom: "zooooo",
};
let myUlElt = document.getElementById("randomList");

console.log(myUlElt.textContent);
console.log(myUlElt.innerHTML);
console.log(person.nom);
person.nom = "tor";
console.log(person.nom);

myUlElt.innerHTML += "<li>oops </li>"; */

// creation
/* let myDiv = document.createElement("div"); */
// ajout de contenu
/* myDiv.textContent = "just added"; */

//ajout de l'element au html
/* document.body.appendChild(myDiv); */

/* let firstLiElt = document.createElement("li");
firstLiElt.textContent = "oto";
let scndLiElt = document.createElement("li");
scndLiElt.textContent = "ata";

let ulElt = document.createElement("ul");
ulElt.appendChild(firstLiElt);
ulElt.appendChild(scndLiElt);

let divElt = document.createElement("div");
divElt.appendChild(ulElt);

document.body.appendChild(divElt); */

/* let divElt = document.createElement("div");
document.body.appendChild(divElt);
let ulElt = document.createElement("ul");
divElt.appendChild(ulElt);
let myLi = document.createElement("li");
myLi.textContent = "toto";
ulElt.appendChild(myLi);

for (let i = 0; i < 3; i++) {
  let myLi = document.createElement("li");
  myLi.textContent = "toto";
  ulElt.appendChild(myLi);
}
 */
/* let myDivElt = document.createElement("div");
document.body.appendChild(myDivElt);

let myHead = document.createElement("h3");
myHead.textContent = "Mes fruits préférés: ";
myDivElt.appendChild(myHead);

let UltElt = document.createElement("ul");
myDivElt.appendChild(UltElt);

let fruits = ["banane", " pomme", "tomate", "orange"];
for (let i = 0; i < fruits.length; i++) {
  let myLiElt = document.createElement("li");
  myLiElt.textContent = fruits[i];
  UltElt.appendChild(myLiElt);
}
myDivElt.removeChild(UltElt); */
/* for (let fruit of fruits) {
  let myLiElt = document.createElement("li");
  myLiElt.textContent = fruit;
  UltElt.appendChild(myLiElt);
} */

let myDivList = document.getElementById("list");
let myUlRandomList = document.getElementById("randomList");

let myNewUl = document.createElement("ul");
myNewUl.setAttribute("id", "test");
let myNewli = document.createElement("li");
myNewli.textContent = "Range Rover";
myNewli.style.fontWeight = "bold";
myNewli.style.fontStyle = "italic";
console.log(myNewli.style.color);
myNewUl.appendChild(myNewli);

myDivList.replaceChild(myNewUl, myUlRandomList);

let divBlack = document.createElement("div");
//divBlack.setAttribute("id", "bo");
divBlack.classList.add("black");
divBlack.classList.remove("black");
document.body.appendChild(divBlack);
//myDivList.removeChild(myUlRandomList);
console.log(getComputedStyle(document.querySelector(".lion")).height);
