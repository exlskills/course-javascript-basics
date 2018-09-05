>>Consider the following code segment:

```
let sum = 35;
if (sum % 10 == 0){
    console.log("a");
} else if (sum % 2 == 1){
    if (sum % 5 == 0 && sum % 2 == 0){
        console.log("b");
    } else if (sum % 5 == 0){
        console.log("c")
    } else {
        console.log("d")
    }
} else {
    console.log("e")
}
```

What will the following code print to the console?<<

( ) a {{Incorrect because "35 % 10" is 5.}}
( ) b {{Incorrect because "35 % 2" is 1, not 0.}}
(x) c {{Correct because "35 % 5" is equal to 0.}}
( ) d {{Incorrect because the `else` statement is not executed if the `else if` statement above it evaluates to true.}}
( ) e {{Incorrect because the `else` statement is not executed if the `else if` statement above it evaluates to true.}}

||The `else` statement after the `else if` statement(s) is executed if and only if the `if` and `else if` statements all evaluate to false.||