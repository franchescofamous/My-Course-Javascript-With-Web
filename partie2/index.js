let myTestButton = document.querySelector(".testButton");
let myDivUserInfo = document.querySelector(".info");
let connected = false;

/* function click() {
  console.log("click");
} */

myTestButton.addEventListener("click", (e) => {
  /*  e.target.textContent = "stop😴😴";
  console.log(`You clicke on ${e.target}`); */
  connected = !connected;
  if (connected) {
    myDivUserInfo.textContent = "Hey you are Good😛😛😛😛😛😛😛";
  } else {
    myDivUserInfo.textContent = "Fuck youuuuu 🤬😡🤬🤬🤬";
  }
});

/* myTestButton.addEventListener(
  "mouseover",
  (e) => (e.target.textContent = "don't touch 🤬😡")
); */
console.log(myTestButton);
/* if (connected) {
 
} else {
  myDivUserInfo.textContent = "Fuck youuuuu 🤬😡🤬🤬🤬";
} */

let divProp = document.querySelector(".prop");
let articleTestProp = document.querySelector(".testProp");
let buttonClk = document.querySelector(".clk");

buttonClk.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click");
});

articleTestProp.addEventListener("click", (e) => {
  console.log("click");
});

divProp.addEventListener("click", (e) => {
  console.log("click");
});
