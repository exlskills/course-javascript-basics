>>Consider the following code segment:

```
let varOne = 12 % 3.5;
console.log(varOne);
```

What will the following code print to the console?<<

( ) 3.428 {{Incorrect because the remainder of 12 divided by 3.5 is 1.5, not 3.428.}}
( ) 3 {{Incorrect because the remainder of 12 divided by 3.5 is 1.5, not 3.}}
(x) 1.5 {{Correct because the remainder of 12 divided by 3.5 is 1.5.}}
( ) 2 {{Incorrect because the remainder of 12 divided by 3.5 is 1.5, not 2.}}
( ) The `console.log()` statement will throw an error. {{Incorrect because the `console.log()` statement above will print 1.5, which is the remainder of 12 divided by 3.5.}}

||The modulus operator (%) returns the remainder of the first operand divided by the second operand.||