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