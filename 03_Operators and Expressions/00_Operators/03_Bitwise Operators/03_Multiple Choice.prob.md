>>Consider the following code segment:

```
let a = 4; // 00000000 00000100
let b = 6; // 00000000 00000110
console.log(a | ~b);
```

What will the `console.log()` statement print to the console?<<

( ) 6 (00000000 00000110) {{Incorrect because 6 is the result of `a | b`.}}
( ) -7 (11111111 11111001) {{Incorrect because -7 is the result of `~b`.}}
(x) -3 (11111111 11111101) {{Correct because -3 is the result of `a | ~b`.}}
( ) 4 (00000000 00000100) {{Incorrect because 4 is the result of `a & b`.}}
( ) -5 (11111111 11111011) {{Incorrect because -5 is the result of `~a`.}}

||The ~ operator is evaluated before the OR operator. ||