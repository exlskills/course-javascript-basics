>>Consider the following statement:

```
let varOne = "100100";
```

Which of the following statements correctly parses the string `varOne` into an integer?<<

( ) `parseInt(varone);` {{Incorrect because `varone` is not the same as `varOne`.}}
(x) `parseInt(varOne);` {{Correct because `parseInt()` is used with the correct variable name.}}
( ) `parseFloat(varone);` {{Incorrect because `parseFloat()` returns a floating-point number, not an integer.}}
( ) `parseFloat(varOne);` {{Incorrect because `parseFloat()` returns a floating-point number, not an integer.}}
( ) `parseInt();` {{Incorrect because the variable `varOne` is not used.}}

||`parseInt(variable_name);` is used when parsing a string to an integer. ||