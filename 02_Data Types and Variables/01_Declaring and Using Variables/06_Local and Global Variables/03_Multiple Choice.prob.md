>>Consider the following code segment:

```
sum = 0;
function add() {
    let firstNumber = 10;
    let secondNumber = 20;
    console.log(sum);                           // Statement 1
    console.log(firstNumber);                   // Statement 2
    return firstNumber + secondNumber;
}

console.log(sum);                               // Statement 3
console.log(sum + add());                       // Statement 4
console.log(sum + firstNumber + secondNumber);  // Statement 5
```

Which `console.log()` statement will throw an error?<<

( ) Statement 1 {{Incorrect because `sum` is a global variable, meaning it can be used anywhere in the program.}}
( ) Statement 2 {{Incorrect because `firstNumber` is a local variable inside the function `add()` and can be used inside the function itself.}}
( ) Statement 3 {{Incorrect because `sum` is a global variable.}}
( ) Statement 4 {{Incorrect because `sum` is a global variable and the function `add()` is used correctly.}}
(x) Statement 5 {{Correct because the variables "a" and "b" are local variables and cannot be used outside the function `add()`.}}

||`sum` is a global variable while `firstNumber` and `secondNumber` are local variables inside the `add()` function. ||