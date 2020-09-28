/**
  * Author: Eduardo Aleman
  * September 27th, 2020
  * Public Domain
**/

//Test 1: Making the function
function thingOne(test) {
  console.log(test + ": This is the first thing.<br>")
}

function thingTwo(test) {
  console.log(test + ": This is the second thing.<br>")
}

function thingThree(test) {
  console.log(test + ": This is the third thing<br>")
}

thingOne("Testo 1");
thingTwo("Testo 1");
thingThree("Testo 1");

//Test 2: using a anonymous function and calling it back
setTimeout(function() {
  thingOne("Testo 2");
}, 0);

setTimeout(function() {
  thingTwo("Testo 2");
}, 0);

setTimeout(function() {
  thingThree("Testo 2");
}, 0);

//Test 3: Make them call in order 2, 3, 1.

setTimeout(function() {
  thingOne("Testo 3");
}, 3000);

setTimeout(function() {
  thingTwo("Testo 3");
}, 1000);

setTimeout(function() {
  thingThree("Testo 3")
}, 2000);
