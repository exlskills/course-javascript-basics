'use strict';

const first = 'First';
const second = 'Second';
console.log(first + second); // FirstSecond
const output = 'The number is : ';
const number = 5;
console.log(output + number);
// The number is : 5

console.log('----------------------------------------------------');

let a = 6;
let b = 4;
console.log(a > b ? 'a > b' : 'b >= a'); // a > b
let c = b = 3; // b = 3; followed by c = 3;
console.log(c); // 3
console.log((a + b) / 2); // 4.5
console.log(typeof a); // number
console.log(typeof []); // object

const num = new Number(6);
console.log(num instanceof Number);
console.log(6 instanceof Number);

console.log('----------------------------------------------------');

const person = {};
person.name = 'George';
person.age = 21;

console.log(typeof person);
console.log(person.name, person.age);
console.log(person['name'], person['age']);
console.log(person);

delete person.age;

console.log(person);