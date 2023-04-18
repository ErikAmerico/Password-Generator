// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  //initializes empty password array
  let password = [];

  //collects and stores user input of password length
  const pwLength = prompt("Choose password length between 8-128 characters.");

  //checks to make sure user input meets our requirements.
  //if it does not, the function restarts
  if (pwLength < 8 || pwLength > 128) {
    alert("error, your password must be at least 8 and no more than 128 characters")
    generatePassword();
    return
  };

  //defining criteria options for user
  const spCharacters = ["+", "-", "&", "|", "!", "^",
    "~", "*", "?", ":", "?", "!", "$", "#", "#", "@"];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  //using .map()function to create a new array, it is the letters array but all uppercase.
  const upperLetters = letters.map(function (letter) {
    return letter.toUpperCase();
  });

  //collects and stores user input for password specifics
  const spCharCon = confirm("Would you like to include special characters?");
  const lowerCon = confirm("would you like to include lowercase letters?");
  const upperCon = confirm("Would you like to include uppercase letters?");
  const numCon = confirm("would you like to include numbers?");

  //the if statments in this while loop are iterated over and the randomized result is pushed to the
  // empty password array. Once the password array reaches user specified pwLength
  // the while loops ends.
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


  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }

  //↑this↑ function when called ↓below↓, shuffles the password array.
  //without this function, the password would always repeat as
  // spCharacters - letters - upperLetters - numbers
  // The arrow function and - 0.5 I do not 100% fully understand yet. (credit to google)
  //but it is neccessary for the final product!

  shuffle(password);

  // i used the .join method to remove the commas seperating the elements in the password
  //saved the new clean looking password to a new variable and returned it
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
