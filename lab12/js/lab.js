/**
  * Author: Eduardo Aleman
  * October 10, 2020
  * Public Domain
**/



//Make fizzbuzz function
function fizzBoomBam() {

  for (var input=0; input<200; input++) {

  //make tag for outputs
    var outputEl = document.getElementById("script-output");
    var newEl = document.createElement("p");
    outputEl.appendChild(newEl);
    console.log(input);
    var outputString = '';
    if (input%7 == 0) {
      newEl.innerHTML = input + " FizzBuzzBoom";
      output.El.appendChild(newEl);
      console.log("FizzBuzzBoom")
    } else if (input%3 == 0) {
      console.log("Test 2")
    } else if (input%5 == 0) {
      console.log("Test 3")
    } else {
      console.log("Number: " + input)
    }
  }
    // addNewParagraphToOutput(outputString);
}

var button = document.getElementById("my-button");
button.addEventListener("click", function() {
  var userInput = document.getElementById("num-input").value;
  console.log(userInput);
})


// var button = document.getElementById("testing");
// button.addEventListener("click", function() {
//   alert("This is a test");
// })
