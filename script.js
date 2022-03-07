// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const myArrayUpper = Array.from(Array(26)).map((e,i) => i + 65);
const alphabetUpper = myArrayUpper.map((x) => String.fromCharCode(x));

const myArrayLower = Array.from(Array(26)).map((e,i) => i + 97);
const alphabetLower = myArrayLower.map((x) => String.fromCharCode(x));

const arrayNumeric =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const arraySpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

function generatePassword() {
  var results = "";
  var numberOfCharacters = window.prompt("How many characters would you like your password to be?")
  var characterQuantity = parseInt(numberOfCharacters);
  if (characterQuantity >= 8 && characterQuantity <= 128) {
    var upperCase = window.confirm("Click OK ot confirm uppercase letters.");
    var lowerCase = window.confirm("Click OK to confirm lowercase letters.");
    var specialCharacters = window.confirm("Click OK to confirm special characters.");
    var numeric = window.confirm("Click OK to confirm including numeric characters.")
    var okayButton = [];
    if(upperCase == true) okayButton.push(alphabetUpper)
    if(lowerCase == true) okayButton.push(alphabetLower)
    if(numeric == true) okayButton.push(arrayNumeric)
    if(specialCharacters == true) okayButton.push(arraySpecialCharacters)

    for(var i = 0; i < characterQuantity; i++){
      var storeButton = Math.floor(Math.random()*okayButton.length);
      var selectedArray = okayButton[storeButton];
      results += selectedArray[Math.floor(Math.random()*selectedArray.length)];
    }
    
  }if (characterQuantity < 8) {
    window.confirm('Please provide a password with more than 8 or more characters')
  }
    
  return results;
}

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
   
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
