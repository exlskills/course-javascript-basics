'use strict';

console.log('11.0 / 3 = ' + (11.0 / 3)); // 3.666666667
console.log('11 / 3.0 = ' + (11 / 3.0)); // 3.666666667
console.log('11 % 3 = ' + (11 % 3));   // 2
console.log('11 % -3 = ' + (11 % -3));  // 2
console.log('-11 % 3 = ' + (-11 % 3));  // -2'
console.log('1.5 / 0.0 = ' + (1.5 / 0.0));  // Infinity
console.log('-1.5 / 0.0 = ' + (-1.5 / 0.0)); // -Infinity
console.log('0.0 / 0.0 = ' + (0.0 / 0.0));  // NaN				'
console.log('true / 2 = ' + (true / 2));
console.log('"1" / 2 = ' + ('1' / 2));
console.log('"as" / 2 = ' + ('as' / 2));

const x = 0;
console.log('5 / x = ' + (5 / x));