// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate buttong
function generatePassword () {
  var newPassword = ""



  var passwordLength = parseInt( prompt("How many characters in your password?"));
  var includeLowercase = confirm("Do you want lowercase letters?");
  var includeuppercase = confirm("Do you want uppercase?");
  var includenumbers = confirm("Do you want to include numbers ?");
  var includesymbols = confirm ("Do you want to include symbols ?"); 

  if (passwordLength > 128 || passwordLength < 8 ) {
    return "Invalid password lenght"
  }

  var bank = []
  var lowercase = ["abcdefghijklmnopqrstuvwxyz"]
  var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  var numbers = ["0123456789"]
  var symbols = ["`~@#$%^&*()-_=+{[|\"':;>.<,?/!]}`"] 


  if (includeLowercase ) {
    bank = bank + lowercase
  }

  if (includeuppercase  ) {
    bank = bank + uppercase
  }

  if (includenumbers  ) {
    bank = bank + numbers
  }
 
  if (includesymbols  ) {
    bank = bank + symbols
  }
 console.log ("BANK: ", bank)
  var length = bank.length
  for (i=0;i < passwordLength ; i++) {
    var random = Math.floor (Math.random ()*length)
    var randomcharacter= bank [random]
   
    newPassword = newPassword + randomcharacter
    console.log (newPassword)


  }


  // Generator funtions - http://www.net-comber.com/charset.html

    return newPassword

}
generateBtn.addEventListener("click", writePassword);