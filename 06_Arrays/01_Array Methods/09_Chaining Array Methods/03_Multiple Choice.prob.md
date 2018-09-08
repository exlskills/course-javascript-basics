>>Consider the following code segment:

```
var arr = [5, 25, 125, 625, 3125, 15625];
function isOdd(number) {
  return number % 2 == 1;
}
function divide(number) {
  return number / 25;
}
console.log(arr.filter(isOdd).map(divide));
```

What will the following code segment print to the console?<<

( ) An empty array {{Incorrect because the `filter()` method doesn't change the array.}}
( ) 5, 25, 125, 625, 3125, 15625 {{Incorrect because the `divide()` function divides all the elements in the array by 25.}}
( ) 1, 5, 25, 125, 625, 3125 {{Incorrect because the `divide()` function divides all the elements in the array by 25, not 5.}}
(x) 0.2, 1, 5, 25, 125, 625 {{Correct because the `divide()` function divides all the elements in the array by 25.}}
( ) 0, 1, 5, 25, 125, 625 {{Incorrect because 5 divided by 25 results in 0.2, not 0.}}

||The `filter()` method keeps all the odd numbers in the array while the `map()` method divides the elements in the array by 25.||