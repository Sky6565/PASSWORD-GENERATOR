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
var passwordLength = prompt("How many characters in your password?");
var includeLowercase = confirm("Do you want lowercase letters?");
var includeuppercase = confirm("Do you want uppercase?");
var includenumbers = confirm("Do you want to include numbers ?");
var includesymbols = confirm ("Do you want to include symbols ?"); 

  





// Generator funtions - http://www.net-comber.com/charset.html

 function getRandomLower(p) { 
  return String.fromCharCode(math.floor(math.random() * 26) + 97);
 }