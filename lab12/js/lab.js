/**
  * Author: Eduardo Aleman
  * October 10, 2020
  * Public Domain
**/



//Make fizzbuzz function
function fizzBoomBam(number) {

  var outputEl = document.getElementById("script-output");

  for (var i=0; i<=number; i++) {
    var newEl = document.createElement("p");
    console.log(i);
    //Create String for outputs
    var outputString = i + " ";
    if (i%3 == 0) {
      outputString += "Fizz";
      console.log("Fizz");
    }
    if (i%5 == 0) {
      outputString += "Buzz";
      console.log("Buzz");
    }
    if (i%7 == 0) {
      outputString += "Boom";
      console.log("Boom");
    }
    if (i%13 == 0) {
      outputString += "Shoot";
      console.log("Shoot");
    }
    newEl.innerHTML = outputString;
    outputEl.appendChild(newEl);
  }
}


var button = document.getElementById("my-button");
button.addEventListener("click", function(fizzBoomBam) {
  var userInput = document.getElementById("num-input").value;
  console.log(userInput);
  console.log("button pushed");
})


// var button = document.getElementById("testing");
// button.addEventListener("click", function() {
//   alert("This is a test");
// })
