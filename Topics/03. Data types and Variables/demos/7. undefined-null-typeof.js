'use strict';

let x = 5;
console.log('x = ' + x + ', typeof(x) = ' + typeof(x));

x = 3.14159;
console.log('x = ' + x + ', typeof(x) = ' + typeof(x));

x = undefined;
console.log('x = ' + x + ', typeof(x) = ' + typeof(x));

x = null;
// it's convenient to use interpolation here to avoid all the pluses
// typeof can be used both like "typeof something" and "typeof(something)"
console.log(`x = ${x}; typeof x = ${typeof x}`);

x = 'hello';
console.log(`x = ${x}; typeof x = ${typeof x}`);

x = new Number(5);
console.log(`x = ${x}; typeof x = ${typeof x}`);