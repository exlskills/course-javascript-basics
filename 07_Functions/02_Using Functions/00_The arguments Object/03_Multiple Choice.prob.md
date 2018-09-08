>>Consider the following code segment:

```
let sum = 0;
function addArguments() {
    var i;
    for (i in arguments) {
        sum += i;
    }
}
addArguments(5,7,3,7,8);
```

What will the following code segment print to the console?<<

( ) 0 {{Incorrect because there are no `console.log()` statements in the code. Therefore, nothing is printed to the console.}}
( ) 29 {{Incorrect because there are no `console.log()` statements in the code. Therefore, nothing is printed to the console.}}
( ) 30 {{Incorrect because there are no `console.log()` statements in the code. Therefore, nothing is printed to the console.}}
( ) 31 {{Incorrect because there are no `console.log()` statements in the code. Therefore, nothing is printed to the console.}}
(x) It does not print anything to the console {{Correct because there is no `console.log()` statement.}}

||`console.log()` is used when printing to the console.||