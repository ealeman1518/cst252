/**
  *
  * September 30, 2020
  * Public Domain
**/

//Make button with jQuery
$("#output").append("<button id='my-button'>DONT CLICK MEEEEEEEEEEEEE!!!!!!!");
$("#my-button").css("background-color", "green");

//make button listener
$("button").click(function() {
  //make alert upon press
  alert("I TOLD YOU NOT TO TOUCH ME FOO");
});
