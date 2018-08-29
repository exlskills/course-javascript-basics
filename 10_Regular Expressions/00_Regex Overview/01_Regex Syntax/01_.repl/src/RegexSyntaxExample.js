// literal syntax
const literalRegex = /y$/g; // matches any string that ends with a 'y'

console.log("Telepathy".search(literalRegex)); // prints the last index as the word ends with a 'y'
console.log("Hymn".search(literalRegex)); // prints -1 as the word doesn't end with a 'y'

// function constructor syntax
const constructorRegex = new RegExp('^T', 'g'); // matches any string that starts with a 'T'

console.log("Telephone".search(constructorRegex)); // prints 0 as the word starts with a capital 'T'
console.log("telephone".search(constructorRegex)); // prints -1 as the word doesn't start with a capital 'T'