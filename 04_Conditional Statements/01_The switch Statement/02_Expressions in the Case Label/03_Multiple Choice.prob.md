>>Consider the following code segment:

```
let total = 20;
switch (true){
    case (total / 2 == 10 && total > 10): console.log(1); break;
    case (total != 20): console.log(2); break;
    case (total / 2 == 40 || total > 10): console.log(3); break;
    case (total + 20 == 40 && total != 20): console.log(4); break;
    case (total == 20 && total % 2 == 0): console.log(5); break;
}
```

What will the following code print to the console?<<

(x) 1 {{Correct because both `total / 2 == 0` and `total > 10` evaluate to true.}}
( ) 2 {{Incorrect because the first case evaluates to true, and since the `break;` statement exists, 2 will never be printed.}}
( ) 3 {{Incorrect because the first case evaluates to true, and since the `break;` statement exists, 3 will never be printed.}}
( ) 4 {{Incorrect because the first case evaluates to true, and since the `break;` statement exists, 4 will never be printed.}}
( ) 5 {{Incorrect because the first case evaluates to true, and since the `break;` statement exists, 5 will never be printed.}}

||Only the first case that evaluates to true is executed.||