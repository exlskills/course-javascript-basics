>>Consider the following code segment:

```
let sum = 20;
switch(sum){
    case 10: console.log("a"); break;
    case 20: console.log("b"); break;
    case 30: console.log("c"); break;
    case 40: console.log("d"); break;
    case 50: console.log("e"); break;
}
```

What will the following code print to the console?<<

( ) a {{Incorrect because the value of `sum` is 20, meaning the letter 'a' will never be printed.}}
(x) b {{Correct because the value of `sum` is 20, which is why the letter 'b' is printed.}}
( ) c {{Incorrect because the value of `sum` is 20, meaning the letter 'b' will be printed.}}
( ) d {{Incorrect because the value of `sum` is 20, meaning the letter 'b' will be printed.}}
( ) e {{Incorrect because the value of `sum` is 20, meaning the letter 'b' will be printed.}}

||Only the statements in the appropriate case are executed if the `break;` statement exists.||