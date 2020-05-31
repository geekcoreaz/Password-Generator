// Set Variables
let abc = "abcdefghijklmnopqrstuvwxyz";
let abcUpper = abc.toUpperCase();
let num = "0123456789";
let symbols = "!@#$%^&*()_+-=";
let userPass = "";
let passGrp = "";

// Assignment Code
document.getElementById("generate").addEventListener("click", generatePassword);

// var generateBtn = document.querySelector("#generate");
function generatePassword() {
  // Set Password length
  let passLength = prompt("Please enter your password length between 8 and 128 numbers");

  if (passLength < 8 || passLength > 128) {
    alert("Please enter your password length between 8 and 128 numbers!");
  }
  // Set Password options
  let selectAbc = confirm("Would you like to use lower case letters?");
  let selectAbcUpper = confirm("Would you like to use upper case letters?");
  let selectNum = confirm("Would you like to use numbers?");
  let selectSymbols = confirm("Would you like to user special characters?");


  //Generate password

  if (selectAbc) {
    passGrp += abc;
  }
  if (selectAbcUpper) {
    passGrp += abcUpper;
  }
  if (selectNum) {
    passGrp += num;
  }
  if (selectSymbols) {
    passGrp += symbols;
  }
  for (let i = 0; i < passLength; i++) {
    userPass += passGrp.charAt(
      Math.floor(Math.random() * passGrp.length)
    );
  }
  return userPass;
}

//Call function to generate password 
generatePassword();


// Write generated password on page
document.getElementById("password").innerHTML = userPass;
