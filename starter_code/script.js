// Start Password Generation process
window.onload = alert("Please click 'Generate password' to create a password.");

// Set Variables

var lettersUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lettersLowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_-+";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
