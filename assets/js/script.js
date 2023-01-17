// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Create password items
var passwordCriteria = {

//Lowercase letters array
  passwordLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

//Uppercase letters array
  passwordUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

//Special characters array
  passwordSpecialCharacter: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_",
  "+", "=", "<", ">", "?",],
  
//Numbers array
  passwordNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

}

//calling function for prompts on generate password button click
function generatePassword(){

//function to prompt user for input criteria 
   function passwordPrompts() {
    passwordLowerCase = window.confirm("Do you want to use lower case letters?");
    passwordUpperCase = window.confirm("Do you want to use upper case letters?");
    passwordSpecialCharacter = window.confirm("Do you want to use any special characters?");
    passwordNumber = window.confirm("Do you want to use numbers?");
    
  }

//variables for password criteria 
  var result = "";
  var passwordLength = 0;
  var passwordLowerCase;
  var passwordUpperCase;
  var passwordSpecialCharacter;
  var passwordNumber;
 

  passwordLength = 0;
  passwordCriteria.passwordLength = 0;
  result = "";

// check password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");

//if user chooses cancel 
    if (passwordLength === null) {
      return "Your secure password";
    }
    else {

//if user enters a letter or character 
      if (!isFinite(passwordLength)) {
        window.alert("You did not enter a number  \nPlease choose a number between 8 and 128");
        return "Your secure password";
      }
      else {

//if user enters a number outside of the 8-128 criteria
        if (passwordLength < 8 || passwordLength > 128) {
          window.alert("Please choose a number between 8 and 128");
          return "Your secure password";

        }
        else {

          passwordPrompts();

          while (passwordCriteria.passwordLength < passwordLength) {

//if user does not choose one of the selected criteria 
            if (passwordLowerCase === false && passwordUpperCase === false && passwordNumber === false && passwordSpecialCharacter === false) {
              window.alert("You must select at least one criteria for Lower Case letters, Upper Case letters, Special Characters or Numbers")
              passwordPrompts();
            }
            else {

//if user chooses lowercase letters to be in their password
              if (passwordLowerCase === true && passwordCriteria.passwordLength < passwordLength) {
                var lowercase = passwordCriteria.passwordLowerCase[Math.floor(Math.random() * 26)]
                result = result + lowercase;
                passwordCriteria.passwordLength++;
              }

//if user chooses uppercase letters to be in their password
              if (passwordUpperCase === true && passwordCriteria.passwordLength < passwordLength) {
                var uppercase = passwordCriteria.passwordUpperCase[Math.floor(Math.random() * 26)]
                result = result + uppercase;
                passwordCriteria.passwordLength++;
              }

//if user chooses special characters to be in their password 
              if (passwordSpecialCharacter === true && passwordCriteria.passwordLength < passwordLength) {
                var specialcharacter = passwordCriteria.passwordSpecialCharacter[Math.floor(Math.random() * 17)]
                result = result + specialcharacter;
                passwordCriteria.passwordLength++;
              }

//if user chooses numbers to be in their password
              if (passwordNumber === true && passwordCriteria.passwordLength < passwordLength) {
                var number = passwordCriteria.passwordNumber[Math.floor(Math.random() * 10)]
                result = result + number;
                passwordCriteria.passwordLength++;
              }
            }
          }
        }
      }
    }
  }
  
  return result;

}

