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
