let valueDouble = 8.75;
let valueInt = valueDouble | 0; // Convert floating-point to integer number
let roundedInt = (valueDouble + 0.5) | 0; // Convert to integer number with rounding
console.log(valueInt);
console.log(roundedInt);

// Convert String to integer
let str = '1234';
let i = str | 0;
console.log(i + 1);