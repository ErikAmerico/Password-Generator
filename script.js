// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let password = [];

  const pwLength = prompt("Choose password length between 8-128 characters.");

  if (pwLength < 8 || pwLength > 128) {
    alert("error, your password must be at least 8 and no more than 128 characters")
    generatePassword();
    return
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


  while (password.length < pwLength) {
    if (spCharCon && password.length < pwLength) {
      password.push(spCharacters[Math.floor(Math.random() * spCharacters.length)])
    };
    if (lowerCon && password.length < pwLength) {
      password.push(letters[Math.floor(Math.random() * letters.length)])
    };
    if (upperCon && password.length < pwLength) {
      password.push(upperLetters[Math.floor(Math.random() * upperLetters.length)])
    };
    if (numCon && password.length < pwLength) {
      password.push(numbers[Math.floor(Math.random() * numbers.length)])
    }

  }

  let clearPassword = password.join("");
  return (clearPassword);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
