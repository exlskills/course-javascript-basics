>>Consider the following code segment:

```
var literalRegex = /t$/g;
console.log(literalRegex.test("JavaScript Basics Course"));
```

What will the following code segment print to the console?<<

( ) [JavaScript] {{Incorrect because the `test()` method will not return an array.}}
( ) [JavaScript Basics Course] {{Incorrect because the `test()` method will not return an array.}}
( ) true {{Incorrect because "JavaScript Basics Course" is one string, not 3 separate strings.}}
(x) false {{Correct because the string "JavaScript Basics Course" does not end with the letter 't'.}}
( ) undefined {{Incorrect because the `test()` method will print true or false.}}

||The `test()` method returns either true or false.||