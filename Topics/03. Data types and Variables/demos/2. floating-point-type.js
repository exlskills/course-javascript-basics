'use strict';

const PI = Math.PI; // 3.141592653589793
console.log('PI = ' + PI);

const minValue = Number.MIN_VALUE;
console.log('Number.MIN_VALUE = ' + minValue);

const maxValue = Number.MAX_VALUE;
console.log('Number.MAX_VALUE = ' + maxValue);

const div0 = PI / 0; // Infinity
console.log('PI / 0 = ' + div0);

const divMinus0 = -PI / 0; // -Infinity
console.log('-PI / 0 = ' + divMinus0);

const unknown = div0 / divMinus0; // NaN
console.log('Infinity / -Infinity = ' + unknown);

const eps = Number.EPSILON;
console.log('Number.EPSILON = ' + eps);

console.log('');

const a = 0.1,
    b = 0.2,
    sum = 0.3,
    equal = (a + b == sum); // false

console.log('a = ' + a);
console.log('b = ' + b);
console.log('a+b = ' + (a + b));
console.log('sum = ' + sum);
console.log('sum == a+b? is ' + equal);