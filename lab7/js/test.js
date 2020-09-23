/**
  * Author: Eduardo Aleman
  * September 21, 2020
  * Public Domain
**/

//Window Prompt
userName = window.prompt("Hey there! Please input your name to have it fixed up!");
console.log("userName =", userName);

function userInput() {
    //split the string into an Array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort Array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to the orig string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    //can be done differently, like this shown in Lab examples:
    //    userName.toLower().split("").sort().join("")
    return nameSorted;
}

//Bonus Task!
//Lets see if I can fit it in one file...
//userInput - takes user input and sorts it
function myNameTag() {
  var nameTagArray = userName.split('');
  console.log("nameTagArray =", nameTagArray);

  var nameTagS = nameTag.sort('');
  console.log("nameTagS =", nameTagS)
  return myNameTagSort;
}

//output
document.writeln("Here's your name: ",
    userInput(), "</br>")
document.writeln("Testing randomization: ",
    myNameTag(), "</br>");
