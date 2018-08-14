const literalRegex = /y$/g; // matches any strings that end with a 'y'

console.log(literalRegex.test("Telepathy")); // prints true as the last index as the word ends with a 'y'
console.log(literalRegex.test("Hymn")); // prints false as the word doesn't end with a 'y'
console.log(literalRegex.exec("Telepathy")); // prints an array as the last index as the word ends with a 'y'
console.log(literalRegex.exec("Hymn")); // prints null as the word doesn't end with a 'y'