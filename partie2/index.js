let myTestButton = document.querySelector(".testButton");
let myDivUserInfo = document.querySelector(".info");
let connected = false;

/* function click() {
  console.log("click");
} */

myTestButton.addEventListener("click", (e) => {
  /*  e.target.textContent = "stopπ΄π΄";
  console.log(`You clicke on ${e.target}`); */
  connected = !connected;
  if (connected) {
    myDivUserInfo.textContent = "Hey you are Goodπππππππ";
  } else {
    myDivUserInfo.textContent = "Fuck youuuuu π€¬π‘π€¬π€¬π€¬";
  }
});

/* myTestButton.addEventListener(
  "mouseover",
  (e) => (e.target.textContent = "don't touch π€¬π‘")
); */
console.log(myTestButton);
/* if (connected) {
 
} else {
  myDivUserInfo.textContent = "Fuck youuuuu π€¬π‘π€¬π€¬π€¬";
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
