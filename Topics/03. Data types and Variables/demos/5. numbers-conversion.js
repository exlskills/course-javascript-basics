'use strict';

let fractionalNumber = 8.75;
const truncated = fractionalNumber | 0,
    truncated2 = Math.trunc(fractionalNumber);

console.log('fractionalNumber = ' + fractionalNumber);
console.log('truncated with | = ' + truncated);
console.log('truncated with Math.trunc = ' + truncated2);

fractionalNumber = 8.75;
const roundedInt = (fractionalNumber + 0.5) | 0;
const rounderInt2 = Math.round(fractionalNumber);

console.log('fractionalNumber = ' + fractionalNumber);
console.log('rounding with | = ' + roundedInt);
console.log('rounding with Math.round = ' + rounderInt2);