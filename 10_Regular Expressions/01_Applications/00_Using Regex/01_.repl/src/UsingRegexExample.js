// Replace all white spaces, tabs and newlines with a single space
let text = 'text    with    lots of       spaces\n' +
           '      and lots of tabs       ';

console.log(text);
console.log(text.replace(/\s\s+/g, ' '));