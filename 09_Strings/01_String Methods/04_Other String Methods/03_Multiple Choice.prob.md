>>Consider the following code segment:

```
var str = " Hell o World ! ";
console.log(str.trim());
```

What will the following code segment print to the console?<<

( ) Hello World! {{Incorrect because `trim()` only removes the whitespace at the front and end of the string.}}
( ) HelloWorld! {{Incorrect because `trim()` only removes the whitespace at the front and end of the string.}}
( ) Hello World! {{Incorrect because `trim()` only removes the whitespace at the front and end of the string.}}
( ) HelloWorld ! {{Incorrect because `trim()` only removes the whitespace at the front and end of the string.}}
(x) Hell o World ! {{Correct because `trim()` only removes the whitespace at the front and end of the string..}}

||The `trim()` method does not affect white spaces that are enclosed by letters.||