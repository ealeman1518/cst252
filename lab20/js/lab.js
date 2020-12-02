/**
  * Eduardo Aleman
  * 11/29/2020
  * Public Domain
**/


var endpoint = "https://xkcd.com/info.0.json";


//Referenced .done from Val's lab 20
$("#button").click(function() {
  $.ajax({
    url: endpoint,
    type: "GET",
    dataType: "json",
  })
  .done(function(data) {
    var imageUrl = data.img;
    var title = data.title;
    var alt = data.alt;
    var html = `<div id="imageblock">
      <h2>${title}</h2>
      <img src="${imageUrl}"
      title="${alt}"><br>
      </div>`
    console.log("my new html:", html);
    $("#output").html(html);
  })
  .fail(function( xhr, status, errorThrown) {
    console.log(errorThrown + " Status: " + status);
  })
})
