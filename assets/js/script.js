// Assignment Code
const generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// calling function for prompts on generate password on button click
function generatePassword(){

  passwordLength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");

  window.confirm("Do you want to use any lower case letters?");
  window.confirm("Do you want to use any upper case letters?");
  window.confirm("Do you want to use any special characters?");
  window.confirm("Do you want to use any numbers?");

}

//Create password items
const passwordCriteria = {

  //Lowercase letters array
  passwordLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  //Uppercase letters array
  passwordUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  //Special characters array
  passwordSpecialCharacter: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+",
  "=", "<", ">", "?"],

  //Numbers array
  passwordNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

}

