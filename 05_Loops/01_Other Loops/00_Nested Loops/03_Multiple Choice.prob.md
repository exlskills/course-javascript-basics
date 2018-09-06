>>Consider the following code segment:

```
let varOne = 0;
for (i = 0; i < 4; i++){
    for (j = 0; j < 4; j++){
        varOne++;
    }
}
console.log(varOne);
```

What number is printed to the console?<<

( ) 4 {{Incorrect because `varOne++` is executed 16 times.}}
( ) 8 {{Incorrect because `varOne++` is executed 16 times.}}
( ) 10 {{Incorrect because `varOne++` is executed 16 times.}}
(x) 16 {{Correct because `varOne++` is executed 16 times.}}
( ) 20 {{Incorrect because `varOne++` is executed 16 times.}}

||The first `for` loop is executed when i = 0, 1, 2, and 3.||