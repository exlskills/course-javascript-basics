var numberOne = 123;
var numberTwo = 24;
var biggerNumber;
if (numberTwo > numberOne) { // expression results in false
    biggerNumber = numberTwo;
}
if (numberOne > numberTwo) { // expression results in true
    biggerNumber = numberOne;
}
console.log('The greater number is: ' + biggerNumber);