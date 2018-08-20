let firstValue = 5;
let secondValue;
let thirdValue;

// Using an already declared variable:
secondValue = firstValue;

// The following cascade calling assigns
// 3 to firstValue and then firstValue
// to thirdValue, so both variables have
// the value 3 as a result:
thirdValue = firstValue = 3; // Avoid this!

console.log(firstValue);
console.log(secondValue);
console.log(thirdValue);