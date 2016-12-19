'use strict';

const studentsCount = 5;
console.log('studentsCount is: ' + studentsCount);

const maxInteger = 9007199254740991;
console.log('max precise integer is: ' + maxInteger);

const minInteger = -9007199254740991;
console.log('min precise integer is: ' + minInteger);

const greaterThanMax = maxInteger + 1;
console.log('is maxInteger + 1 possible?  ' + greaterThanMax);

const maxIntMult33 = maxInteger * 33;
console.log('maxInteger * 33 is: ' + maxIntMult33);
// Lost precision. The correct is 297237575406452736