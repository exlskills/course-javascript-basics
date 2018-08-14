// Constructor of the Function object
var printNumber = new Function("console.log(2)");

// Function Declaration
function printGreeting() {
  console.log("Hello");
}

// Function Expression
var printName = function () { console.log("Bill") };

// Call functions
printNumber();
printGreeting();
printName();