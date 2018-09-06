>>Consider the following code segment:

```
let varOne = 20;
do {
console.log(varOne);
varOne++;
}
while (varOne < 20);
```

What is the last number printed on the console after running the code above?<<

( ) 19 {{Incorrect because `varOne` will never equal 19.}}
(x) 20 {{Correct because the statements inside the `do` block is executed once before the condition is checked.}}
( ) 21 {{Incorrect because the expression `varOne < 20` evaluates to false.}}
( ) 22 {{Incorrect because the expression `varOne < 20` evaluates to false.}}
( ) Nothing is printed to the console {{Incorrect because the statements inside the `do` block are executed at least once, even if the expression inside the `while` loop evaluates to false.}}

||The statements inside the `do` block are always executed before the loop condition is evaluated.||