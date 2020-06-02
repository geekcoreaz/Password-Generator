// Set Variables
let abc = "abcdefghijklmnopqrstuvwxyz";
let abcUpper = abc.toUpperCase();
let num = "0123456789";
let symbols = "!@#$%^&*()_+-=<>?{}";
let userPass = "";
let passGrp = "";

// Prompt to start Password Generation
window.onload = alert("Please click 'Generate password' to create a random password.");

// Start Password Generation
document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {
  // Set Password length
  let passLength = prompt("Please enter your password length between 8 and 128 numbers.");

  if (passLength < 8 || passLength > 128) {
    alert("Your password length must be between 8 and 128 numbers!\nPlease start over.");
  } else {
    // Set Password options
    let selectAbc = confirm("Would you like to use lower case letters?");
    let selectAbcUpper = confirm("Would you like to use upper case letters?");
    let selectNum = confirm("Would you like to use numbers?");
    let selectSymbols = confirm("Would you like to use symbols?");


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
    if (passGrp.length == 0) {
      alert("You must select a password option.\nPlease start over.");
    }
    for (let i = 0; i < passLength; i++) {
      userPass += passGrp.charAt(Math.floor(Math.random() * passGrp.length));
    }
    // Put password on page
    document.getElementById("password").innerHTML = userPass;
  }
}

