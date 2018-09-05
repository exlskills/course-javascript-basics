>>Consider the following code segment:

```
if (10 > 20 && 20 > 10){
    console.log(10);
} else {
    console.log(20);
}
if (10 < 20 && 50 % 5 == 10){
    console.log(30);
}
if (10 == 20 || 50 / 0 == 0){
    console.log(40);
}
```

What will the following code print to the console?<<

( ) 10 {{Incorrect because `10 > 20` evaluates to false.}}
(x) 20 {{Correct because `10 > 20` evaluates to false, which is why the `else` statement is executed.}}
( ) 30 {{Incorrect because `50 % 5 == 10` evaluates to false.}}
( ) 40 {{Incorrect because both `10 == 20` and `50 / 0 == 0` evaluate to false.}}
( ) The code above will throw an error when executed. {{Incorrect because the code above has no syntax errors.}}

||The expression "50 / 0" results in "Infinity", not 0.||