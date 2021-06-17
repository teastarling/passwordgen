// Assignment Code
var generateBtn = document.querySelector("#generate");


var randomFunc = {
  upper: randomUpper,
  lower: randomLower,
  number: randomNumber,
  symbol: randomSymbol
};


generateBtn.addEventListener("click", writePassword)

// // Write password to the #password input
function writePassword() {
  var upperCaseSel = confirm("Include uppercase letters?");
  var lowerCaseSel = confirm("Include lowercase letters?");
  var numberSel = confirm("Include numbers?");
  var symbolSel = confirm("Include symbols?");
  var lengthSel = prompt("Please state desired password length.", "8-128");
  var length = +lengthSel.value;

    console.log(length);

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// function to generate a random upper-case letter
function randomUpper() {
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

// function to generate a random lower-case letter
function randomLower() {
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

// function to generate a random number
function randomNumber() {
  var numbers = '0123456789'
  return numbers[Math.floor(Math.random() * numbers.length)];
}

// function to generate a random symbol
function randomSymbol() {
  var symbols = '!#$%&()*+,-./:;<=>?@[]^{|}~';
  return symbols[Math.floor(Math.random() * symbols.length)];
}



// function question() {
//   confirm("yes or no");
//   confirm("happy?"); }


