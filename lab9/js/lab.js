/**
  * Author: Eduardo Aleman
  * September 29, 2020
  * Public Domain
**/


//Make variable for the element
var outputEl = document.getElementById("output");

//create element "p" in "output", and give it text, then Append as child
var newEl1 = document.createElement("p");
newEl1.innerHTML = "This is a test if it works!";
newEl1.id = "test1";
outputEl.appendChild(newEl1);

//create 2nd element, and give it text, then Append as child
var newEl2 = document.createElement("p");
newEl2.innerHTML = "This is another created element from Javascript!";
newEl2.id = "test2";
outputEl.appendChild(newEl2);
