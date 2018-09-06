>>Consider the following code segment:

```
let varOne = 15;
while (varOne < 28){
    if (varOne == 20){
        break;
    }
    console.log(varOne);
    varOne++;
}
```

What is the last number printed on the console after running the code above?<<

( ) 15 {{Incorrect because the `console.log()` statement runs 5 times before the `while` loop is exited.}}
(x) 19 {{Correct because 20 is never printed to the console as the `while` loop is exited after `break;` is executed.}}
( ) 20 {{Incorrect because the `break;` statement exits the `while` loop.}}
( ) 27 {{Incorrect because the `break;` statement exits the `while` loop when `varOne` is equal to 20.}}
( ) 28 {{Incorrect because the `break;` statement exits the `while` loop when `varOne` is equal to 20.}}

||The `break;` statement exits the while loop and ignores the rest of the statements below it.||