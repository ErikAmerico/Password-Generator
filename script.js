// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  const pwLength = prompt("Choose password length between 8-128 characters.");


  if (pwLength < 8 || pwLength > 128) {
    alert("error, your password must be at least 8 and no more than 128 characters")
  };
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
