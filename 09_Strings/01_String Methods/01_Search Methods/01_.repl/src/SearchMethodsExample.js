var str = "ABC ACB BAC BCA CAB CBA";

console.log(str.replace('A', 'Z')); // only replaces first occurrence
console.log(str.search(/A/g)); // searches for the first occurrence of 'A'
console.log(str.indexOf('B')); // returns the first occurrence of 'B'
console.log(str.lastIndexOf('B')); // returns the last occurrence of 'B'