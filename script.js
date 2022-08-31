// // Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var useUpperCaseLetter = getTextPreference("Do you want to use uppercase letters?\nType Yes or No");
  var useLowerCaseLetter = getTextPreference("Do you want to use lowercase letters?\nType Yes or No");
  var useNumbers = getTextPreference("Do you want to use numbers?\nType Yes or No");
  var useSymbols = getTextPreference("Do you want to use symbols?\nType Yes or No");
  var length = getLengthPreference(8, 128);

  if (useLowerCaseLetter == false && useUpperCaseLetter == false && useNumbers == false && useSymbols == false) {
    alert("You must select at least one character type!");
    return;
  }

  var characterList = buildCharacterList(useUpperCaseLetter, useLowerCaseLetter, useNumbers, useSymbols);

  var password = "";

  for (let i = 0; i < length; i++) {
    password += characterList.charAt(Math.floor(Math.random() * characterList.length));
  }

  return password;
}

function getTextPreference(textPrompt) {
  while (true) // Infinitely ask them to enter yes/no until they actually do
  {
    var useUpperCaseResponse = prompt(textPrompt);

    if (useUpperCaseResponse == null) {
      return undefined;
    }

    // They clicked the ok button, so now we need to see if they typed in "yes" or "no"
    if (useUpperCaseResponse.toLowerCase() === "yes") // Did they type in "yes"?
    {
      return true; // Breaks out of the infinite loop and returns true
    }
    else if (useUpperCaseResponse.toLowerCase() === "no") // If they didn't type in "yes", did they type in no?
    {
      return false;// Breaks out of the infinite loop and returns true
    }

    // At this point, they have typed in something else, so we need to continue to the alert...
    alert("Invalid Response!");
  }
}

function getLengthPreference(lowerBound, upperBound) {
  while (true) // Infinitely ask them to enter yes/no until they actually do
  {
    var useLengthResponse = prompt(`Enter Password Length?\n Use a value between ${lowerBound} and ${upperBound}`);
    if (useLengthResponse == null) {

      return undefined;
    }
    // parsInt changes a string value to a number
    var number = parseInt(useLengthResponse);
    // If number is not a number(NaN) then go to next check
    if (number != NaN) {
      // Checking to see if the input value is between lower bound and upper bound
      if (number >= lowerBound && number <= upperBound) {
        return number;
      }
    }
    // If not, throw an alert
    alert("Invalid Response!");
  }
}

// This function appends the characters used based off the users input
function buildCharacterList(useUpperCaseLetter, useLowerCaseLetter, useNumbers, useSymbols) {
  var characters = "";

  if (useUpperCaseLetter) {
    characters += upperCase;
  }

  if (useLowerCaseLetter) {
    characters += lowerCase;
  }

  if (useNumbers) {
    characters += numbers;
  }

  if (useSymbols) {
    characters += symbols;
  }

  return characters;
}