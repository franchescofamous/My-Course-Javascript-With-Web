let subscriber = {
  userName: "",
  password: "",
  sexe: "",
  contactWays: [],
  country: "",
};
//document.querySelector("#userName")
let inputUserName = document.getElementById("userName");
let inputPassword = document.getElementById("pwd");
let inputSexe = document.getElementsByName("sexe");
let inputMail = document.getElementById("mail");
let inputTel = document.getElementById("tel");
let inputBp = document.getElementById("bp");
let selectCountry = document.getElementById("country");

//input events
/* inputUserName.addEventListener("focus", (e) => {
   e.target.style.backgroundColor = "red";
  inputUserName.style.backgroundColor = "red";
});
 inputUserName.addEventListener("blur", (e) => {
  e.target.style.backgroundColor = "green";
  console.log(e.target.value);
});
  */
inputUserName.addEventListener("input", (e) => {
  // console.log(e.target.value);
  subscriber.userName = e.target.value;
});

inputPassword.addEventListener("input", (e) => {
  // console.log(e.target.value);

  subscriber.password = e.target.value;
});

console.log(inputSexe);
for (let myInput of inputSexe) {
  myInput.addEventListener("change", (e) => {
    console.log(e.target.value);
    subscriber.sexe = e.target.value;
  });
}

inputBp.addEventListener("change", (e) => {
  e.target.checked ? subscriber.contactWays.push("Bp") : null;
  /* if(e.target.checked){
    subscriber.contactWays.push('Bp')
  } */
});
inputMail.addEventListener("change", (e) => {
  e.target.checked ? subscriber.contactWays.push("mail") : null;
});
inputTel.addEventListener("change", (e) => {
  e.target.checked ? subscriber.contactWays.push("tel") : null;
});

selectCountry.addEventListener("change", (e) => {
  console.log(e.target.value);
  subscriber.country = e.target.value;
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(subscriber);
  console.log("submit");
});
/* console.log(subscriber); */
