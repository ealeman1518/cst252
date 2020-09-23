/**
  * Author: Eduardo Aleman
  * Septermber 19, 2020
  * Public Realm
**/

//Creating the Variables
var myTransport = ["My parents", " my friends", " and the bus."];

var myMainRide = {
  make: "Nissan",
  model: "Versa",
  color: "Black",
  year: 2013,
  age: function() {
    return 2020 - this.year;
  }
}

//Output

document.writeln("The kinds of transport that I use is: ", myTransport, "</br>");
document.writeln("My totally not imaginary main ride is: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>")
document.writeln("The age of my ", myMainRide.model, " is ", myMainRide.age(), " years.");
