// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var finalPassword = "";

function generatePassword() {
  var characterLength = window.prompt("How many characters? between 8 and 128")
  if (characterLength < 8 || characterLength > 128) {
    alert("not a valid character length")
    return "Error"
  }
  // if (characterLength > 128) {
  //   alert("not a valid character length")
  //   return "Error"
  // }
  var characterSet = ""
  var characterLowercase = window.confirm("Do you want lowercase?")
  if (characterLowercase == true){
    characterSet += "abcdefghijklmnopqrstuvwxyz"
  }
  var characterUppercase = window.confirm("Do you want uppercase?")
  if (characterUppercase == true){
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  var characterNumber = window.confirm("Do you want numbers?")
  if (characterNumber == true){
    characterSet += "1234567890"
  }
  var characterSpecial = window.confirm("Do you want special characters?")
  if (characterSpecial == true){
    characterSet += "!@#$%^&*()`~-_=+\|><,.;:{}[]?/"
  }
  console.log(characterSet);

  for (let i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length)
    var randomCharacter = characterSet[randomIndex]
    console.log(randomCharacter)
    finalPassword+=randomCharacter
  }

console.log(finalPassword)
return finalPassword;
  
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
