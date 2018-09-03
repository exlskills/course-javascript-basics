>>What will the following code segment print on the console?

```
let varOne = 10.55;
let varTwo = varOne | 0;
console.log(varTwo);
```

<<

( ) 9 {{Incorrect because converting from a floating-point to an integer doesn't subtract 1 from the original value.}}
( ) 9.5 {{Incorrect because converting from a floating-point to an integer doesn't subtract 1 from the original value.}}
( ) 10.0 {{Incorrect because converting from a floating-point to an integer removes all decimal points.}}
(x) 10 {{Correct because converting from a floating-point to an integer does not round up, it only removes everything after the decimal.}}
( ) 11 {{Incorrect because converting from a floating-point to an integer does not round up.}}

||Converting from a floating-point to an integer does not change the original value by 1. ||