/**
  * Eduardo Aleman
  * October 7, 2020
  * Public Domain
**/



math = "http://numbersapi.com/5/math"

// $.ajax({
//   url: math,
//   data: {id: 123},
//   type: "GET",
//   dataType: "json",
// });

$("#activate").click(function() {
  console.log("Click");

  $.ajax({
    url: math,
    data: {id: 123},
    type: "GET",
    dataType: "json",
  })

  //Taken from the jsfiddle example during class lecture on AJAX by Wes Modes
  .done(function( data ) {
      // alert("Success!");
      var quote = data.message;
      $("#output").append("<p>" + quote)
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
	})
});
