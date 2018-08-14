let numberString = '123'
let floatString = '12.3';
console.log(parseInt(numberString) + 1); // String to integer
console.log(parseFloat(floatString) + 0.7); // String to float

let str_1 = '123Hello';
let str_2 = '12.3Hello';
console.log(parseInt(str_1)); // only the number is extracted
console.log(parseFloat(str_2)); // only the number is extracted