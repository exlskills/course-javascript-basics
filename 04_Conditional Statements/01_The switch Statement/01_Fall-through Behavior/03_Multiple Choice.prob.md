>>Consider the following code segment:

```
let sum = 20;
switch(sum){
    case 10: console.log("a"); break;
    case 20: console.log("b");
    case 30: console.log("c"); break;
    case 40: console.log("d");
    case 50: console.log("e"); break;
}
```

What will the following code print to the console?<<

( ) a and b {{Incorrect because the value of `sum` is 20, meaning the letter 'a' will never be printed.}}
(x) b and c {{Correct because 'b' is printed as the value of `sum` is 20, while 'c' is also printed as the `break;` statement is missing.}}
( ) b and d {{Incorrect because the letter 'c' is not skipped.}}
( ) c and d {{Incorrect because the value of `sum` is 20, meaning the letter 'b' should be printed first.}}
( ) d and e {{Incorrect because the value of `sum` is 20, meaning the letter 'b' should be printed first.}}

||The cases are executed one by one until the `break;` statement.||