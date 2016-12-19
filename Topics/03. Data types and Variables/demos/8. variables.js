'use strict';

// Not recommended names, but will NOT cause an error
let New = 2; // Here N is capital
let _2Pac; // This identifiers begins with _

// The following names are more appropriate
let greeting = "Hello";
var n = 100; // Undescriptive
const numberOfClients = 100; // Descriptive

// Overdescriptive identifier
let numberOfPrivateClientOfTheFirm = 100;

// THE FOLLOWING WILL CAUSE AN ERROR
numberOfClients = 200; // cannot assign to a variable declared with const
numberOfClients += 10; // cannot assign to a variable declared with const

imGlobalVariable = 'Such global, much famous'; // global variables cause errors under 'use strict' - strict mode
let 2Pac = '2Pac'; // invalid identifier