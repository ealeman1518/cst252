/**
  * Author: Eduardo Aleman
  * October 6, 2020
  * Public Domain
**/

//create function to assign vocaloid based on length mod 4
//referenced from class notes
function sortingHat(str) {
  var len = str.length;
  var mod = len % 4;
  if (mod == 0) {
    return "Hatsune Miku"
  }
  else if (mod == 1) {
    return "Kagamine Len"
  }
  else if (mod == 2) {
    return "Kagamine Rin"
  }
  else if (mod == 3) {
    return "Kaito"
  }
};

//create button listener
var button = document.getElementById("my-button");
//create function for event listener
button.addEventListener("click", function() {
  //make variables for input value and connect to sorting function
  var userName = document.getElementById("input").value;
  var vocSona = sortingHat(userName);

  //refered to screenshots provided in Lab 11 to figure out the output
  newText = "<p>The vocaloid you were assigned to was: " + vocSona + "</p>";
  document.getElementById("output").innerHTML = newText;
})
