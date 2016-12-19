'use strict';

console.log('----------------------------------------------------');
console.log('Regular comparisons: ');
const a = 5;
const b = 4;

console.log('a = ' + a + ', b = ' + b);
console.log('(a >= b)  = ' + (a >= b)); // True
console.log('(a != b)  = ' + (a != b)); // True
console.log('(a == b)  = ' + (a == b)); // False
console.log('(a == a)  = ' + (a == a)); // True
console.log('(a != ++b) = ' + (a != ++b)); // False
console.log('(a > b)   = ' + (a > b));  // False

console.log('----------------------------------------------------');
console.log('Special comparisons: ');
const zeroInt = 0;
const oneInt = 1;

const zeroFloat = 0.0;
const oneFloat = 1.0;

const emptyStr = '';
const oneStr = '1';
const str = 'JavaScript';

const nullValue = null;
const emptyObject = {};

console.log('0 == 0.0 = ' + (zeroInt == zeroFloat));
console.log('1 == "1" =' + (oneInt == oneStr));
console.log('1 === "1" =' + (oneInt === oneStr));


console.log('0 == "" = ' + (zeroInt == emptyStr));
console.log('0 === "" = ' + (zeroInt === emptyStr));

console.log(nullValue == emptyStr)				