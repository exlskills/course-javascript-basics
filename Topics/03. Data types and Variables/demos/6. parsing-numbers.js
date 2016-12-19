'use strict';

const numAsString = '1234';

console.log(parseInt(numAsString) + 1);
console.log(parseFloat(numAsString) + 1);
console.log(+numAsString + 1);
console.log(numAsString * 1 + 1);
console.log((numAsString | 0) + 1);
console.log(Number(numAsString) + 1)

const invalidNumString = '435javascript';
console.log(parseInt(invalidNumString) + 1); // will parse whatever it can - 435
console.log(+invalidNumString); // NaN
console.log(Number(invalidNumString)); // NaN

const fractionString = '3.65';
console.log(parseFloat(fractionString) + 1);
console.log(Number(fractionString) + 1);
console.log(+fractionString + 1);