>>Consider the following code segment:

```
var arr = [2, 4, 8, 16, 32];
arr.reverse();
arr = arr.slice(1, 3);
console.log(arr);
```

What will the following code segment print to the console?<<

( ) 32, 16, 8, 4, 2 {{Incorrect because the `slice()` method changes the array from [32,16,8,4,2] to [16,8].}}
( ) 32, 16, 8, 4, 2, 1, 3 {{Incorrect because the `slice()` method changes the array from [32,16,8,4,2] to [16,8].}}
( ) 32, 16 {{Incorrect because the `slice()` method starts from the first index and ends with the third index (exclusive).}}
(x) 16, 8 {{Correct because the `slice()` method starts from the first index and ends with the third index (exclusive).}}
( ) 8, 4 {{Incorrect because the `slice()` method starts from the first index and ends with the third index (exclusive).}}

||The `slice()` method above starts from the first index (inclusive) and ends with the third index (exclusive).||