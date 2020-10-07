/**
  * Author: Eduardo Aleman
  * September 3rd, 2020
  * Public Domain
**/

//Declare variables
var button = document.getElementById("my-button");
var userInput = document.getElementById("user-input");
var newName = document.getElementById("result");

//borrow lab 7 function
function sortUserName(name) {
  return name.split('').sort().join('');
};


button.addEventListener("click", function() {
  var inputText = userInput.value;
  var newString = "Hey there, " + inputText + "! Neat name, however, I tweaked it to be better: " + sortUserName(inputText);
  newName.innerText = newString;
  event.preventDefault();
});
