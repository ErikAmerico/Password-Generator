// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  const pwLength = prompt("Choose password length between 8-128 characters.");


  if (pwLength < 8 || pwLength > 128) {
    alert("error, your password must be at least 8 and no more than 128 characters")
  };

  const spCharacters = ["+", "-", "&", "|", "!", "^",
    "~", "*", "?", ":", "?", "!", "$", "#", "#", "@"];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const upperLetters = letters.map(function (letter) {
    return letter.toUpperCase();
  });

  const spCharCon = confirm("Would you like to include special characters?");
  const lowerCon = confirm("would you like to include lowercase letters?");
  const upperCon = confirm("Would you like to include uppercase letters?");
  const numCon = confirm("would you like to include numbers?");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
