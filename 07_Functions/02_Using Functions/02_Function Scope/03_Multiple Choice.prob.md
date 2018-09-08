>>Consider the following code segment:

```
var arr = [5, 3, 4, 53, 6, 2];
function numberSum(array){
    var sum = 0;
    console.log(arr);         // Statement 1
    for (counter = 0; counter < array.length; counter++){
      sum += array[counter];
    }
    console.log(sum);         // Statement 2
    return sum;
}
console.log(arr);             // Statement 3
console.log(sum);             // Statement 4
console.log(numberSum(arr));  // Statement 5
```

Which `console.log()` statement will cause an error?<<

( ) Statement 1 {{Incorrect because `arr` is a global variable that can be referenced in the function.}}
( ) Statement 2 {{Incorrect because `sum` is a local variable that can be referenced in the function.}}
( ) Statement 3 {{Incorrect because `arr` is a global variable that can be referenced anywhere in the code.}}
(x) Statement 4 {{Correct because `sum` is a local variable that can only be referenced inside the function.}}
( ) Statement 5 {{Incorrect because the function is a global, and can be referenced anywhere below the function itself.}}

||`sum` is a local variable while `arr` is a global variable.||