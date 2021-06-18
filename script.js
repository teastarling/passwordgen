// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerList = 'abcdefghijklmnopqrstuvwxyz';
var numberList = '0123456789';
var symbolList = '!#$%&()*+,-./:;<=>?@[]^{|}~';

var passAmalg = '';
var passRandom = '';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  console.log("popups first")
  var upperCaseSel = confirm("Include uppercase letters?");
  var lowerCaseSel = confirm("Include lowercase letters?");
  var numberSel = confirm("Include numbers?");
  var symbolSel = confirm("Include symbols?");
  var lengthSel = prompt("Please state desired password length.", "8-128");
  
  
  lengthSel = parseInt(lengthSel)

  if (isNaN(lengthSel)) {
    console.log("length not number");
    alert("Length is not a number! Please enter a number between 8-128.");
    generatePassword();
  } else if (lengthSel < 8 || lengthSel > 128) {
    console.log("length within bounds")
    alert("Length must be between 8-128!");
    generatePassword();
  }
  
  
  if (upperCaseSel) {
    passAmalg = passAmalg.concat(upperList);
    console.log(passAmalg, "checking upper");
    console.log("upper added to passAmalg");
  }

  if (lowerCaseSel) {
    passAmalg = passAmalg.concat(lowerList);
    console.log(passAmalg, "checking lower");
    console.log("lower added to passAmalg");
  }

  if (numberSel) {
    passAmalg = passAmalg.concat(numberList);
    console.log(passAmalg, "checking numb");
    console.log("number added to passAmalg");
  }

  if (symbolSel) {
    passAmalg = passAmalg.concat(symbolList);
    console.log(passAmalg, "checking symb");
    console.log("symbol added to passAmalg");
  }

  for (i=0; i < lengthSel; i++) {
    passRandom += passAmalg[Math.floor(Math.random() * passAmalg.length)];
    console.log("randomize new amalg array");
  }

  return passRandom;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);