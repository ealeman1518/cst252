/**
 * Eduardo Aleman
 * October 25th, 2020
 * Public Domain
 **/

//Make Car 1
class Car {
  constructor(brand, model, year, color) {
    this.carbrand = brand;
    this.carmodel = model;
    this.caryear = year;
    this.carcolor = color;
  }
  info() {
    return "My first car is a " + this.carcolor + " " + this.carbrand + " " + this.carmodel + " " + this.caryear;
  }
}

var myCar = new Car("Nissan", "Versa", "2013", "Black");
console.log(myCar.info());
document.getElementById("output").innerHTML += "<p>" + myCar.info() + "</p>";

//Make car 2
class newerCar {
  constructor(brand, model, year, color) {
    this.carbrand = brand;
    this.carmodel = model;
    this.caryear = year;
    this.carcolor = color;
  }
  info() {
    return "My second car is a " + this.carcolor + " " + this.carbrand + " " + this.carmodel + " " + this.caryear;
  }
}

var myNewCar = new newerCar("Ford", "Fusion", "2015", "White");
console.log(myNewCar.info());
document.getElementById("output").innerHTML += "<p>" + myNewCar.info() + "</p>";

// Task 2, the OOP Design!

// Set up the game initially

  //  Create the game
  //  Create a randomized word
// Start the game loop
  //  ask for letter
  //  validate the letter for the hidden word
  // if the letter is wrong
    //add a limb
  //else
      //display correct letter of hidden word
  //else
    //word is completed, give player a win
  //else
    //game over and reset
