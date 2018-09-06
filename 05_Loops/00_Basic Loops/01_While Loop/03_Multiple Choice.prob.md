>>Consider the following code segment:

```
let varOne = 15;
while (varOne < 28){
    console.log(varOne);
    varOne++;
}
```

What are the first and last numbers printed on the console after running the code above?<<

(x) 15,27 {{Correct because the first execution of the `console.log()` statement prints 15 while the last will print 27 as `28 < 28` evaluates to false.}}
( ) 15,28 {{Incorrect because the `28 < 28` evaluates to false. Therefore, 28 is never printed to the console.}}
( ) 16,27 {{Incorrect because the first execution of the `console.log()` statement prints 15.}}
( ) 16,28 {{Incorrect because the first execution of the `console.log()` statement prints 15.}}
( ) 16,29 {{Incorrect because the first execution of the `console.log()` statement prints 15.}}

||The `while` loop will stop executing the `console.log()` statement when `varOne` is equal to 28.||