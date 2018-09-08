>>Consider the following code segment:

```
var arr = [1, 1, 2, 3, 5, 8, 11];
let sum = 20;
arr.forEach(function(item, index) {
  sum += item;
});
console.log(sum);
```

What will the following code segment print to the console?<<

( ) 31 {{Incorrect because the original value of `sum` is 20.}}
( ) 41 {{Incorrect because the sum of all the elements plus 20 is equal to 51.}}
( ) 20 {{Incorrect because the value of `sum` changes in the `forEach()` method.}}
( ) 50 {{Incorrect because the sum of all the elements plus 20 is equal to 51.}}
(x) 51 {{Correct because the sum of all the elements plus 20 is equal to 51.}}

||The `forEach()` method adds the value of each element to the variable `sum`.||