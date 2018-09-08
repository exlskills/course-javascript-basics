>>Consider the following code segment:

```
var arr = [1, 2, 9, 16, 25, 36, 49, 64, 81, 100];
function isDivisibleByFive(number) {
    return number % 5 == 0;
}
arr = arr.filter(isDivisibleByFive);
var squares = arr.map(function (number) {
    return number * number;
});
console.log(squares);
```

What will the following code segment print to the console?<<

( ) 1, 2, 9, 16, 36, 49, 64, 81 {{Incorrect because the array should not contain numbers that are divisible by 5.}}
( ) 1, 4, 81, 256, 1296, 2401, 4096, 6561 {{Incorrect because the array should not contain numbers that are divisible by 5.}}
(x) 625, 10000 {{Correct because the `filter()` method changes the array to [25, 100], which is then squared.}}
( ) 25, 100 {{Incorrect because the `map()` method squares the values of `arr`.}}
( ) 625 {{Incorrect because the number 10000 should also be in the array `squares`.}}

||The `filter()` method changes `arr` to [25, 100].||