/**
 * Eduardo Aleman
 * October 20, 2020
 * Public Domain
 */


function vehicle(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;

  this.info = function() {
    return "My first car is a " + this.color + " " + this.make + " " + this.model + " " + this.year;
  }
}

var myCar = new vehicle("Nissan", "Versa", "2013", "Black");
document.getElementById("output").innerHTML += "<p>" + myCar.info() + "</p>";


function newVehicle(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;

  this.info = function() {
    return "My second car is a " + this.color + " " + this.make + " " + this.model + " " + this.year;
  }
}

var myNewCar = new newVehicle("Honda", "Civic", "1999", "White");
document.getElementById("output").innerHTML += "<p>" + myNewCar.info() + "</p>";
