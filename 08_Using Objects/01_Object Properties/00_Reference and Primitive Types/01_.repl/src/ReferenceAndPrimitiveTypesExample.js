// All types derive from Object
var number = new Number(50);
console.log(typeof new Object() == typeof number); // will return true because all types derive from Object

// Passed by Reference vs Passed by Value
var num = 5;
var arr1 = [1, 2, 3, 4, 5];
function squareNumber(integer) {
  integer = integer * integer;
}
function addArray(array) {
  array.push(1);
}
squareNumber(num);
addArray(arr1);
console.log(num); // numbers are passed by value, so the function does not affect the original number
console.log(arr1); // objects are passed by reference, so the function affects the original array