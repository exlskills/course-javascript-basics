'use strict';

console.log('----------------------------------------------------');
console.log('Bitwise operators with integers:');
const a = 3;                // 00000000 00000011
const b = 5;                // 00000000 00000101

console.log(`a = {a}, b = ${b}`);

console.log('a | b  = ' + (a | b) + ' - > ' + (a | b).toString(2));   // 00000000 00000111
console.log('a & b  = ' + (a & b) + ' - > ' + (a & b).toString(2));   // 00000000 00000001
console.log('a ^ b  = ' + (a ^ b) + ' - > ' + (a ^ b).toString(2));   // 00000000 00000110
console.log('~a & b = ' + (~a & b) + ' - > ' + (~a & b).toString(2));   // 00000000 00000100
console.log('a << 1 = ' + (a << 1) + ' - > ' + (a << 1).toString(2));  // 00000000 00000110
console.log('a >> 1 = ' + (a >> 1) + ' - > ' + (a >> 1).toString(2));  // 00000000 00000001


console.log('----------------------------------------------------');
console.log('Bitwise operators with floats:');
const f1 = 3.5;
const f2 = 5.3;

console.log('f1 = ' + f1 + ', f2 = ' + f2);

console.log('f1 | f2  = ' + (f1 | f2) + ' - > ' + (f1 | f2).toString(2));   // 00000000 00000111
console.log('f1 & f2  = ' + (f1 & f2) + ' - > ' + (f1 & f2).toString(2));   // 00000000 00000001
console.log('f1 ^ f2  = ' + (f1 ^ f2) + ' - > ' + (f1 ^ f2).toString(2));   // 00000000 00000110
console.log('~f1 & f2 = ' + (~f1 & f2) + ' - > ' + (~f1 & f2).toString(2));   // 00000000 00000100
console.log('f1 << 1 = ' + (f1 << f2) + ' - > ' + (f1 << 1).toString(2));  // 00000000 00000110
console.log('f1 >> 1 = ' + (f1 >> f2) + ' - > ' + (f1 >> 1).toString(2));  // 00000000 00000001

console.log('----------------------------------------------------');
console.log('Bitwise operators with non-number types:');

console.log('~true = ' + ~true);
console.log('~false = ' + ~false);
console.log('"~JavaScript" = ' + ~'JavaScript')
console.log('"js" & true = ' + ('js' | true))
console.log('"js" & true = ' + ('js' ^ true))	