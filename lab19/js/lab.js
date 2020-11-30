/**
  * Eduardo Aleman
  * October 7, 2020
  * Public Domain
**/



memes = "http://numbersapi.com/5/math"

$("#activate").click(function() {
  console.log("Click");

  $.ajax({
    url: memes,
    // data: {id: 123},
    type: "GET",
    // datatype: "json",
  })

  //Taken from the jsfiddle example during class lecture on AJAX by Wes Modes
  .done(function(data) {
      // alert("Success!");
      var quote = data.message;
      $("#output").append("<p>" + quote)
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
	})
});
