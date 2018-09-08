>>Consider the following code segment:

```
var arrOne = [1, 3, 5, 7, 9];
var arrTwo = [2, 4, 6, 8, 10];
arrTwo.shift();
var arrThree = arrOne.concat(arrTwo);
console.log(arrThree);
```

What will the following code segment print to the console?<<

( ) 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 {{Incorrect because the elements in the array should not be sorted.}}
( ) 1, 3, 4, 5, 6, 7, 8, 9, 10 {{Incorrect because the elements in the array should not be sorted.}}
(x) 1, 3, 5, 7, 9, 4, 6, 8, 10 {{Correct because the first element of `arrTwo` is removed before `arrOne` and `arrTwo` are concatenated.}}
( ) 1, 3, 5, 7, 9, 2, 4, 6, 8, 10 {{Incorrect because the number 2 is removed from `arrTwo`.}}
( ) 1, 3, 5, 7, 9, 2, 4, 6, 8 {{Incorrect because the number 10 should not be removed from `arrTwo`.}}

||Notice the `shift()` method being called on `arrTwo` before the two arrays are concatenated.||