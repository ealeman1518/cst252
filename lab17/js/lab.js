/**
  * Eduardo Aleman
  * November 1, 2020
  * Public Domain
**/

$(".challenge").click(function() {
  $("#look").toggleClass("challenge");
  console.log("challenge click");
});

$(".problem").click(function() {
  $("#here").toggleClass("problem");
  console.log("problem click");
});

$(".result").click(function() {
  $("#look").removeClass("challenge");
  $("#here").removeClass("problem");
  console.log("result click");
});
