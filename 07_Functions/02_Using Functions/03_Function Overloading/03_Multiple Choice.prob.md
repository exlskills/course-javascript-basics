>>Consider the following code segment:

```
function printText(name, number, age) {
    if (arguments.length == 1) {
      console.log(name);
    } else if (arguments.length == 2) {
      console.log(name + " " + number);
    } else {
      console.log(name + " " + number + " " + age);
    }
}
printText("Bill", 20);
```

What will the following code segment print to the console?<<

( ) Bill, 20 {{Incorrect because commas are not included in `console.log()`.}}
(x) Bill 20 {{Correct because the number of arguments is 2 and will therefore print the name and the number with a space in between.}}
( ) Bill, 20, undefined {{Incorrect because the age parameter is not printed as the length of the arguments is 2.}}
( ) Bill 20 undefined {{Incorrect because the age parameter is not printed as the length of the arguments is 2.}}
( ) It will print nothing to the console {{Incorrect because the function has its own `console.log()` statements.}}

||The length of the arguments are specified using the `if` statements, so "undefined" should not be printed to the console.||