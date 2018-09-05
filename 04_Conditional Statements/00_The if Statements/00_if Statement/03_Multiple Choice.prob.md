>>Consider the following code segment:

```
if (10 > 20 && 20 > 10){
    console.log(10);
}
if (10 < 20 && 50 / 5 == 10){
    console.log(20);
}
if (10 == 20 || a / 0){
    console.log(30);
}
```

What will the following code print to the console?<<

( ) 10 {{Incorrect because the last `if` statement will throw an error as the variable `a` is not declared.}}
( ) 20 {{Incorrect because the last `if` statement will throw an error as the variable `a` is not declared.}}
( ) 30 {{Incorrect because the last `if` statement will throw an error as the variable `a` is not declared.}}
(x) The code above will throw an error when run. {{Correct because the variable `a` is used in the last `if` statement without a variable declaration.}}
( ) All three `console.log()` statements will be executed. {{Incorrect because the last `if` statement will throw an error as the variable `a` is not declared.}}

||Does the variable `a` have an initial value?||