'use strict';

// different quotes can be used to create strings - double, single and backticks
const firstName = 'Ivan',
    middleName = `Todorov`,
    lastName = "Ivanov";
    
console.log("Hello, " + firstName + "!");

const fullName = firstName + ' ' + middleName + ' ' + lastName;
console.log('Your full name is ' + fullName); // create a string using concatenation
console.log(`Your full name is ${fullName}`); // create a string using string interpolation

console.log(`The sum of 123, 456 and 879 is ${123 + 456 + 879}`);

const asSalamuAlaykum = 'السلام عليكم';
console.log(asSalamuAlaykum);

const кирилица = 'Това е на кирилица!';
console.log(кирилица);

const leafJapanese = '葉'; // Pronounced as 'ha'
console.log(leafJapanese);