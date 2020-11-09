/**
  * Eduardo Aleman
  * October 7, 2020
  * Public Domain
**/



// $("test").load("http://numbersapi.com/5/math", callback)
//
$.ajax({
  url: "http://numbersapi.com/5/math",
  data: {id: 123},
  type: "GET",
  dataType: "json",
});

$("#activate").click(function() {
  $("test").load("http://numbersapi.com/5/math");
  console.log("Click");
});
